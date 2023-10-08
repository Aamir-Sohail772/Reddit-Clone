import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";


const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30" alt="logo image"/>
        <Image
          src="/images/redditText.svg"
          height="46"
          display={{ base: "none", md: 'unset' }}
          alt="logo name image"
        />
      </Flex>
       {/* <Directory /> */}
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
