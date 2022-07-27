import { screen, render } from "@testing-library/react";
import Post from '../Post';
import defaultImg from '../../assets/default-loading-image.png';
import userEvent from "@testing-library/user-event";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

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
    expect(screen.getByRole('button', { name : 'comment' }));
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

  it('# 0.4 Render of Comment box and usage of Comment functionality', () => {
    const postSampleFour = {
      by: userOne,
      content: 'Post #4',
      img: defaultImg,
      date: '1657359724000',
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

    render(<Post postContent={postSampleFour} />);
    
    const btn = screen.getByRole('button', { name: 'comment' });

    expect(screen.getByText(/Post #4/)).toBeInTheDocument();
    expect(screen.queryAllByTestId('comment').length).toBe(1);
    expect(screen.queryAllByTestId('comment')[0].textContent).toMatch(/Comment #1/);
    expect(screen.queryAllByRole('input').length).toBe(0);

    // Click 'comment' utils button
    userEvent.click(btn);
    const commentInput = screen.getByRole('textbox');

    expect(screen.queryAllByTestId('comment').length).toBe(2);
    expect(commentInput).toBeInTheDocument();

    // Comment on a post
    userEvent.type(commentInput, 'Comment #3{enter}');
    expect(commentInput.value).toMatch('');
    expect(screen.queryAllByTestId('comment').length).toBe(3);
    expect(screen.queryAllByTestId('comment')[2].textContent).toMatch(/Comment #3/);
  })

  it('# 0.5 Render of a Post with comments in it', () => {
    const postSampleFive = {
      by: userOne,
      content: 'Post #5',
      img: defaultImg,
      date: '1657359724000',
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

    render(<Post postContent={postSampleFive} />);

    expect(screen.getByText(/Post #5/)),toBeInTheDocument;
    expect(screen.getByRole('img', { name: 'post pic'})).toBeInTheDocument;

    const btn = screen.getByRole('button', { name: 'comment' });

    expect(screen.queryAllByTestId('comment')[0].textContent).toMatch(/Comment #1/)
    expect(screen.queryAllByTestId('comment')[1]).toBeUndefined();

    userEvent.click(btn);

    expect(screen.queryAllByTestId('comment').length).toBe(2);
    expect(screen.queryAllByTestId('comment')[0]).toBeInTheDocument();
    expect(screen.queryAllByTestId('comment')[1]).toBeInTheDocument();

  })
})