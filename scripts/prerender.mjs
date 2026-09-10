import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// 1. Shim minimal browser globals for Node.js SSR evaluation
if (typeof globalThis.window === 'undefined') {
  globalThis.window = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
    scrollY: 0,
    location: { href: '', search: '', pathname: '/' },
    navigator: { userAgent: 'node' },
  };
  globalThis.document = {
    getElementById: () => null,
    createElement: () => ({
      setAttribute: () => {},
      style: {},
    }),
    head: {
      appendChild: () => {},
    },
  };
  globalThis.CustomEvent = class CustomEvent {
    constructor(type, eventInitDict) {
      this.type = type;
      this.detail = eventInitDict?.detail;
    }
  };
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distServerDir = path.resolve(rootDir, 'dist-server');

async function prerender() {
  console.log('⚡ Iniciando Pré-renderização (SSG)...');

  // 2. Build the SSR bundle using Vite
  await build({
    configFile: path.resolve(rootDir, 'vite.config.ts'),
    build: {
      ssr: path.resolve(rootDir, 'src/entry-server.tsx'),
      outDir: distServerDir,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: 'es',
          entryFileNames: 'entry-server.mjs',
        },
      },
    },
  });

  // 3. Import and execute render()
  const serverEntryPath = path.resolve(distServerDir, 'entry-server.mjs');
  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const { html } = render();

  // 4. Inject rendered HTML into dist/index.html
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html não encontrado em ${templatePath}`);
  }

  let template = fs.readFileSync(templatePath, 'utf-8');
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Marcador <div id="root"></div> não encontrado em dist/index.html');
  }

  template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  fs.writeFileSync(templatePath, template, 'utf-8');

  // 5. Clean up temporary dist-server directory
  fs.rmSync(distServerDir, { recursive: true, force: true });

  console.log('✅ SSG Concluído com sucesso! Conteúdo crítico injetado em dist/index.html');
}

prerender().catch((err) => {
  console.error('❌ Erro durante pré-renderização:', err);
  process.exit(1);
});
