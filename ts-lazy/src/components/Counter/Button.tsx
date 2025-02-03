import { FC } from "react";

interface IProps {
  onClick: () => void;
  text: string;
}

export const Button: FC<IProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
