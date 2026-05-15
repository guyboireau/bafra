// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
//  Structure :
//    siteConfig.business  → infos de l'entreprise
//    siteConfig.branding  → couleurs, polices, logo
//    siteConfig.seo       → titre, description, mots-clés
//    siteConfig.design    → variantes de mise en page A/B/C par section
//    siteConfig.pages     → titres/descriptions des pages (multipage)
//    siteConfig.features  → activer/désactiver des modules
//    siteConfig.content   → contenus sections (hero, services, etc.)
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'Avis',      href: '#testimonials' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'Bafra',
    tagline:  'Plomberie, Chauffage & Dépannage à Mardié',
    industry: 'plumbing',          // utilisé pour schema.org + choix de contenu IA
    icon:     'wrench',            // Icône de métier
    phone:    '06 21 56 46 37',
    email:    'contact@bafra-plomberie.fr',
    address: {
      street:     '60 rue Jacques Prevert',
      city:       'Mardié',
      postalCode: '45430',
      country:    'FR',
    },
    openingHours: {
      monday:    '08:00-19:00',
      tuesday:   '08:00-19:00',
      wednesday: '08:00-19:00',
      thursday:  '08:00-19:00',
      friday:    '08:00-19:00',
      saturday:  '09:00-13:00',
      sunday:    null,
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  '',
      twitter:   '',
    },
    siret:        '',
    availability: 'Disponible pour intervention',
    urgency: {
      active:    true,
      label:     'Urgence Plomberie',
      phone:     '06 21 56 46 37',
    },
    serviceArea: [
      'Mardié',
      'Orléans',
      'Chécy',
      'Olivet',
      'Loiret (45)',
    ],
    certifications: [
      { label: 'Garantie décennale', sublabel: 'Assurance RC Pro incluse',          icon: '🛡️' },
      { label: 'Expert Sanitaire',   sublabel: 'Installation & Rénovation',        icon: '🚰' },
      { label: 'Chauffage',          sublabel: 'Entretien & Pose',                 icon: '🔥' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#0ea5e9',   // Bleu Plombier (Sky)
    primaryDark:     '#0284c7',
    primarySoft:     '#f0f9ff',
    secondaryColor:  '#0f172a',   // Navy pour le texte/contrast
    accentColor:     '#f59e0b',   // Orange pour l'urgence
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | Bafra Plomberie Mardié',
    defaultTitle:       'Bafra — Plombier Chauffagiste à Mardié (45)',
    defaultDescription: 'Besoin d\'un plombier à Mardié ? Bafra intervient rapidement pour vos dépannages, fuites d\'eau, installations de chauffage et rénovations de salle de bain.',
    keywords: [
      'plombier Mardié',
      'chauffagiste Mardié',
      'dépannage plomberie 45',
      'réparation fuite d\'eau',
      'installation chauffe-eau Mardié',
      'rénovation salle de bain Orléans',
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://bafra-plomberie.fr',
    ogImage:             '/assets/images/hero-plomberie.png',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'H',
      hero:         'H',
      services:     'H',
      about:        'H',
      testimonials: 'H',
      pricing:      'H',
      faq:          'H',
      cta:          'H',
      footer:       'H',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Expertise en plomberie et chauffage à Mardié.',
    },
    services: {
      slug:        '/services',
      title:       'Nos prestations',
      description: 'Découvrez nos services de plomberie et chauffage.',
    },
    about: {
      slug:        '/a-propos',
      title:       'À propos',
      description: 'En savoir plus sur Bafra et M. Bahati.',
    },
    blog: {
      slug:        '/blog',
      title:       'Blog',
      description: 'Conseils plomberie.',
    },
    realisations: {
      slug:        '/realisations',
      title:       'Réalisations',
      description: 'Nos chantiers récents.',
    },
    contact: {
      slug:        '/contact',
      title:       'Contact',
      description: 'Contactez votre plombier à Mardié.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       false,
    testimonials:  true,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {

    hero: {
      eyebrow:  'Artisan Plombier à Mardié (45)',
      h1:       'Bafra : Votre Plombier de Confiance pour Tous vos Travaux',
      subtitle: 'Dépannage rapide, installation de sanitaires et entretien de chauffage. M. Bahati met son expertise au service de vos projets à Mardié et dans tout le Loiret.',
      image:    '/assets/images/hero-plomberie.png',
      cta1:     { label: 'Demander un devis', href: '#contact' },
      cta2:     { label: 'Nos services', href: '#services' },
      trust:    ['Intervention Rapide', 'Travail Garanti', 'Expert de Proximité'],
      badge:    { label: 'Note client', value: '5/5', sub: 'sur Pages Jaunes' },
      infoCard: { status: 'Disponible', hours: 'Lun–Sam · 8h–19h', location: 'Mardié & 45' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Des solutions complètes pour votre confort',
      subtitle: 'De l\'urgence au projet de rénovation, nous intervenons avec professionnalisme.',
      items: [
        {
          icon:  'drop',
          title: 'Dépannage & Fuites',
          text:  'Réparation rapide de fuites d\'eau, débouchage de canalisations et dépannage de vos équipements sanitaires (WC, robinetterie).',
          link:  'Contactez-nous →',
          tag:   'Urgence possible',
          features: ['Détection de fuite', 'Débouchage express', 'Réparation WC'],
        },
        {
          icon:  'thermometer',
          title: 'Chauffage & Eau Chaude',
          text:  'Installation et entretien de chauffe-eau thermodynamiques et électriques. Raccordements de gaz et optimisation thermique.',
          link:  'En savoir plus →',
          tag:   'Économies d\'énergie',
          features: ['Chauffe-eau', 'Installation gaz', 'Entretien annuel'],
        },
        {
          icon:  'house',
          title: 'Rénovation Salle de Bain',
          text:  'Création et rénovation complète de vos espaces d\'eau : pose de douche, baignoire et raccordements complets.',
          link:  'Demander un devis →',
          tag:   'Sur mesure',
          features: ['Pose robinetterie', 'Douche à l\'italienne', 'Sanitaires'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos',
      title:   'L\'artisanat au service de votre sérénité',
      text: [
        'Installé à Mardié, Bafra est une entreprise artisanale spécialisée dans les travaux de plomberie et de chauffage. Dirigée par M. Bahati, nous mettons un point d\'honneur à fournir des interventions réactives et des installations durables.',
        'Que ce soit pour un simple raccordement de cuisine ou la rénovation complète d\'une salle de bain, nous accompagnons nos clients avec des conseils personnalisés et une exécution soignée.',
      ],
      stats: [
        { value: '100%',   label: 'Satisfaction' },
        { value: '15+',    label: 'Ans d\'expertise' },
        { value: '5/5',    label: 'Avis clients' },
      ],
      cta:    { label: 'Me contacter', href: '#contact' },
      image:  '/assets/images/about-plombier.png',
      author: { name: 'M. Bahati', role: 'Fondateur & Expert Plombier', image: '/assets/images/portrait-plombier.png' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     'Ce que disent nos clients',
      ratingStr: '5 / 5 · Avis vérifié sur Pages Jaunes',
      items: [
        {
          quote:   'M. Bahati est venu jusque dans le 41 pour raccorder ma cuisine et réparer le chauffe-eau. Rapide et efficace je recommande vivement.',
          name:    'Ménure',
          role:    'Client Particulier',
          initial: 'M',
        },
      ],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    'Transparence et justesse',
      subtitle: 'Des tarifs clairs pour des prestations de qualité sans mauvaise surprise.',
      plans: [
        {
          name:      'Dépannage Express',
          price:     'Sur devis',
          unit:      '',
          desc:      'Intervention rapide pour fuites et débouchage.',
          features:   ['Déplacement inclus', 'Diagnostic précis', 'Réparation immédiate'],
          cta:        'Appeler',
          highlight:  false,
          stripeLink: '',
        },
        {
          name:       'Installation Sanitaire',
          price:      'À partir de 150€',
          unit:       '',
          desc:       'Pose de robinetterie ou remplacement WC.',
          features:   ['Matériel pro', 'Garantie décennale', 'Mise en service'],
          cta:        'Devis gratuit',
          highlight:  true,
          stripeLink: '',
        },
        {
          name:       'Entretien Chauffe-eau',
          price:      '90€',
          unit:       '/ an',
          desc:       'Forfait entretien annuel pour votre tranquillité.',
          features:   ['Vérification groupe sécu', 'Détartrage possible', 'Attestation incluse'],
          cta:        'Réserver',
          highlight:  false,
          stripeLink: '',
        },
      ],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   'Tout ce qu\'il faut savoir',
      items: [
        { q: 'Intervenez-vous en urgence ?', a: 'Oui, nous nous efforçons d\'intervenir le plus rapidement possible pour les fuites d\'eau importantes et les pannes de chauffe-eau à Mardié et alentours.' },
        { q: 'Faites-vous des devis gratuits ?', a: 'Absolument. Tous nos devis sont gratuits et sans engagement après une première évaluation de vos besoins.' },
        { q: 'Quelle est votre zone d\'intervention ?', a: 'Nous sommes basés à Mardié et intervenons dans un rayon de 30km environ, incluant Orléans, Chécy, Olivet et le secteur du Val de Loire.' },
        { q: 'Proposez-vous une garantie décennale ?', a: 'Oui, tous nos travaux d\'installation sont couverts par une assurance responsabilité civile et décennale pour votre sécurité.' },
      ],
    },

    cta: {
      eyebrow:  'Une urgence ou un projet ?',
      title:    'Besoin d\'un plombier réactif à Mardié ?',
      subtitle: 'Contactez Bafra dès maintenant pour une intervention rapide ou un devis personnalisé.',
      cta1:     { label: 'Appeler le 06 21 56 46 37', href: 'tel:+33621564637' },
      cta2:     { label: 'Envoyer un message',  href: '#contact' },
    },

    contact: {
      eyebrow:        '— Contact',
      title:          'Parlons de votre projet',
      subtitle:       'Remplissez le formulaire ci-dessous ou appelez-moi directement pour une réponse plus rapide.',
      successMessage: 'Votre message a bien été envoyé. Je reviens vers vous très vite.',
      formTypes:      ['Dépannage urgent', 'Installation / Rénovation', 'Entretien', 'Autre'],
    },
    certifications: {
      eyebrow:  '— Certifications & Garanties',
      title:    'La qualité artisanale garantie',
      subtitle: 'Nous nous engageons sur la qualité de chaque soudure et chaque raccordement.',
    },

    footer: {
      description: 'Bafra, votre artisan plombier-chauffagiste de confiance à Mardié. Excellence, réactivité et proximité pour tous vos travaux de plomberie.',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'Avis',      href: '#testimonials' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé par Bafra',
    },
    portfolio: {
      items: [
        {
          title:       'Rénovation Salle de Bain',
          category:    'Sanitaire',
          location:    'Chécy',
          year:        '2024',
          description: 'Remplacement complet d\'une baignoire par une douche à l\'italienne moderne.',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/portfolio-1.png',
        },
        {
          title:       'Installation Chauffe-eau',
          category:    'Chauffage',
          location:    'Mardié',
          year:        '2024',
          description: 'Pose d\'un chauffe-eau thermodynamique haute performance.',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/portfolio-2.png',
        },
      ]
    },

  }, // fin content

} as const;

export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;

// ─── Palettes de départ (copier-coller les valeurs dans branding) ──────────
// Artisan   → primary #b8763d  primaryDark #9a6128  primarySoft #f6e7d4
// BtoB      → primary #1e3a5f  primaryDark #152b47  primarySoft #dbeafe
// Restaurant→ primary #c1440e  primaryDark #a03809  primarySoft #fde8de
// Santé     → primary #4a7c59  primaryDark #3a6347  primarySoft #dcf0e4
// ABPM      → primary #0ea5e9  primaryDark #0284c7  primarySoft #e0f2fe (Outfit)
