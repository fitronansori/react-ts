type Props = {
  orang: {
    name: string;
    age: number;
  };
};

const Person = ({ orang }: Props) => {
  return (
    <>
      <h1>
        Hello, my name is {orang.name} and I'm {orang.age} years old
      </h1>
    </>
  );
};

export default Person;
