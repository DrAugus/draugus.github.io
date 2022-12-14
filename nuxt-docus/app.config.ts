export default defineAppConfig({
  docus: {
    title: 'LIFE',
    description: 'The best place to start your documentation.',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io',
    },
    github: {
      root: 'nuxt-docus/content',
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
        }
      ]
    }
  }
})
