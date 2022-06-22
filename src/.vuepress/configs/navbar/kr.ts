const url_prefix = '/i18n/kr';
export const navbar_kr: Partial<any> = [
  url_prefix + "/",
  url_prefix + "/home",
  {
    text: '삶',
    link: url_prefix + '/life'
  },
  {
    text: "암호",
    children: [
      {
        text: '오디션',
        children: [
          {
            text: '프로그래머 인터뷰',
            link: url_prefix + '/code/audition/'
          },
        ]
      },
    ]
  },
  {
    text: '연결',
    children: [
      {
        text: '왕실',
        children: [
          {
            text: '윈저 가족',
            link: 'https://draugus.github.io/RoyalFamily/'
          },
        ]
      },
      {
        text: '블로그',
        children: [
          {
            text: '블로그',
            link: 'https://draugus.github.io/'
          },
          {
            text: '게임',
            link: 'https://draugus.github.io/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: '스폰서',
    link: url_prefix + '/life/statement/sponsor'
  },
]
