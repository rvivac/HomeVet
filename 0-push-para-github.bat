@echo off
chcp 65001 >nul
cd /d "%~dp0"
setlocal
title HomeVet - Git Push para GitHub

set "GITHUB_USER=rvivac"
set "REPO_NAME=HomeVet"
set "REMOTE_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git"

echo.
echo ============================================================
echo  REPOSITORIO: %REPO_NAME%
echo  OWNER (USER): %GITHUB_USER%
echo  URL:         %REMOTE_URL%
echo ============================================================
echo.

where git >nul 2>&1
if errorlevel 1 (
  echo [ERRO] Git nao esta instalado. Baixe em: https://git-scm.com/download/win
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('git --version') do echo [1/7] Git OK  -  %%v

if not exist .git (
  echo [2/7] Inicializando repositorio local (branch main) ...
  git init -b main
) else (
  echo [2/7] Repositorio local JA inicializado (.git existe). OK.
)

git config user.name 1>nul 2>&1
if errorlevel 1 (
  echo [3/7] Configurando user.name/email LOCAL padrao ...
  git config user.name  "rvivac"
  git config user.email "contato@homevet.com.br"
) else (
  echo [3/7] user.name/email JA configurados. OK.
)

echo [4/7] Adicionando arquivos (git add .) ...
git add .

set "TEM_ALTERACOES="
for /f "tokens=*" %%s in ('git status --porcelain') do set "TEM_ALTERACOES=1"
if "%TEM_ALTERACOES%"=="" (
  echo [5/7] Sem alteracoes novas. Commit inicial JA realizado? Pulando commit.
) else (
  echo [5/7] Realizando commit ...
  git commit -m "feat: landing page HomeVet v1 - Dr. Renato Pegoretti - Peruibe e regiao"
)

set "TEM_REMOTE="
git remote get-url origin 1>nul 2>&1
if errorlevel 1 (
  echo [6/7] Remote 'origin' NAO existe. Criando apontando para:
  echo       %REMOTE_URL%
  git remote add origin %REMOTE_URL%
) else (
  echo [6/7] Remote 'origin' JA existe.
  for /f "tokens=*" %%u in ('git remote get-url origin') do echo       URL atual: %%u
)

echo.
echo [7/7] PUSH para GitHub (branch main) ...
echo.
git branch -M main
git push -u origin main

if errorlevel 1 (
  echo.
  echo [!] PUSH FALHOU. Causa comum: FALTA DE AUTENTICACAO no GitHub.
  echo.
  echo     === COMO RESOLVER (escolha 1 das 3): ===
  echo.
  echo     OPCAO A  [+ facil, recomendada]: GitHub Desktop
  echo        1. Baixe/abra o GitHub Desktop.
  echo        2. File ^> Add Local Repository.
  echo        3. Selecione a pasta: %~dp0
  echo        4. Clique em [Publish Repository]. Logue 1 vez e ele sobe tudo.
  echo.
  echo     OPCAO B: GitHub CLI (gh.exe)
  echo        1. Instale:  winget install --id GitHub.cli
  echo        2. Logue 1 vez:  gh auth login   (siga as instrucoes no terminal/navegador)
  echo        3. Rode este .bat novamente (duplo clique).
  echo.
  echo     OPCAO C: Personal Access Token (classico)
  echo        1. Acesse:  https://github.com/settings/tokens
  echo        2. Generate new token (classic) ^> marque APENAS o escopo [x] repo.
  echo        3. Copie o token (ex: ghp_xxxxx).
  echo        4. Quando o Git pedir "senha" na janela, COLE o token (nao aparece digitado: normal, Enter).
) else (
  echo.
  echo ============================================================
  echo   [SUCESSO!] PUSH FINALIZADO COM SUCESSO!
  echo ============================================================
  echo      Seu repositorio esta em:  %REMOTE_URL%
  echo      GitHub Pages:             https://%GITHUB_USER%.github.io/%REPO_NAME%/
  echo ============================================================
)

echo.
pause
endlocal
