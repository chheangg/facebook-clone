import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chatbox from '../Chatbox';

const user = 'George';
const messages = [
  {
    text: 'Message one',
    by: 'Chheang',
    time: '1657359724000',
  },
  {
    text: 'Message two',
    by: 'George',
    time: '1657359725000',
  },
  {
    text: 'Message three',
    by: 'George',
    time: '1657359726000',
  },
  {
    text: 'Message four',
    by: 'Chheang',
    time: '1657359727000',
  },
];

describe('Chatbox component', () => {
  it('# 0.1 Normal Render of Chatbox', () => {
    render(<Chatbox user={user} messages={messages}/>)

    expect(screen.getByRole('heading', {name: user})).toBeInTheDocument()
    expect(screen.queryAllByTestId('left').length).toBe(2);
    expect(screen.queryAllByTestId('right').length).toBe(2);

    expect(screen.getByText(/Message one/)).toBeInTheDocument();
    expect(screen.getByText(/Message two/)).toBeInTheDocument();
    expect(screen.getByText(/Message three/)).toBeInTheDocument();
    expect(screen.getByText(/Message four/)).toBeInTheDocument();
  })
})