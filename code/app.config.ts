export default defineAppConfig({
  docus: {
    title: 'CODE',
    description: 'Learning code',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io/tree/master/code',
    },
    github: {
      root: '/tree/master/code/content',
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
          href: 'https://augus-docus.netlify.app/',
          icon: 'bx:video-recording'
        },
        {
          href: 'https://augus-art.netlify.app/',
          icon: 'fluent-emoji-high-contrast:man-artist'
        },
      ]
    }
  }
})
