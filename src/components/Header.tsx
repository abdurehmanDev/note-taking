import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Flex,
  Text,
  Img,
  Link,
  Spacer,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

export default function header() {
  return (
    <Flex direction="row" align="center" justify="space-between" paddingBlock= "10px" borderBottom= "1px solid #80808096">
    <Flex align="center">
      <Img
        w="auto"
        h={["38px", "44px","54px"]} 
        objectFit="cover"
        src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
        alt="logo"
      />

      <Text color="#5f6368" fontSize={["lg", "xl", "2xl"]} fontWeight="600">
        Keep
      </Text>
</Flex>
     
      <InputGroup w="50%">
      <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon/>}
          />
          <Input
             type="text"
             borderRadius="10px"
             fontWeight="normal"
             placeholder="Search"
         />
        
      </InputGroup>
      <Box>
      <Link color='#523bd1' fontWeight="bold" p={["10px" , "16px", "28px"]} href='#'>
        Sign In
          </Link>
          </Box>
    </Flex>

  );
}
