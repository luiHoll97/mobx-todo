import { Todo } from "../types/todo";
import { Flex, Text, Box, HStack, Icon } from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaTrash,
  FaArrowDown,
} from "react-icons/fa";
import store from "../store";

interface Props {
  todo: Todo;
}

const TodoStack = ({ todo }: Props) => {
  return (
    <Box
      w={"90%"}
      m={2}
      borderWidth={"1px 0px 1px 0px"}
      borderColor={
        todo.status === 1
          ? "red.300"
          : todo.status === 2
          ? "yellow.300"
          : "green.300"
      }
      p={5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box overflow={"hidden"} mr={5}>
        <Text whiteSpace={"normal"}>{todo.text}</Text>
      </Box>
      <Flex>
        <HStack spacing={5}>
          {todo.status !== 1 && (
            <Icon
              as={FaArrowLeft}
              onClick={() => store.toggleStatus(todo.id, false)}
              color={"yellow.500"}
              display={{ base: "none", md: "block" }}
            />
          )}
          {todo.status !== 3 && (
            <Icon
              as={FaArrowRight}
              onClick={() => store.toggleStatus(todo.id, true)}
              color={"green.500"}
              display={{ base: "none", md: "block" }}
            />
          )}
          {todo.status !== 1 && (
            <Icon
              as={FaArrowUp}
              onClick={() => store.toggleStatus(todo.id, false)}
              color={"yellow.500"}
              display={{ base: "block", md: "none" }}
            />
          )}
          {todo.status !== 3 && (
            <Icon
              as={FaArrowDown}
              onClick={() => store.toggleStatus(todo.id, true)}
              color={"green.500"}
              display={{ base: "block", md: "none" }}
            />
          )}
          <Icon
            as={FaTrash}
            onClick={() => store.removeTodo(todo.id)}
            color={"red.500"}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default TodoStack;
