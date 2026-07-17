import { useRef } from "react";

export const Component = () => {

  const mutableRefObject = useRef<string>("123")
  mutableRefObject.current = "1234"

  const refObject = useRef<string | null>(null);
  refObject.current = "Hello";

  // in this case if we are not defining a T by default it will be undefined and we could mutate it. However if we pass an initial value it will infer it's type
  const undefMutableRefObject = useRef()
  undefMutableRefObject.current = "1234" // error as string !== undefined

  return null;
};
