import { render, screen } from "@testing-library/react";
import ProfileHeader from "../ProfileHeader";
import defaultImg from '../../assets/default-loading-image.png';

const userInfoOne = {
  name: 'George',
  img: defaultImg,
}

const userInfoTwo = {
  name: 'George',
}

describe('ProfileHeader component', () => {
  it('# 0.1 Normal render of ProfileHeader', () => {
    render(<ProfileHeader user={userInfoOne} />);
    
    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  })

  it('# 0.2 Render of ProfileHeader with default img', () => {
    render(<ProfileHeader user={userInfoTwo} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
});
