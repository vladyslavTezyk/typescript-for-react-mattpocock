import React from "react";

type ButtonProps = {
  children: React.ReactNode
}

export const Button = ({children}: ButtonProps) => {
  return <button>{children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button children></Button>
      <Button>Hello world!</Button>
    </>
  );
};
