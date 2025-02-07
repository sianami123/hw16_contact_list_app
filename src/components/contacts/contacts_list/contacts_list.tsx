import ContactCard from "./contact_card";
import { IContact } from "../../../types/types";

interface IContactsListProps {
  contacts: IContact[];
  setContacts: (contacts: IContact[]) => void;
}

export default function ContactsList({
  contacts,
  setContacts,
}: IContactsListProps) {
  return (
    <div className="lg:w-2/3 sm:w-full flex flex-col gap-2">
      <h2 className="flex justify-center font-bold text-xl">لیست کاربران</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2 bg-slate-100 rounded overflow-y-scroll max-h-[600px]">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contactItem={contact}
            setContacts={setContacts}
            contacts={contacts}
          />
        ))}
      </div>
    </div>
  );
}
