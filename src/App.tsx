import { Heading } from "@chakra-ui/react";
import Todo from "./components/Todo";

function App(): JSX.Element {
  return (
    <>
      <Heading size={"3xl"} fontFamily={"mono"} m={10}>
        mobx-todo
      </Heading>
      <Todo />
    </>
  );
}

export default App;
