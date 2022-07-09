import { render, screen } from "@testing-library/react";
import ProfileHeader from "../ProfileHeader";

const name = 'George';

describe('ProfileHeader component', () => {
  it('# 0.1 Normal render of ProfileHeader', () => {
    render(<ProfileHeader user={name} />);
    
    expect(screen.getByRole('heading', {name: name})).toBeInTheDocument();
  })
})