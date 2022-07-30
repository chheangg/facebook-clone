import { screen, render } from '@testing-library/react';
import Message from '../Message';
import defaultImg from '../../assets/default-loading-image.png';

const user = {
  name: 'George',
  img: defaultImg,
}

const ownMessage =  {
  content: 'Message one',
  by: 'Chheang',
  time: '1657359724000',
};

const ownImg =  {
  img: defaultImg,
  by: 'Chheang',
  time: '1657359724000',
};

const theirMessage =   {
  content: 'Message two',
  by: 'George',
  time: '1657359725000',
}

const theirImg =  {
  img: defaultImg,
  by: 'George',
  time: '1657359724000',
};


describe('Message component', () => {
  it('# 0.1 Normal render of a message of your own', () => {
    render(<Message discussion={ownMessage} user={user} />);

    expect(screen.getByText(/Message one/)).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  })
  it('# 0.2 Normal render of a message of the other person', () => {
    render(<Message discussion={theirMessage} user={user} />);

    expect(screen.getByText(/Message two/)).toBeInTheDocument();
    expect(screen.getByTestId('left')).toBeInTheDocument();
  })
  it('# 0.3 Render Image from yourself', () => {
    render(<Message discussion={ownImg} user={user} />);

    expect(screen.getByRole('img', {name: 'message pic'})).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  })
  it('# 0.4 Render Image of the other person', () => {
    render(<Message discussion={theirImg} user={user} />);

    expect(screen.getByRole('img', {name: 'message pic'})).toBeInTheDocument();
    expect(screen.getByTestId('left')).toBeInTheDocument();
  })
})