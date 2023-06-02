type Props = {
  persons: {
    name: string;
    age: number;
  }[]; // array of object
};

const PersonList = ({ persons }: Props) => {
  return (
    <>
      <h1>Person List</h1>
      {persons.map((person) => (
        <h1>
          Hello, my name is {person.name} and I'm {person.age} years old
        </h1>
      ))}
    </>
  );
};

export default PersonList;
