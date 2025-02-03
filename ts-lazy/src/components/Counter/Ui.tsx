import { FC } from "react";

interface IProps {
  text: number;
}

export const Ui: FC<IProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
