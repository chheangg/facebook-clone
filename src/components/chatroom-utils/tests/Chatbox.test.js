import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chatbox from '../Chatbox';
import defaultImg from '../../assets/default-loading-image.png';

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

const messagesWithImg = [
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
    img: defaultImg,
    by: 'Chheang',
    time: '1657359727000',
  },
];

describe('Chatbox component', () => {
  it('# 0.1 Normal Render of Chatbox', () => {
    render(<Chatbox user={user} messages={messages}/>)

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    expect(screen.getByRole('heading', {name: user})).toBeInTheDocument()
    expect(screen.queryAllByTestId('left').length).toBe(2);
    expect(screen.queryAllByTestId('right').length).toBe(2);

    expect(screen.getByText(/Message one/)).toBeInTheDocument();
    expect(screen.getByText(/Message two/)).toBeInTheDocument();
    expect(screen.getByText(/Message three/)).toBeInTheDocument();
    expect(screen.getByText(/Message four/)).toBeInTheDocument();

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    
  })

  it('# 0.2 Normal Render of Chatbox with empty array', () => {
    render(<Chatbox user={user} messages={[]}/>)

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    expect(screen.getByRole('heading', {name: user})).toBeInTheDocument()
    expect(screen.queryAllByTestId('left').length).toBe(0);
    expect(screen.queryAllByTestId('right').length).toBe(0);

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  })

  it('# 0.3 Send a text', () => {
    render(<Chatbox user={user} messages={messages}/>)

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    userEvent.type(input, "Message five");
    userEvent.click(button);

    expect(screen.queryAllByTestId('right')[2].textContent).toMatch(/Message five/);
  })  
  
  it('# 0.4 Render image in a chatroom', () => {
    render(<Chatbox user={user} messages={messagesWithImg}/>)

    expect(screen.getByRole('img')).toBeInTheDocument();
  })

})