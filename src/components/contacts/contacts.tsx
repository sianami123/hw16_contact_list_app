import Header from "./header/header";
import ContactsList from "./contacts_list/contacts_list";
import AddContact from "./add_contact/add_contact";
import { useState, useEffect } from "react";
import { getAllContacts } from "../../api/api";
import { toast } from "react-toastify";
import { IContact } from "../../types/types";

export default function Contacts() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [editContact, setEditContact] = useState<IContact | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getAllContacts();
        console.log("response", response);
        if (response.status === 200) {
          setContacts(response.data.records);
        } else {
          alert("Error fetching contacts:" + response.data.message);
        }
      } catch (error) {
        toast.error(`Error fetching contacts: ${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="mx-3 max-w-[1536px] 2xl:mx-auto">
      <div></div>
      <Header />
      <div className="flex gap-1 mt-2 mx-3 flex-col sm:flex-col sm:gap-3 md:flex-row">
        <AddContact
          setContacts={setContacts}
          contacts={contacts}
          editContact={editContact}
          setEditContact={setEditContact}
        />
        <ContactsList
          contacts={contacts}
          setContacts={setContacts}
          setEditContact={setEditContact}
        />
      </div>
    </div>
  );
}
