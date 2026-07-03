import React from "react";

type ButtonProps = {
  className: string
}

export const Button = ({className}: ButtonProps) => {
  return <button className={className}></button>;
};

const Parent = () => {
  return (
    <>

      <Button className="size-8"></Button>

      <Button className="my-class"></Button>
    </>
  );
};
