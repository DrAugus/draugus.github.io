export default defineAppConfig({
  docus: {
    title: 'Coding',
    description: 'The best place to start your documentation.',
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
      // logo: true,
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
