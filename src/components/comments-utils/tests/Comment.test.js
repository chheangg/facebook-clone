import { screen, render } from "@testing-library/react";
import defaultImg from '../../assets/default-loading-image.png';
import userEvent from "@testing-library/user-event";
import Comment from "../Comment";

const userOne = {
  name: 'George',
  img: defaultImg,
}

const userTwo = {
  name: 'Chheang',
  img: defaultImg,
}

describe('Comment Component', () => {
  it('# 0.1 Normal Render of Comment Component', () => {
    const commentOne = {
      by: userTwo,
      content: 'Comment #2',
      date: '1657359726000',
      replies: [],
    };

    render(<Comment commentContent={commentOne} />)

    expect(screen.getByRole('img', { name: 'profile pic'})).toBeInTheDocument();
    expect(screen.getByText('Chheang')).toBeInTheDocument();

    expect(screen.getByText(commentOne.content)).toBeInTheDocument();
  })

  it('# 0.2 Render of Image in the comment', () => {
    const commentTwo = {
      by: userTwo,
      img: defaultImg,
      date: '1657359726000',
      replies: [],
    };

    render(<Comment commentContent={commentTwo} />)

    expect(screen.getByRole('img', {name: 'comment pic'})).toBeInTheDocument();
  })

  it('#0.3 Render of image and text in the comment', () => {
    const commentThree = {
      by: userTwo,
      content: 'Comment #3',
      img: defaultImg,
      date: '1657359726000',
      replies: [],
    };

    render(<Comment commentContent={commentThree} />)
    
    expect(screen.getByRole('img', {name: 'comment pic'})).toBeInTheDocument();
    expect(screen.getByText(commentThree.content)).toBeInTheDocument();
  })
})