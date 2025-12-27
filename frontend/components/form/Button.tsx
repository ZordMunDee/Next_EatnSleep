import { Button } from "../ui/button";

type btnSize = 'default' | 'lg' | 'sm' 

type SubmitButtonProps = {
  className: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  //code

  return <button type="submit" size={size}
        className={`${className} capitonlize` }
  >{text}</button>;
};
