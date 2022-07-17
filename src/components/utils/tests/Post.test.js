import { screen, render } from "@testing-library/react";
import Post from '../Post';
import defaultImg from '../../assets/default-loading-image.png';

const userOne = {
  name: 'George',
  img: defaultImg,
}

const postSampleOne = {
  by: userOne,
  content: 'Post #1',
  date: '1657359724000',
};

const postSampleTwo =   {
  by: userOne,
  content: null,
  img: defaultImg, 
  date: '1657359724000',
};

const postSampleThree =   {
  by: userOne,
  content: 'Post #3',
  img: defaultImg, 
  date: '1657359724000',
};

describe('Post Component', () => {
  it('# 0.1 Normal Render of a Post', () => {
    render(<Post postContent={postSampleOne} />)

    expect(screen.getByRole('img', {name: 'profile pic'})).toBeInTheDocument();
    expect(screen.getByText(userOne.name)).toBeInTheDocument();

    /* Content */
    const postContent = screen.getByText(postSampleOne.content);
    const postDate = screen.getByText(postSampleOne.date);

    expect(postContent).toBeInTheDocument();    
    expect(postDate).toBeInTheDocument();
  })
  it('# 0.2 Normal Render of a Post image', () => {
    render(<Post postContent={postSampleTwo} />)

    expect(screen.getByRole('img', {name: 'post pic'})).toBeInTheDocument();
  })

  it('# 0.3 Normal Render of a Post image with text', () => {
    render(<Post postContent={postSampleThree} />)

    expect(screen.getByRole('img', {name: 'post pic'})).toBeInTheDocument();
    expect(screen.getByText('Post #3')).toBeInTheDocument();
  })
})