export interface ICardProps {
  title: string;
  description: string;
  price: number;
}

export type Person = {
  age: number;
  name: string;
  surname: string;
  isMarried: boolean | string;
  things: {
    name: string;
    price: number;
    date: Date;
  };
};

export type TBase = { name: string; surname?: string };

type TAsset = { assets: number };

export type Human = Person & TAsset;
