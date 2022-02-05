import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import './style.css';

type TButtonProps = {
    text: string,
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<TButtonProps> = ({text, ...props}) => {

  return  <button {...props}>{text}</button>;
};

export default Button;
