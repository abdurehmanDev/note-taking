import React from "react";
import { Box, Text } from "@chakra-ui/react";

import {
  DeleteIcon,
  SpinnerIcon,
  SettingsIcon,
  CheckIcon,
  CloseIcon
} from "@chakra-ui/icons";

export default function Notes(props: any) {
  return (
    <>

      <Box
        w="240px"
        borderRadius="7px"
        boxShadow="0 2px 5px rgb(175, 175, 175)"
        p="10px"
        m="16px"
        float="left"
        mr="0"
        
      >

        <Text fontSize="1rem" mb="6px">
          {props.title}
        </Text>
        <Text
          fontSize="1rem"
          color="#6f212b"
          marginBottom="10px"
          whiteSpace="pre-wrap"
        >
          {props.content}
        </Text>
        <SpinnerIcon
          _hover={{ opacity: "0.87", backgroundColor: "rgba(95,99,104,0.157)" }}
          fontSize="16px"
          marginRight="20px"
          marginLeft="20px"
          cursor="pointer"
        />
        <SettingsIcon
          onClick={() => {
            props.onOpen(), props.handleEdit(props.id);
          }}
          _hover={{ opacity: "0.87", backgroundColor: "rgba(95,99,104,0.157)" }}
          fontSize="16px"
          marginRight="20px"
          marginLeft="20px"
          cursor="pointer"
        />
        <DeleteIcon
          _hover={{ opacity: "0.87", backgroundColor: "rgba(95,99,104,0.157)" }}
          fontSize="16px"
          marginRight="20px"
          marginLeft="20px"
          cursor="pointer"
          onClick={() => props.deleteNote(props.id)}
        />
        <CheckIcon
          width="1.1em"
          height="1.1em"
          borderRadius="50%"
          border="1px solid #000"
          pos="relative"
          top="-88px"
          backgroundColor="#000"
          left="-184px"
          color="#fff"
          _hover={{ opacity: "0.87" }}
          onClick={()=> props.selectEnable(props.id)}
          cursor="pointer"
        />
      </Box>
    </>
  );
}
