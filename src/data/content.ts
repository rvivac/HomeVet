import type { ServiceItem, BenefitItem, TestimonialItem, NeighborhoodItem, FAQItem } from '../types';

export const CLINIC_CONFIG = {
  name: 'Home.Vet',
  tagline: 'O atendimento veterinário que vai até você, sem o estresse da clínica.',
  shortDescription: 'Consultas, vacinas importadas e exames no conforto e segurança do lar para cães e gatos em Peruíbe e região.',
  
  // Contatos e Redes Oficiais
  whatsappNumber: '5513981864513',
  whatsappDirectLink: 'https://wa.me/message/QRSKQYNG37QDE1',
  displayPhone: '(13) 98186-4513',
  instagramHandle: '@home_vetdomicilio',
  instagramUrl: 'https://instagram.com/home_vetdomicilio',
  linktreeUrl: 'https://linktr.ee/Home.vet',
  facebookUrl: 'https://www.facebook.com/104349822593561',
  googleReviewsUrl: 'https://share.google/67HGA56fWX6lPEESF',
  
  // Endereço e Cobertura
  address: 'Av. Gheorghe Popescu, Peruíbe - SP, CEP 11772-600',
  region: 'Peruíbe e Região (Litoral Sul de SP)',

  // Responsável Técnico Oficial
  vetName: 'Dr. Renato Pegoretti',
  crmv: 'CRMV-SP 45.390',
  vetTitle: 'Médico Veterinário e Responsável Técnico',
  vetSpecialty: 'Clínica Médica de Cães e Gatos, Vacinação e Medicina Preventiva',
  vetBio: 'Médico veterinário desde 2019 com foco exclusivo no atendimento domiciliar humanizado de cães e gatos. Pai do Enzo e da Anna Luíze, priorizo estar sempre em família. Atuo ao lado da minha esposa, onde além do amor compartilhamos a profissão veterinária. Nosso objetivo é levar o mesmo cuidado e qualidade de clínica para a segurança do seu lar!',

  // Planos de Saúde Credenciados
  healthPlans: ['Petlove Saúde', 'Au Happy', 'PetLife'],

  // Horários de Atendimento Domiciliar
  workingHours: 'Segunda a Sábado com Agendamento Prévio',
  emergencyDisclaimer: 'Para emergências cirúrgicas com risco iminente de vida, recomendamos o encaminhamento imediato a um hospital veterinário 24h parceiro.',
};

export const createWhatsAppLink = (message?: string): string => {
  if (message) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`;
  }
  return CLINIC_CONFIG.whatsappDirectLink;
};

export const BENEFITS: BenefitItem[] = [
  {
    id: 'transporte',
    title: 'Zero Estresse no Transporte',
    description: 'Diga adeus às caixas de transporte apertadas, miados de desespero, vômito de enjoo no carro ou brigas para colocar o pet no veículo.',
    iconName: 'CarFront',
    tag: 'Sem Traumas',
  },
  {
    id: 'ambiente',
    title: 'Ambiente Seguro e Familiar',
    description: 'No próprio sofá ou tapete, o pet permanece calmo. Isso garante aferição fidedigna da frequência cardíaca, pressão e temperatura.',
    iconName: 'Home',
    tag: 'No Território Dele',
  },
  {
    id: 'comodidade',
    title: 'Comodidade Total para a Família',
    description: 'Sem filas de espera com animais agitados, sem perda de tempo no trânsito ou dificuldade para estacionar. Atendimento pontual.',
    iconName: 'Clock',
    tag: 'Economize seu Tempo',
  },
  {
    id: 'atencao',
    title: 'Consulta Humanizada Sem Pressa',
    description: 'Tempo dedicado exclusivamente para ouvir o histórico do seu companheiro, examinar cada detalhe com carinho e tirar todas as dúvidas.',
    iconName: 'HeartHandshake',
    tag: '100% Dedicado',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'consulta',
    title: 'Consultas Clínicas de Rotina',
    shortDesc: 'Avaliação física minuciosa, check-up geral, controle de peso, inspeção de pele, ouvidos, dentes e orientações de bem-estar.',
    longDesc: 'Uma avaliação completa da cabeça à ponta da cauda no aconchego da sua sala ou quintal. Ideal para check-ups periódicos, investigação de alterações no comportamento e prevenção de doenças.',
    iconName: 'Stethoscope',
    badge: 'Mais Procurado',
    features: [
      'Exame físico completo sem estresse',
      'Avaliação de escore corporal e nutrição',
      'Prescrição médica e orientações de manejo',
      'Acompanhamento pós-consulta por WhatsApp',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Gostaria de agendar uma Consulta Clínica em domicílio para o meu pet em Peruíbe.',
  },
  {
    id: 'vacinacao',
    title: 'Vacinação Importada Atualizada',
    shortDesc: 'Proteção essencial anual com vacinas importadas de alta qualidade e cadeia de frio rigorosamente controlada.',
    longDesc: 'Aplicação gentil com reforço positivo (petiscos e carinho). Carteirinha atualizada e carimbada com controle térmico rigoroso das doses.',
    iconName: 'Syringe',
    badge: 'Proteção Essencial',
    features: [
      'Cães: V10/V8 múltipla, Antirrábica, Giárdia, Gripe',
      'Gatos: Quádrupla (V4), Quíntupla (V5 FeLV) e Antirrábica',
      'Vacinas éticas importadas com lote registrado',
      'A raiva não escolhe nem raça e nem tamanho: proteja seu pet!',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Gostaria de verificar e atualizar a vacinação do meu pet em casa.',
  },
  {
    id: 'exames',
    title: 'Coleta de Exames Laboratoriais',
    shortDesc: 'Coleta de sangue, urina, fezes e citologia com técnicas gentis e envio a laboratórios parceiros certificados.',
    longDesc: 'Colher exames em casa reduz o estresse, evitando picos artificiais de glicose e cortisol causados pelo medo na clínica, gerando laudos muito mais fidedignos.',
    iconName: 'FlaskConical',
    badge: 'Resultados Precisos',
    features: [
      'Hemograma completo e painel bioquímico',
      'Exames de fezes e urina laboratoriais',
      'Raspados de pele e citologia cutânea/otológica',
      'Envio rápido dos laudos em PDF pelo WhatsApp',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Preciso agendar a coleta de exames laboratoriais em casa para o meu pet.',
  },
  {
    id: 'microchip',
    title: 'Microchipagem & Atestados',
    shortDesc: 'Identificação eletrônica permanente para seu pet e emissão de atestados sanitários para viagens nacionais e internacionais.',
    longDesc: 'Implantação rápida e indolor do microchip padrão ISO internacional, garantindo segurança contra perdas e documentações oficiais de viagem.',
    iconName: 'Award',
    badge: 'Segurança & Viagens',
    features: [
      'Microchip padrão internacional ISO',
      'Atestados de saúde para companhias aéreas',
      'Atestados para transporte rodoviário',
      'Documentações oficiais de viagem',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Gostaria de informações sobre microchipagem ou atestado de viagem para o meu pet.',
  },
];

export const NEIGHBORHOODS: NeighborhoodItem[] = [
  // Balneários
  { name: 'Balneário Stella Maris', zone: 'Balneários' },
  { name: 'Balneário Três Marias', zone: 'Balneários' },
  { name: 'Balneário Flórida', zone: 'Balneários' },
  { name: 'Balneário Oásis', zone: 'Balneários' },
  { name: 'Balneário Nova Peruíbe', zone: 'Balneários' },
  { name: 'Balneário Barra de Jangada', zone: 'Balneários' },
  { name: 'Balneário Casa Blanca', zone: 'Balneários' },
  { name: 'Balneário Continental', zone: 'Balneários' },
  { name: 'Balneário Garça Vermelha', zone: 'Balneários' },
  { name: 'Balneário Jangada', zone: 'Balneários' },
  { name: 'Balneário Josedy', zone: 'Balneários' },
  { name: 'Balneário Maria Helena Novaes', zone: 'Balneários' },
  { name: 'Balneário Novo Horizonte', zone: 'Balneários' },
  { name: 'Balneário Samburá', zone: 'Balneários' },
  { name: 'Balneário São João Batista', zone: 'Balneários' },

  // Jardins
  { name: 'Jardim Ribamar', zone: 'Jardins' },
  { name: 'Jardim Caraminguava (Caraguava)', zone: 'Jardins' },
  { name: 'Jardim Arpoador', zone: 'Jardins' },
  { name: 'Jardim Beira-Mar', zone: 'Jardins' },
  { name: 'Jardim Belmar', zone: 'Jardins' },
  { name: 'Jardim Brasil', zone: 'Jardins' },
  { name: 'Jardim Casa Blanca', zone: 'Jardins' },
  { name: 'Jardim das Flores', zone: 'Jardins' },
  { name: 'Jardim dos Prados', zone: 'Jardins' },
  { name: 'Jardim Europa', zone: 'Jardins' },
  { name: 'Jardim Guaraú', zone: 'Jardins' },
  { name: 'Jardim Icaraíba', zone: 'Jardins' },
  { name: 'Jardim Imperador', zone: 'Jardins' },
  { name: 'Jardim Itatins', zone: 'Jardins' },
  { name: 'Jardim Mar e Sol', zone: 'Jardins' },
  { name: 'Jardim Márcia', zone: 'Jardins' },
  { name: 'Jardim Peruíbe', zone: 'Jardins' },
  { name: 'Jardim Veneza', zone: 'Jardins' },

  // Centro e Estâncias
  { name: 'Centro (Área Central)', zone: 'Centro & Estâncias' },
  { name: 'Estação', zone: 'Centro & Estâncias' },
  { name: 'Cidade Nova Peruíbe', zone: 'Centro & Estâncias' },
  { name: 'Estância São José', zone: 'Centro & Estâncias' },
  { name: 'Estância São Marcos', zone: 'Centro & Estâncias' },

  // Litoral, Praias e Vilas
  { name: 'Guaraú', zone: 'Praias & Vilas' },
  { name: 'Costão', zone: 'Praias & Vilas' },
  { name: 'Arpoador', zone: 'Praias & Vilas' },
  { name: 'Baissununga', zone: 'Praias & Vilas' },
  { name: 'Bananal', zone: 'Praias & Vilas' },
  { name: 'Ana Dias', zone: 'Praias & Vilas' },
  { name: 'Bairro dos Prados', zone: 'Praias & Vilas' },
  { name: 'Parque Turístico', zone: 'Praias & Vilas' },
  { name: 'Vila Erminda', zone: 'Praias & Vilas' },
  { name: 'Vila Romar', zone: 'Praias & Vilas' },

  // Região Metropolitana
  { name: 'Itanhaém e Região Vizinha', zone: 'Região Litoral Sul' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    tutorName: 'Marcos Vinicius',
    petName: 'Totó (Vira-lata caramelo)',
    petSpecies: 'dog',
    neighborhood: 'Centro - Peruíbe',
    rating: 5,
    text: 'Excelente atendimento do Dr. Renato! O Totó odeia andar de carro e aqui no quintal de casa ele ficou super calmo. Exame completo e muita paciência.',
    dateText: 'Avaliação recente',
  },
  {
    id: '2',
    tutorName: 'Mariana & Lucas',
    petName: 'Pipoca (Shih-tzu)',
    petSpecies: 'dog',
    neighborhood: 'Stella Maris - Peruíbe',
    rating: 5,
    text: 'Atendimento pelo plano Petlove super rápido e descomplicado. A consulta em casa foi maravilhosa, a vacina foi super tranquila com direito a petisco.',
    dateText: 'Avaliação recente',
  },
  {
    id: '3',
    tutorName: 'Fernanda Toledo',
    petName: 'Mimi & Simba (Gatinhos)',
    petSpecies: 'cat',
    neighborhood: 'Três Marias - Peruíbe',
    rating: 5,
    text: 'Gato em clínica veterinária é sempre um desespero. Chamar o Dr. Renato em casa foi a melhor decisão. Atendeu os dois com muito carinho e competência!',
    dateText: 'Avaliação recente',
  },
];

export const ALERT_SIGNS = [
  { icon: 'Utensils', text: 'Mudanças no apetite ou na ingestão de água' },
  { icon: 'AlertTriangle', text: 'Vômitos, diarreia ou fezes com sangue' },
  { icon: 'Moon', text: 'Apatia, tristeza ou sonolência excessiva' },
  { icon: 'Wind', text: 'Dificuldade para respirar, tosse ou espirros frequentes' },
  { icon: 'Activity', text: 'Dores, mancar, coceira intensa ou lambedura excessiva' },
  { icon: 'Scale', text: 'Perda ou ganho de peso sem explicação' },
  { icon: 'HeartHandshake', text: 'Aumento da idade: pets idosos precisam de atenção redobrada' },
];

export const CHECKUP_INTERVALS = [
  { phase: 'Filhotes', interval: 'A cada 3 meses', note: 'No 1º ano de vida (vacinas e desenvolvimento)' },
  { phase: 'Adultos', interval: 'Pelo menos 1x ao ano', note: 'Manutenção preventiva e reforço vacinal' },
  { phase: 'Idosos', interval: 'A cada 6 meses', note: 'Prevenção de doenças renais, cardíacas e articulares' },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'atendimento',
    question: 'Como funciona a consulta veterinária em domicílio em Peruíbe?',
    answer: 'Agendamos um dia e horário de sua preferência pelo WhatsApp. O Dr. Renato vai até a sua residência com todo o material clínico necessário. O pet é examinado onde se sentir mais seguro (tapete, sofá ou colo do tutor), sem caixas de transporte e sem estresse.',
  },
  {
    id: 'faq-2',
    category: 'pagamento',
    question: 'Vocês atendem planos de saúde pet?',
    answer: 'Sim! Atendemos com muito orgulho os principais planos de saúde pet do mercado: Petlove Saúde, Au Happy e PetLife. Basta nos enviar o número da carteirinha ou token no momento do contato pelo WhatsApp para verificarmos a cobertura.',
  },
  {
    id: 'faq-3',
    category: 'urgencias',
    question: 'Vocês atendem emergências graves com risco cirúrgico?',
    answer: 'O atendimento domiciliar é focado em clínica geral, vacinas, exames e medicina preventiva. Casos graves com risco iminente de morte ou necessidade de cirurgia imediata devem ser levados a hospitais veterinários 24h com centro cirúrgico e internação.',
  },
  {
    id: 'faq-4',
    category: 'atendimento',
    question: 'Quais bairros e cidades são atendidos?',
    answer: 'Atendemos todos os bairros e condomínios de Peruíbe (Centro, Stella Maris, Três Marias, Guaraú, Ribamar, Arpoador, Oásis, etc.) e cidades vizinhas como Itanhaém sob agendamento prévio.',
  },
  {
    id: 'faq-5',
    category: 'preparo',
    question: 'Como devo preparar o meu pet para a visita?',
    answer: 'Mantenha o pet em um cômodo tranquilo cerca de 15 minutos antes da chegada do veterinário (especialmente gatos, para evitar que se escondam). Separe a carteirinha de vacinas anterior e petiscos que ele goste para tornar o momento ainda mais positivo!',
  },
];
