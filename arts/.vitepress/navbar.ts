export const navbar = [
    { text: '导航', link: 'https://augusmeow.github.io/' },
    { text: '语言', link: '/language/', activeMatch: '/language/' },
    { text: '经济学', link: '/economics/', activeMatch: '/economics/' },
    { text: '历史', link: '/history/', activeMatch: '/history/' },
    { text: '乐理', link: '/music/', activeMatch: '/music/' },
    {
        text: '文章',
        items: [
            {
                text: '檄文',
                link: '/xiwen/', activeMatch: '/xiwen/'
            },
            {
                text: '古文',
                link: '/article/', activeMatch: '/article/'
            },
        ]
    }
]