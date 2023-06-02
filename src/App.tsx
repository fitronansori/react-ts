import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
  const Orang = {
    name: "Fitron Ansori",
    age: 20,
  };

  const persons = [
    {
      name: "Fitron Ansori",
      age: 20,
    },
    { name: "Azkia", age: 12 },
    {
      name: "Nara",
      age: 1,
    },
  ];

  return (
    <>
      <Greet name={"Fitron Ansori"} />
      <Person orang={Orang} />
      <PersonList persons={persons} />
    </>
  );
};

export default App;
