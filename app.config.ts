export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      secondary: 'indigo',
      neutral: 'slate',
    },
  },

  contact: {
    name: 'Kancelaria Radcy Prawnego Justyna Bartz',
    address: {
      street: 'ul. Przykładowa 12/3',
      zip: '09-410',
      city: 'Płock',
    },
    phone: '+48 606 686 864',
    email: 'poczta@bartz-kancelaria.pl',
    nip: '7741343151',
    regon: '141443283',
  },

  socials: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/?locale=pl_PL',
      icon: 'simple-icons:facebook',
    },
    {
      name: 'Google Maps',
      url: 'https://www.google.com',
      icon: 'simple-icons:googlemaps',
    },
  ],

  navigation: {
    main: [
      { label: 'Strona Główna', to: '/' },
      { label: 'O Kancelarii', to: '/o-kancelarii' },
      { label: 'Oferta', to: '/oferta' },
      { label: 'Kontakt', to: '/kontakt' },
    ],
    shortcuts: [
      { label: 'Skrót 1', to: '#' },
      { label: 'Skrót 2', to: '#' },
      { label: 'Skrót 3', to: '#' },
    ],
    support: [
      { label: 'FAQ', to: '#' },
      { label: 'Regulamin', to: '#' },
      { label: 'Polityka prywatności', to: '#' },
    ],
  },
})
