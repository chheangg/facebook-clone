import defaultImg from '../assets/default-loading-image.png';

const userOne = {
  name: 'George',
  img: defaultImg,
}

const userTwo = {
  name: 'Chheang',
  img: defaultImg,
}

const postProp = [
  {
    by: userOne,
    content: 'Post #1',
    date: '1657359724000',
    comments: [
      {
        by: userTwo,
        content: 'Comment #1',
        date: '1657359725000',
        replies: [
          {
            by: userOne,
            content: 'Reply #1',
            date: '1657359727000',
          },
          {
            by: userTwo,
            img: defaultImg,
            date: '1657359727000',
          },
        ],
      },
      {
        by: userOne,
        img: defaultImg,
        date: '1657359726000',
      },
    ]
  },
  {
    by: userTwo,
    content: 'Post #2',
    date: '1657359725000',
    comments: [
      {
        by: userTwo,
        content: 'Comment #1',
        date: '1657359725000',
      },
      {
        by: userOne,
        img: defaultImg,
        date: '1657359726000',
      },
    ]
  }
]

export default postProp;