import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import AddUpdate from "./AddUpdate";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Conatct", id));
    } catch (error) {
      console.log("error");
    }
  };

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="field flex justify-around items-center p-2 rounded-lg">
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-4xl user" />
          <div className="">
            <h2 className="text-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash onClick={() => deleteContact(contact.id)} className="ico cursor-pointer" />
        </div>
      </div>
      <AddUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
