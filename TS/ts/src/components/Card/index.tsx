import { FC } from "react";
import { Human, ICardProps, Person, TBase } from "../../models";

interface IProps {
  title: string;
  description: string;
  price?: number;
}

const data: Human = {
  age: 20,
  name: "John",
  surname: "Doe",
  isMarried: false,
  assets: 1000,
};

const thing: Pick<Person, "things"> = {
  things: { name: "string", price: 100, date: new Date() },
};

const age: Pick<Person, "age"> = { age: 20 };

const username: Required<TBase> = { name: "John", surname: "Doe" };

const cardData: Partial<ICardProps> = { price: 4, description: "description" };

export const Card: FC<IProps> = ({ title, description, price }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <div>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{age}</p>
        <p>{isMarried}</p>
        <p>{asset}</p>
      </div>
    </div>
  );
};
