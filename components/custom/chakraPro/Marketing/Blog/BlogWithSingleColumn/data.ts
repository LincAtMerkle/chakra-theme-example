export const posts = [
  {
    id: '1',
    title: '2022 Developer Survey',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: 'https://tinyurl.com/4wzh2ph9',
    category: 'Research',
    publishedAt: 'December 29, 2022',
    author: {
      name: 'Samy Tom',
      avatarUrl: 'https://tinyurl.com/2p8h98w8',
    },
  },
  {
    id: '2',
    title: 'Women in Tech',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://tinyurl.com/5czjdxj7',
    category: 'Community',
    publishedAt: 'November 30, 2022',
    author: {
      name: 'Angelina Gates',
      avatarUrl: 'https://tinyurl.com/2p98t7nh',
    },
  },
]

export type Post = typeof posts[0]
