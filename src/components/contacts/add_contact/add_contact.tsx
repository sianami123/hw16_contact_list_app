import TextInput from "./text_input";
import { useState, useEffect } from "react";
import { createContact, updateContact } from "../../../api/api";
import { toast } from "react-toastify";
import { IContact } from "../../../types/types";

interface IAddContactProps {
  setContacts: (contacts: IContact[]) => void;
  contacts: IContact[];
  editContact: IContact | null;
  setEditContact: (contact: IContact | null) => void;
}

export default function AddContact({
  setContacts,
  contacts,
  editContact,
  setEditContact,
}: IAddContactProps) {
  const [name, setName] = useState(editContact?.fName || "");
  const [lastName, setLastName] = useState(editContact?.lName || "");
  const [phone, setPhone] = useState(editContact?.phoneNumber || "");
  const [email, setEmail] = useState(editContact?.email || "");
  const [relation, setRelation] = useState(editContact?.relative || "");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // TODO: why after editing the contact, the email is not updated in usestate?
  useEffect(() => {
    if (editContact) {
      setName(editContact.fName || "");
      setLastName(editContact.lName || "");
      setPhone(editContact.phoneNumber || "");
      setEmail(editContact.email || "");
      setRelation(editContact.relative || "");
    }
  }, [editContact]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateFormData()) {
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    try {
      const response = await createContact(
        name,
        lastName,
        phone,
        relation,
        email
      );
      console.log(response);

      if (response.status === 200 || response.status === 201) {
        toast.success(`${name} ${lastName} با موفقیت اضافه شد`);
        setContacts([...contacts, response.data]);
        setName("");
        setLastName("");
        setPhone("");
        setRelation("");
        setEmail("");
      } else {
        toast.error("Error creating contact");
      }

      setIsLoading(false);
    } catch (error) {
      toast.error("Error creating contact:" + error);
      setIsLoading(false);
    }
  }

  function validateFormData() {
    if (
      name === "" ||
      lastName === "" ||
      phone === "" ||
      relation === "" ||
      email === ""
    ) {
      setErrorMessage("لطفا تمامی فیلدها را پر کنید");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("ایمیل معتبر نیست");
      return false;
    }
    // if (!/^[0-9]+$/.test(phone)) {
    //   setErrorMessage("شماره موبایل معتبر نیست");
    //   return false;
    // }
    if (
      contacts.some(
        (contact) =>
          contact.phoneNumber === phone && contact.id !== editContact?.id
      )
    ) {
      setErrorMessage("این شماره موبایل قبلا ثبت شده است");
      return false;
    }
    if (
      contacts.some(
        (contact) => contact.email === email && contact.id !== editContact?.id
      )
    ) {
      setErrorMessage("این ایمیل قبلا ثبت شده است");
      return false;
    }
    return true;
  }

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(editContact?.id, name, lastName, phone, relation, email);
    if (!validateFormData()) {
      return;
    }
    setErrorMessage("");

    setIsLoading(true);
    updateContact(
      editContact?.id || "",
      name,
      lastName,
      phone,
      relation,
      email
    ).then((response) => {
      if (response.status === 200 || response.status === 201) {
        toast.success(`${name} ${lastName} با موفقیت ویرایش شد`);
        setContacts(
          contacts.map((contact) =>
            contact.id === editContact?.id ? response.data : contact
          )
        );
        setName("");
        setLastName("");
        setPhone("");
        setRelation("");
        setEmail("");
        setEditContact(null);
        setIsLoading(false);
      } else {
        toast.error("Error updating contact");
      }
      setIsLoading(false);
    });
  }

  return (
    <div className="lg:w-1/4 sm:w-full  flex flex-col gap-3">
      <h2 className="flex justify-center font-bold text-xl">
        اضافه / ویرایش کاربران
      </h2>
      <form
        className="shadow-md p-3 flex flex-col gap-4"
        onSubmit={editContact ? handleEdit : handleSubmit}
      >
        <TextInput
          label="نام:"
          placeholder="نام..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          error="لطفا نام را وارد کنید"
        />

        <TextInput
          label="نام خانوادگی:"
          placeholder="نام خانوادکی..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error="لطفا نام خانوادگی را وارد کنید"
        />

        <TextInput
          label="شماره موبایل:"
          placeholder="شماره موبایل..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error="لطفا شماره موبایل را وارد کنید"
        />

        <TextInput
          label="نسبت:"
          placeholder="نسبت..."
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          error="لطفا نسبت را وارد کنید"
        />

        <TextInput
          label="ایمیل:"
          placeholder="ایمیل..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error="لطفا ایمیل را وارد کنید"
        />

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer disabled:bg-gray-500 text-white rounded px-2 py-2 hover:bg-blue-600 sm:w-full md:w-fit"
            disabled={isLoading}
          >
            {!isLoading && (editContact ? "ویرایش" : "اضافه کردن")}
            {isLoading &&
              (editContact ? "درحال ویرایش" : "در حال اضافه کردن...")}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
