import { screen, render } from "@testing-library/react";
import Post from '../Post';
import defaultImg from '../../assets/default-loading-image.png';
import userEvent from "@testing-library/user-event";

const userOne = {
  name: 'George',
  img: defaultImg,
}

const userTwo = {
  name: 'Chheang',
  img: defaultImg,
}

describe('Post Component', () => {
  it('# 0.1 Normal Render of a Post', () => {
    const postSampleOne = {
      by: userOne,
      content: 'Post #1',
      date: '1657359724000',
    };

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
    const postSampleTwo =   {
      by: userOne,
      content: null,
      img: defaultImg, 
      date: '1657359724000',
    };

    render(<Post postContent={postSampleTwo} />)

    expect(screen.getByRole('img', {name: 'post pic'})).toBeInTheDocument();
  })

  it('# 0.3 Normal Render of a Post image with text', () => {
    const postSampleThree = {
      by: userOne,
      content: 'Post #3',
      img: defaultImg, 
      date: '1657359724000',
    }
    render(<Post postContent={postSampleThree} />)

    expect(screen.getByRole('img', {name: 'post pic'})).toBeInTheDocument();
    expect(screen.getByText('Post #3')).toBeInTheDocument();
  })
})

  // it('# 0.4 Render of comments and replies', () => {
  //   const postSampleFour =   {
  //     by: userOne,
  //     content: 'Post #4',
  //     img: defaultImg, 
  //     date: '1657359724000',
  //     comments: [
  //       {
  //         by: userTwo,
  //         content: 'Comment #1',
  //         date: '1657359725000',
  //         replies: [
  //           {
  //             by: userOne,
  //             content: 'Reply #1',
  //             date: '1657359726000',
  //           },
  //           {
  //             by: userTwo,
  //             content: 'Reply #2',
  //             date: '1657359726000',
  //           },
  //         ]
  //       },
  //       {
  //         by: userTwo,
  //         content: 'Comment #2',
  //         date: '1657359726000',
  //         replies: [],
  //       }
  //     ]
  //   };

  //   render(<Post postContent={postSampleFour} />)

  //   const button = screen.getByRole('button', { name: 'Comments' });

  //   expect(screen.getByText('Comment #1')).toBeInTheDocument();
  //   expect(screen.queryByText('Comment #2').length).toBe(0);

  //   userEvent.click(button)

  //   expect(screen.queryAllByTestId('comment').length).toBe(2);
  //   expect(screen.queryAllByTestId('reply').length).toBe(2);

  //   expect(screen.queryAllByTestId('comment')[0].textContent).toMatch(/Comment #1/)
  //   expect(screen.queryAllByTestId('comment')[1].textContent).toMatch(/Comment #2/)
  //   expect(screen.queryAllByTestId('reply')[0].textContent).toMatch(/Reply #1/)
  //   expect(screen.queryAllByTestId('reply')[1].textContent).toMatch(/Reply #2/)
  // })