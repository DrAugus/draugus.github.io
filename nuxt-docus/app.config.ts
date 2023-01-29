export default defineAppConfig({
  docus: {
    title: 'LIFE',
    description: 'Slice of Life.',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io/tree/master/nuxt-docus',
    },
    github: {
      root: 'tree/master/nuxt-docus/content',
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
