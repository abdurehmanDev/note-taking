import React, { useState } from "react";
import Header from "../components/Header";
import CreateNote from "../components/CreateNote";
import Notes from "../components/Notes";
import styles from "../styles/Home.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon, CloseIcon } from "@chakra-ui/icons";

export default function Home(props: any) {
  const [notes, setNotes] = useState<any[]>([]);
  const [titleValue, setTitleValue] = useState<any>("");
  const [containValue, setContainValue] = useState<any>("");
  const [titleValueEdit, setTitleValueEdit] = useState<any>("");
  const [containValueEdit, setContainValueEdit] = useState<any>("");
  const [editStyle, setEditStyle] = useState(false);
  const [editIndex, setEditIndex] = useState(Number);
  const [tempArray, setTempArray] = useState<any[]>([]);
  const [selectBar, setSelectBar] = useState(false);
  const [temp] = useState<any[]>([]);

  const selectEnable = (index: number) => {
    if (notes[index].select) {
      setSelectBar(true);
      // const insert = () => {
      //   tempArray.push(index);
      //   return tempArray;
      // }
      temp.push(index);
      console.log(temp);
      
      setTempArray(temp);

      notes[index].select = false;
      console.log("true");
    } 
    
    else {
      console.log("false");
      tempArray.length = 0;
      setSelectBar(false);
      notes.map((item) => (item.select = true));
    }
  };

  console.log(notes, tempArray);

  // working on issue
  const deleteSelected = () => {
    for (let i = 0; i < tempArray.length; i++) {
      if (!notes[tempArray[i]].select) {
        const remainElement = notes.filter(
          (item) => item.title !== notes[tempArray[i]].title
        );

        //  if(notes[tempArray[i]].title) {
        //   const DeleteElement = notes.splice(tempArray[i], 1)
        setNotes(remainElement);
        console.log("original", notes);
        console.log("remain", remainElement);
      }
    }

    tempArray.length = 0;
  };

  const submitButton = (event: any) => {
    const containObj = {
      title: titleValue,
      content: containValue,
      select: true,
    };
    notes.push(containObj);
    setContainValue("");
    setTitleValue("");
    event.preventDefault();
  };

  const handleChangeTitle = (event: any) => {
    setTitleValue(event.target.value);
  };

  const handleChangeTitleEdit = (event: any) => {
    setTitleValueEdit(event.target.value);
  };

  const handleChangeContain = (event: any) => {
    setContainValue(event.target.value);
  };

  const handleChangeContainEdit = (event: any) => {
    setContainValueEdit(event.target.value);
  };

  const deleteNote = (index: number) => {
    const updateArray = notes.filter(
      (item) => item.title !== notes[index].title
    );
    setNotes(updateArray);
  };

  const handleEdit = (index: number) => {
    setTitleValueEdit(notes[index].title);
    setContainValueEdit(notes[index].content);
    setEditStyle(true);
    setEditIndex(index);
  };

  const handleConfirmUpdate = (editIndex: number) => {
    notes[editIndex].title = titleValueEdit;
    notes[editIndex].content = containValueEdit;
    onClose();
    setEditStyle(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {selectBar && (
        <Box
          display="flex"
          flexDirection="row"
          alignContent="center"
          justifyContent="space-between"
          alignItems="center"
          zIndex="1000"
          backgroundColor="#fff"
          pos="absolute"
          w="100%"
          transform="translateY(0px)"
          transition="opacity 0.218s ease-in,transform 0.218s ease-in"
        >
          <Box
            p={["4px 4px 4px 16px", "10px 10px 10px 60px"]}
            fontSize="18px"
            display="flex"
            alignItems="center"
          >
            <CloseIcon
              width={["0.8em", "1em", "1em"]}
              height={["0.8em", "1em", "1em"]}
              cursor="pointer"
              onClick={() => {
                setSelectBar(false);
              }}
            />
            <Text pl="24px"> {tempArray.length} Selected</Text>
          </Box>
          <Box p={["16px", "18px", "22px"]}>
            <DeleteIcon
              ml="28px"
              cursor="pointer"
              onClick={() => deleteSelected()}
            />
          </Box>
        </Box>
      )}
      <Header />
      <CreateNote
        titleValue={titleValue}
        containValue={containValue}
        submitButton={submitButton}
        handleChangeTitle={handleChangeTitle}
        handleChangeContain={handleChangeContain}
      />
      {notes.map((note: any, index: number) => (
        <Notes
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          notes={notes}
          deleteNote={deleteNote}
          onOpen={onOpen}
          handleEdit={handleEdit}
          selectEnable={selectEnable}
        />
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="100%" mt={36}>
          <ModalBody p={0} max-width="800px" top="20%" left="24%">
            <CreateNote
              titleValueEdit={titleValueEdit}
              containValueEdit={containValueEdit}
              handleChangeTitleEdit={handleChangeTitleEdit}
              handleChangeContainEdit={handleChangeContainEdit}
              editStyle={editStyle}
              handleConfirmUpdate={handleConfirmUpdate}
              editInd={editIndex}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
