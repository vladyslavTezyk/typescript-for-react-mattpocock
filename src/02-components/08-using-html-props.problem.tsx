import React, { ComponentProps } from "react";

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
//   className?: string;
// }

// export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   className?: string;
// }

export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
