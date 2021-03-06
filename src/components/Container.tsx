import { Flex } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const Container: React.VFC<Props> = ({ children }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};
