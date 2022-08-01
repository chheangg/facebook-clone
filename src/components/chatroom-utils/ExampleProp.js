import defaultImg from '../assets/default-loading-image.png';
import { v4 as uuidv4 } from 'uuid';

const userOne = {
  name: 'Chheang',
  img: defaultImg,
}

const userTwo = {
  name: 'George',
  img: defaultImg,
}

const userThree = {
  name: 'Will',
  img: defaultImg,
}

const chatProp = [
  {
    id: uuidv4(),
    users: [ userOne, userTwo ],
    discussions: [
      {
        content: 'Message one',
        by: userOne,
        time: '1657359724000',
      },
      {
        content: 'Message two',
        by: userTwo,
        time: '1657359725000',
      },
      {
        content: 'Message three',
        by: userOne,
        time: '1657359726000',
      },
      {
        img: defaultImg,
        by: userTwo,
        time: '1657359727000',
      },
    ],
  },
  {
    id: uuidv4(),
    users: [ userOne, userThree ],
    discussions: [
      {
        content: 'Message one',
        by: userOne,
        time: '1657359724000',
      },
      {
        content: 'Message two',
        by: userThree,
        time: '1657359725000',
      },
      {
        content: 'Message three',
        by: userOne,
        time: '1657359726000',
      },
      {
        content: 'Message four',
        by: userThree,
        time: '1657359727000',
      },
      {
        content: 'Message five',
        by: userThree,
        time: '1657359728000',
      },
      {
        content: 'Message six',
        by: userOne,
        time: '1657359729000',
      },
      {
        content: 'Message seven',
        by: userOne,
        time: '1657359730000',
      },
    ],
  }
]

export { chatProp, userOne };