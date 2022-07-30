import { screen, render } from "@testing-library/react";
import Posts from "../Posts";
import defaultImg from '../../assets/default-loading-image.png';

const userOne = {
  name: 'George',
  img: defaultImg,
}

const userTwo = {
  name: 'Chheang',
}

const postProp = [
  {
    by: userOne,
    content: 'Post #1',
    date: '1657359724000',
  },
  {
    by: userTwo,
    content: 'Post #2',
    date: '1657359725000',
  }
]

describe('Posts Component', () => {
  it('# 0.1 Normal Render of Posts', () => {
    const singleProp = [
      {
        by: userOne,
        content: 'Post #1',
        date: '1657359724000',
      },
    ]

    render(<Posts posts={singleProp} />)

    /* Profile Header */
    expect(screen.getByRole('img', {name: 'profile pic'})).toBeInTheDocument();
    expect(screen.getByText(userOne.name)).toBeInTheDocument();

    /* Content */
    const postContent = screen.getByText(singleProp[0].content);
    const postDate = screen.getByText(singleProp[0].date);

    expect(postContent).toBeInTheDocument();    
    expect(postDate).toBeInTheDocument();
  })

  it('# 0.2 Multiple Render of posts', () => {
    render(<Posts posts={postProp} />)

    expect(screen.queryAllByRole('img', {name: 'profile pic'}).length).toBe(2);
    expect(screen.queryAllByTestId('username')[0].textContent).toMatch(userOne.name);
    expect(screen.queryAllByTestId('username')[1].textContent).toMatch(userTwo.name);

    expect(screen.getByText(postProp[0].content)).toBeInTheDocument();
    expect(screen.getByText(postProp[1].content)).toBeInTheDocument();  
  })
})