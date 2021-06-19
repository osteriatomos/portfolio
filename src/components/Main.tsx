import { VStack } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const Main: React.VFC<Props> = ({ children }) => {
  return (
    <VStack
      width="100%"
      justifyContent="center"
      alignItems="center"
      spacing="8rem"
      p="2rem"
    >
      {children}
    </VStack>
  );
};