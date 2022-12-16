export default defineAppConfig({
  docus: {
    title: 'ART',
    description: 'Learning art',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io',
    },
    github: {
      root: 'art/content',
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
