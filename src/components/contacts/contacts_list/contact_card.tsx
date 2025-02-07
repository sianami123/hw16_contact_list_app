import { IContact } from "../../../types/types";
import { deleteContact } from "../../../api/api";
import { toast } from "react-toastify";

interface IContactCardProps {
  contactItem: IContact;
  setContacts: (contacts: IContact[]) => void;
  contacts: IContact[];
}

export default function ContactCard({
  contactItem,
  setContacts,
  contacts,
}: IContactCardProps) {
  async function handleDelete() {
    const isConfirmed = window.confirm(
      `آیا از حذف ${contactItem.fName} ${contactItem.lName} مطمئن هستید؟`
    );

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await deleteContact(contactItem.id.toString());
      console.log(response);
      if (response.status === 200) {
        setContacts(
          contacts.filter((contact) => contact.id !== contactItem.id)
        );
        toast.success(`${contactItem.fName} ${contactItem.lName} حذف شد`);
      } else {
        toast.error("Error deleting contact");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting contact" + error);
    }
  }

  return (
    <div className="p-4 shadow-gray-400 shadow-md bg-slate-200 rounded">
      <div className="flex flex-col gap-1">
        <div>
          <span>نام: </span>
          <span>
            {contactItem.fName} {contactItem.lName}
          </span>
        </div>
        <div>
          <span>شماره موبایل: </span>
          <span>{contactItem.phoneNumber}</span>
        </div>
        <div>
          <span>نسبت: </span>

          <span>{contactItem.relative}</span>
        </div>
        <div>
          <span>ایمیل: </span>
          <span>{contactItem.email}</span>
        </div>
        <div className="flex justify-end">
          <button
            className="text-white bg-blue-500 px-2 py-1 self-center rounded-r"
            onClick={() => {}}
          >
            ویرایش
          </button>
          <button
            className="text-white bg-red-500 px-3 py-1 self-center rounded-l"
            onClick={handleDelete}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}
