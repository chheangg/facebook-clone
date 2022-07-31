import defaultImg from '../assets/default-loading-image.png';
import coverImg from '../assets/cover.jpg'

const userOne = {
  name: 'George',
  img: defaultImg,
}

const userTwo = {
  name: 'Chheang',
  img: defaultImg,
}

const profileProp = [ 
  {
    ...userOne,
    cover: coverImg,
  }, 
  {
    ...userTwo,
    cover: coverImg,
  }];


const postProp = [
  {
    by: userOne,
    content: 'Post #1',
    date: '1657359724000',
    comments: [
      {
        by: userOne,
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

export { profileProp, postProp };