import React, { HTMLProps } from 'react';

type TTextFieldProps = {
}& HTMLProps<HTMLInputElement>

const TextField: React.FC<TTextFieldProps> = ({...props}) => {
  return <input  {...props} />;
};

export default TextField;