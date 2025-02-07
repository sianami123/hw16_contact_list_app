import { IContact } from "../../../types/types";

interface IDeleteContactFormProps {
  deleteContact: IContact;
}

export default function DeleteContactForm({
  deleteContact,
}: IDeleteContactFormProps) {
  return (
    <div>
      <h1>Delete Contact</h1>

      <p>
        آیا از حذف {deleteContact.fName} {deleteContact.lName} مطمئن هستید؟
      </p>
      <button>حذف</button>
    </div>
  );
}
