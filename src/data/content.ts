import type { ServiceItem, BenefitItem, TestimonialItem, NeighborhoodItem, FAQItem, TeamMember } from '../types';

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
  vetTitle: 'Médico Veterinário',
  vetSpecialty: 'Clínica Médica de Cães e Gatos e Atendimento Domiciliar',
  vetBio: 'Médico veterinário graduado e atuante desde 2019 (CRMV-SP 45.390). Focado no atendimento clínico humanizado no lar para cães e gatos, proporcionando bem-estar e acolhimento sem o estresse hospitalar.',

  // Descrição da atuação conjunta da equipe
  teamJointWork: 'Atuação conjunta no acolhimento e consultas domiciliares, além de suporte e realização de pequenas cirurgias em clínicas parceiras estruturadas.',

  // Planos de Saúde Pet Credenciados
  healthPlans: ['Petlove Saúde', 'PetLife'],

  // Horários de Atendimento Domiciliar
  workingHours: 'Segunda a Sábado com Agendamento Prévio',
  emergencyDisclaimer: 'Para emergências com riscos elevados, recomendamos o encaminhamento a hospitais ou clínicas veterinárias com infraestrutura de cirurgia e internação.',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-renato',
    name: 'Dr. Renato Pegoretti',
    role: 'Médico Veterinário',
    crmvOrRoleNote: 'CRMV-SP 45.390',
    activeSince: 'Atuante desde 2019',
    bio: 'Médico Veterinário com sólida experiência clínica e foco no atendimento humanizado de cães e gatos. Dedicado a proporcionar diagnósticos precisos e tratamentos eficazes no aconchego do lar da família.',
    highlights: ['CRMV-SP 45.390', 'Atuação desde 2019', 'Clínica Geral & Domiciliar'],
    imageUrl: 'images/dr-renato.jpg',
  },
  {
    id: 'daiane-harume',
    name: 'Daiane Harume Aloise Romualdo Prado',
    role: 'Auxiliar Veterinária & Graduanda em Medicina Veterinária',
    crmvOrRoleNote: 'Auxiliar Veterinária e Graduanda',
    activeSince: 'Atuante desde 2018',
    bio: 'Auxiliar Veterinária com ampla experiência em manejo pet e graduanda em Medicina Veterinária. Atua ao lado do Dr. Renato com olhar empático, carinho com os animais e rigor nos cuidados de higiene e assistência clínica.',
    highlights: ['Atuação desde 2018', 'Manejo Gentil & Sem Medo', 'Graduanda em Med. Veterinária'],
    imageUrl: 'images/vet-profile.jpg',
  },
];

export const createWhatsAppLink = (message?: string): string => {
  if (message) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`;
  }
  return CLINIC_CONFIG.whatsappDirectLink;
};

export const BENEFITS: BenefitItem[] = [
  {
    id: 'caixa-transporte',
    title: 'Fim das Caixas de Transporte',
    description: 'Elimine miados de desespero, latidos de pânico e a luta estressante para colocar cães e gatos em caixas apertadas.',
    iconName: 'CarFront',
    tag: 'Sem Sofrimento',
  },
  {
    id: 'deslocamento',
    title: 'Zero Deslocamentos e Enjoos',
    description: 'Sem trânsito, calor dentro do carro, náuseas ou vômitos no trajeto. Seu pet permanece calmo do início ao fim.',
    iconName: 'Home',
    tag: 'No Conforto do Lar',
  },
  {
    id: 'ambiente-seguro',
    title: 'No Território do Pet',
    description: 'No tapete ou sofá onde ele se sente seguro, os sinais vitais e o comportamento refletem o estado real de saúde.',
    iconName: 'HeartHandshake',
    tag: 'Sem Estresse',
  },
  {
    id: 'atencao-dedicada',
    title: 'Consulta Calma e Sem Pressa',
    description: 'Tempo exclusivo para ouvir você, examinar o pet com carinho e reforço positivo, sem salas de espera agitadas.',
    iconName: 'Clock',
    tag: '100% Dedicado',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'consulta',
    title: 'Consultas Clínicas de Rotina',
    shortDesc: 'Avaliação física minuciosa, check-up geral e orientações preventivas no conforto do seu lar.',
    longDesc: 'Uma avaliação completa da cabeça à cauda no aconchego da sua sala ou quintal. Ideal para check-ups periódicos, investigação de alterações no comportamento e prevenção de doenças.',
    iconName: 'Stethoscope',
    badge: 'Mais Procurado',
    features: [
      'Exame físico completo sem estresse',
      'Prescrição médica e orientações de rotina',
      'Acompanhamento pós-consulta por WhatsApp',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Gostaria de agendar uma Consulta Clínica em domicílio para o meu pet em Peruíbe.',
  },
  {
    id: 'vacinacao',
    title: 'Vacinação Ética Importada',
    shortDesc: 'Proteção essencial com vacinas importadas de alta eficácia e cadeia de frio rigorosamente controlada.',
    longDesc: 'Aplicação gentil com reforço positivo (petiscos e carinho). Carteirinha atualizada e carimbada com controle térmico rigoroso das doses.',
    iconName: 'Syringe',
    badge: 'Proteção Essencial',
    features: [
      'Cães: V8/V10, Antirrábica, Giárdia e Gripe',
      'Gatos: V4, V5 (FeLV) e Antirrábica',
      'Carteirinha oficial atualizada e carimbada',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Gostaria de verificar e atualizar a vacinação do meu pet em casa.',
  },
  {
    id: 'exames',
    title: 'Coleta de Exames no Lar',
    shortDesc: 'Coleta de sangue, urina, fezes e citologia sem o pânico da clínica, garantindo laudos precisos.',
    longDesc: 'Colher exames em casa reduz o estresse, evitando picos artificiais de glicose e cortisol causados pelo medo na clínica, gerando laudos muito mais fidedignos.',
    iconName: 'FlaskConical',
    badge: 'Resultados Precisos',
    features: [
      'Hemograma completo e painel bioquímico',
      'Exames parasitológicos e citologia',
      'Envio rápido dos laudos em PDF pelo WhatsApp',
    ],
    suggestedMsg: 'Olá, Dr. Renato! Preciso agendar a coleta de exames laboratoriais em casa para o meu pet.',
  },
  {
    id: 'microchip',
    title: 'Microchipagem & Atestados',
    shortDesc: 'Identificação eletrônica definitiva padrão ISO e atestados sanitários para viagens nacionais e internacionais.',
    longDesc: 'Implantação rápida e indolor do microchip padrão ISO internacional, garantindo segurança contra perdas e documentações oficiais de viagem.',
    iconName: 'Award',
    badge: 'Segurança & Viagens',
    features: [
      'Microchip padrão internacional ISO',
      'Atestados para transporte aéreo e rodoviário',
      'Documentações sanitárias para viagens',
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
    answer: 'Sim! Atendemos com muito orgulho os principais planos de saúde pet do mercado: Petlove Saúde e PetLife. Basta nos enviar o número da carteirinha ou token no momento do contato pelo WhatsApp para verificarmos a cobertura.',
  },
  {
    id: 'faq-3',
    category: 'urgencias',
    question: 'Vocês atendem emergências graves com risco cirúrgico?',
    answer: 'O atendimento domiciliar é focado em clínica geral, vacinas, exames e medicina preventiva. Casos graves com riscos elevados devem ser levados a hospitais ou clínicas veterinárias com infraestrutura de cirurgia e internação.',
  },
  {
    id: 'faq-5',
    category: 'preparo',
    question: 'Como devo preparar o meu pet para a visita?',
    answer: 'Mantenha o pet em um cômodo tranquilo cerca de 15 minutos antes da chegada do veterinário (especialmente gatos, para evitar que se escondam). Separe a carteirinha de vacinas anterior e petiscos que ele goste para tornar o momento ainda mais positivo!',
  },
];
