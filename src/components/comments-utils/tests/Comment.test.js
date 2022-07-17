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

    expect(screen.getByRole('button', { name: 'reply'})).toBeInTheDocument();
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

  it('# 0.3 Render of image and text in the comment', () => {
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

  it('# 0.4 Render of reply function and inputs', () => {
    const commentFour = {
      by: userTwo,
      content: 'Comment #4',
      img: defaultImg,
      date: '1657359726000',
      replies: []
    };

    render(<Comment commentContent={commentFour} />);

    const replyButton = screen.getByRole('button', { name: 'reply' });

    /* Click reply button */
    userEvent.click(replyButton);

    /* Find input and test its functionality */
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'Reply #1{enter}');

    /* Emptied input and expect reply to be rendered */
    expect(input.value).toMatch('');
    expect(screen.getByText('Reply #1')).toBeInTheDocument();
  })

  it('# 0.5 Render of replies', () => {
    const commentFive = {
      by: userTwo,
      content: 'Comment #5',
      img: defaultImg,
      date: '165735972600',
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
    }

    render(<Comment commentContent={commentFive} />);

    const viewReplyBtn = screen.getByRole('button', { name: 'view replies'});

    expect(viewReplyBtn).toBeInTheDocument();

    /* Compressed view */
    expect(screen.queryAllByTestId('reply').length).toBe(1);
    expect(screen.queryAllByTestId('reply')[0].textContent).toMatch(/Reply #1/)
    
    /* Expanded view */
    userEvent.click(viewReplyBtn);
    expect(screen.queryAllByTestId('reply').length).toBe(2);
    expect(screen.queryAllByTestId('reply')[0].textContent).toMatch(/Reply #1/)
    expect(screen.getByRole('img', { name: 'reply pic'})).toBeInTheDocument();
  })
})