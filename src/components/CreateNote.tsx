import React, { useState } from "react";
import {
  Box,
  FormControl,
  Textarea,
  Input,
  Button,
  Flex,
  Img,
} from "@chakra-ui/react";

import {
  AddIcon,
 
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
        w={props.editStyle ? "100%" : ["unset", "500px", "600px"]}
        m={props.editStyle ? "0" : ["32px 14px 50px 14px", "32px auto 50px auto"]}
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
          onChange={
            props.editStyle
              ? props.handleChangeTitleEdit
              : props.handleChangeTitle
          }
          value={props.editStyle ? props.titleValueEdit : props.titleValue}
          onClick={expand}
        />
        {props.editStyle ? (
          <Box>
            <Textarea
              onChange={
                props.editStyle
                  ? props.handleChangeContainEdit
                  : props.handleChangeContain
              }
              value={
                props.editStyle ? props.containValueEdit : props.containValue
              }
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
              borderRadius={props.editStyle ? "28%" : "50%"}
              w={props.editStyle ? "52px" : "36px"}
              h="36px"
              boxShadow="0 1px 3px rgb(165 165 165)"
              cursor="pointer"
              outline="none"
              onClick={() =>
                props.editStyle
                  ? props.handleConfirmUpdate(props.editInd)
                  : props.submitButton()
              }
            >
              {props.editStyle ? "close" : <AddIcon />}
            </Button>
          </Box>
        ) : (
          expandNote && (
            <Box>
              <Textarea
                onChange={
                  props.editStyle
                    ? props.handleChangeContainEdit
                    : props.handleChangeContain
                }
                value={
                  props.editStyle ? props.containValueEdit : props.containValue
                }
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
              <Flex>
                <Img
                  src="https://cdn-icons-png.flaticon.com/512/16/16410.png"
                  alt="image icon"
                  width={4}
                  height={4}
                  marginRight="40px"
                  marginLeft="30px"
                  cursor="pointer"
                />
                <Img
                  src="https://cdn-icons-png.flaticon.com/512/565/565789.png"
                  alt="color palette"
                  width={4}
                  height={4}
                  marginRight="30px"
                  marginLeft="30px"
                  cursor="pointer"
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
              </Flex>
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
                borderRadius={props.editStyle ? "28%" : "50%"}
                w={props.editStyle ? "52px" : "36px"}
                h="36px"
                boxShadow="0 1px 3px rgb(165 165 165)"
                cursor="pointer"
                outline="none"
                onClick={
                  props.editStyle
                    ? props.handleConfirmUpdate
                    : props.submitButton
                }
              >
                {props.editStyle ? "close" : <AddIcon />}
              </Button>
            </Box>
          )
        )}
      </FormControl>
    </Box>
  );
}
