import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./Components/ContactCard";

import AddUpdate from "./Components/AddUpdate";

const App = () => {
  const [contact, setContact] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const getConatcts = async () => {
      try {
        const ContactsRef = collection(db, "Conatct");
        const contactSnapshot = await getDocs(ContactsRef);
        console.log(contactSnapshot);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContact(contactLists);
        return contactLists;
      } catch (error) {
        console.log("Error");
      }
    };
    getConatcts();
  }, []);

  const filterContact = async (e) => {
    const value = e.target.value.toLowerCase();
    const ContactsRef = collection(db, "Conatct");
    const contactSnapshot = await getDocs(ContactsRef);
    const contactLists = contactSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    const filteredContact = contactLists.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
  
    setContact(filteredContact);
  };
  
  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex-grow flex mt-4 relative items-center">
            <CiSearch className=" ml-1 absolute text-white text-3xl " />
            <input
            onChange={filterContact}
              type="text"
              className="pl-9 text-white bg-transparent border-white rounded-md h-10 border flex-grow"
            />
          </div>

          <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer mt-4 text-white " />
        </div>
        <div className="mt-3 flex gap-4 flex-col">
          {contact.map((contact) => (
            <div key={contact.id}>
              <ContactCard key={contact.id} contact={contact} />
            </div>
          ))}
        </div>
      </div>
     <AddUpdate onClose={onClose} isOpen={isOpen}/>
    </>
  );
};

export default App;
