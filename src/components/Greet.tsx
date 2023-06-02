// lebih baik mana menggunakan type atau interface? lebih baik menggunakan type karena lebih fleksibel. interface hanya bisa digunakan untuk object sedangkan type bisa digunakan untuk object, function, dan primitive type lainnya.
type GreetProps = {
  name: string;
};

const Greet = ({ name }: GreetProps) => {
  return (
    <>
      <h1>Hello, my name is {name}</h1>
    </>
  );
};

export default Greet;
