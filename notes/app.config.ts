export default defineAppConfig({
  docus: {
    title: 'LIFE',
    description: 'Slice of Life.',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io/tree/master/notes',
    },
    github: {
      root: 'tree/master/notes/content',
      edit: true,
      releases: false
    },
    aside: {
      level: 1,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        },
        {
          href: 'https://augusmeow.github.io/',
          icon: 'material-symbols:home-work'
        },
      ]
    }
  }
})
