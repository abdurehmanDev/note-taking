import React from "react";
import { Box, Text, Img, Flex } from "@chakra-ui/react";

import {
  DeleteIcon,
  SpinnerIcon,
  SettingsIcon,
  CheckIcon,
  CloseIcon,
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
           <CheckIcon
          width="1.1em"
          height="1.1em"
          borderRadius="50%"
          border="1px solid #000"
          pos="relative"
          top="-16px"
          backgroundColor="#000"
          left="-16px"
          color="#fff"
          _hover={{ opacity: "0.87" }}
          onClick={() => props.selectEnable(props.id)}
          cursor="pointer"
        />
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

     

        <Flex align="center">
          <Img
            src="https://cdn-icons-png.flaticon.com/512/16/16410.png"
            alt="image icon"
            width={4}
            height={4}
            marginRight="20px"
            marginLeft="20px"
            cursor="pointer"
          />
          <Img
            src="https://cdn-icons-png.flaticon.com/512/565/565789.png"
            alt="color palette"
            width={4}
            height={4}
            marginRight="20px"
            marginLeft="20px"
          />
          <Img
            src="https://cdn-icons-png.flaticon.com/512/2355/2355330.png"
            alt="edit icon"
            width={4}
            height={4}
            onClick={() => {
              props.onOpen(), props.handleEdit(props.id);
            }}
            marginRight="20px"
            marginLeft="20px"
            cursor="pointer"
          />

          <DeleteIcon
            _hover={{
              opacity: "0.87",
              backgroundColor: "rgba(95,99,104,0.157)",
            }}
            fontSize="16px"
            marginRight="20px"
            marginLeft="20px"
            cursor="pointer"
            onClick={() => props.deleteNote(props.id)}
          />
        </Flex>
      </Box>
    </>
  );
}
