import { screen, render } from '@testing-library/react';
import defaultImg from '../../assets/default-loading-image.png';
import Reply from '../Reply';

const userOne = {
  name: 'George',
  img: defaultImg,
}

describe('Reply Component', () => {
  it('# 0.1 Normal Render of Reply Component', () => {
    const samplePropOne = {
      by: userOne,
      content: 'Reply #1',
      date: '1657359724000',
    }

    render(<Reply discussion={samplePropOne}/>);

    expect(screen.getByRole('img', { name: 'profile pic' })).toBeInTheDocument();
    expect(screen.getByText(userOne.name)).toBeInTheDocument();
  })

  it('# 0.2 Render of Reply Component with Image only', () => {
    const samplePropTwo = {
      by: userOne,
      img: defaultImg,
      date: '1657359724000',
    };

    render(<Reply discussion={samplePropTwo} />);

    expect(screen.getByRole('img', { name: 'reply pic'})).toBeInTheDocument();
  })

  it('# 0.3 Render of Reply Component with Text and Image', () => {
    const samplePropThree = {
      by: userOne,
      content: 'Reply #3',
      img: defaultImg,
      date: '1657359724000',
    };

    render(<Reply discussion={samplePropThree} />)

    expect(screen.getByText(samplePropThree.content)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'reply pic'})).toBeInTheDocument();
  })
})