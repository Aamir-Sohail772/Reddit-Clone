import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButton from "./AuthButton";
import AuthModal from "../../Modal/Auth/AuthModal";

type RightContentProps = {
  // user: any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};
export default RightContent;
