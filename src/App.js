import Counter from "./components/Counter";
import Offer from "./components/Offer";
import PasswordInput from "./components/PasswordInput";
import UserLoginInput from "./components/UserLoginInput";

function App() {
  return (
    <main>
      <Counter initialValue={10} />
      <Counter initialValue={15} />
      <br />
      <PasswordInput />
      <br />
      <hr />
      <br />
      <UserLoginInput />
      <br />
      <Offer showAdvert={true} id={5} />
    </main>
  );
}

export default App;
