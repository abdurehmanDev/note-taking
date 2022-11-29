import React, { useState } from "react";
import { Box, FormControl, Textarea, Input, Button } from "@chakra-ui/react";

import {
  AddIcon,
  DeleteIcon,
  SpinnerIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

export default function CreateNote(props: any) {
  const [expandNote, setExpandNote] = useState(false);

  const expand = () => {
    setExpandNote(true);
  };

  const expandClose = () => {
    setExpandNote(false);
  };

  return (
    <Box>
      <FormControl
        pos="relative"
        w={props.editStyle ? "100%" : "600px" }
        m={props.editStyle ? "0" : "32px auto 50px auto"}
        p="14px 14px 24px 14px"
        borderRadius="7px"
        boxShadow="0 1px 7px rgb(128 128 128)"
       
      >
        <Input
          _focusVisible={{
            outline: "none",
            boxShadow: "none",
            border: "none",
          }}
          type="text"
          placeholder="Title"
          name="title"
          w="100%"
          border="none"
          p="4px 10px"
          marginBottom="20px"
          outline="none"
          fontSize="1rem"
          resize="none"
          onChange={props.editStyle ? props.handleChangeTitleEdit : props.handleChangeTitle }
          value={props.editStyle ? props.titleValueEdit : props.titleValue}
          onClick={expand}
        />
        { props.editStyle ?   (
        <Box>
            <Textarea
              onChange={props.editStyle ? props.handleChangeContainEdit : props.handleChangeContain}
              value={props.editStyle ? props.containValueEdit : props.containValue}
              _focusVisible={{
                outline: "none",
                boxShadow: "none",
                border: "none",
              }}
              name="content"
              placeholder="Take a note..."
              w="100%"
              border="none"
              p="4px 10px"
              outline="none"
              fontSize="1rem"
              resize="none"
            ></Textarea>

            <SpinnerIcon
              _hover={{
                opacity: "0.87",
                backgroundColor: "rgba(95,99,104,0.157)",
              }}
              fontSize="16px"
              marginRight="40px"
              marginLeft="30px"
              cursor="pointer"
            />
            <SettingsIcon
              _hover={{
                opacity: "0.87",
                backgroundColor: "rgba(95,99,104,0.157)",
              }}
              fontSize="16px"
              marginRight="30px"
              marginLeft="30px"
              cursor="pointer"
            />
            <DeleteIcon
              _hover={{
                opacity: "0.87",
                backgroundColor: "rgba(95,99,104,0.157)",
              }}
              fontSize="16px"
              marginRight="30px"
              marginLeft="30px"
              cursor="pointer"
            />
            <Button
              pos="absolute"
              display="flex"
              justifyItems="center"
              alignItems="center"
              right="18px"
              bottom={props.editStyle ? "14px" : "-16px"}
              background="rgb(255, 200, 18)"
              color="#fff"
              border="none"
              borderRadius={props.editStyle ? "28%" :"50%"}
              w={props.editStyle ? "52px" :"36px"}
              h="36px"
              boxShadow="0 1px 3px rgb(165 165 165)"
              cursor="pointer"
              outline="none"
              onClick={()=> props.editStyle ?  props.handleConfirmUpdate(props.editInd) : props.submitButton()}
            >
             {props.editStyle ? "close" :  <AddIcon />}
            </Button>
          </Box>) : 
         (expandNote) && (
          <Box>
            <Textarea
              onChange={props.editStyle ? props.handleChangeContainEdit : props.handleChangeContain}
              value={props.editStyle ? props.containValueEdit : props.containValue}
              _focusVisible={{
                outline: "none",
                boxShadow: "none",
                border: "none",
              }}
              name="content"
              placeholder="Take a note..."
              w="100%"
              border="none"
              p="4px 10px"
              outline="none"
              fontSize="1rem"
              resize="none"
            ></Textarea>

            <SpinnerIcon
              _hover={{
                opacity: "0.87",
                backgroundColor: "rgba(95,99,104,0.157)",
              }}
              fontSize="16px"
              marginRight="40px"
              marginLeft="30px"
              cursor="pointer"
            />
            <SettingsIcon
              _hover={{
                opacity: "0.87",
                backgroundColor: "rgba(95,99,104,0.157)",
              }}
              fontSize="16px"
              marginRight="30px"
              marginLeft="30px"
              cursor="pointer"
            />
            <DeleteIcon
              _hover={{
                opacity: "0.87",
                backgroundColor: "rgba(95,99,104,0.157)",
              }}
              fontSize="16px"
              marginRight="30px"
              marginLeft="30px"
              cursor="pointer"
            />
            <Button
              pos="absolute"
              display="flex"
              justifyItems="center"
              alignItems="center"
              right="18px"
              bottom={props.editStyle ? "14px" : "-16px"}
              background="rgb(255, 200, 18)"
              color="#fff"
              border="none"
              borderRadius={props.editStyle ? "28%" :"50%"}
              w={props.editStyle ? "52px" :"36px"}
              h="36px"
              boxShadow="0 1px 3px rgb(165 165 165)"
              cursor="pointer"
              outline="none"
              onClick={props.editStyle ? props.handleConfirmUpdate : props.submitButton}
            >
             {props.editStyle ? "close" :  <AddIcon />}
            </Button>
          </Box>
        )}
      </FormControl>
    </Box>
  );
}
