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

import {
  DeleteIcon,
  SpinnerIcon,
  SettingsIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";

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

  const selectEnable = (index : number) => {
    selectBar ?  setSelectBar(false) :  setSelectBar(true);
   tempArray.push(index)
    
  }






  const submitButton = (event: any) => {
    const containObj = { title: titleValue, content: containValue };
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
    notes.splice(index, 1);
    setNotes(notes);
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
  console.log(editStyle);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(notes);

  return (
    <>
    {selectBar && <Box
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
          p="10px 10px 10px 60px"
          fontSize="18px"
          display="flex"
          alignItems="center"
        >
          <CloseIcon onClick={() => {
            setSelectBar(false)
          }}/>
          <Text pl="24px">Selected</Text>
        </Box>
        <Box p="22px">
          <SpinnerIcon  cursor="pointer" />
          <DeleteIcon ml="28px"  cursor="pointer"/>
        </Box>
      </Box>}
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
        <ModalContent width="unset" mt={36}>
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
