import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
  name: string,
}

export const Button: React.FC<ButtonPropsType> = ({name, ...restProps}) => {

  return (<div>
      <button {...restProps}>{name}</button>
    </div>
  )
}