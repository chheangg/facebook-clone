import { screen, render } from '@testing-library/react';
import Message from '../Message';

const user = 'George';

const ownMessage =  {
  text: 'Message one',
  by: 'Chheang',
  time: '1657359724000',
};

const theirMessage =   {
  text: 'Message two',
  by: 'George',
  time: '1657359725000',
}

describe('Message component', () => {
  it('# 0.1 Normal render of a message of your own', () => {
    render(<Message message={ownMessage} user={user} />);

    expect(screen.getByText(/Message one/)).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  })
  it('# 0.2 Normal render of a message of the other person', () => {
    render(<Message message={theirMessage} user={user} />);

    expect(screen.getByText(/Message two/)).toBeInTheDocument();
    expect(screen.getByTestId('left')).toBeInTheDocument();
  })
})