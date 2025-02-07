import TextInput from "./text_input";
import { useState } from "react";
import { createContact } from "../../../api/api";
import { toast } from "react-toastify";
import { IContact } from "../../../types/types";

interface IAddContactProps {
  setContacts: (contacts: IContact[]) => void;
  contacts: IContact[];
}

export default function AddContact({
  setContacts,
  contacts,
}: IAddContactProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      name === "" ||
      lastName === "" ||
      phone === "" ||
      relation === "" ||
      email === ""
    ) {
      setErrorMessage("لطفا تمامی فیلدها را پر کنید");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("ایمیل معتبر نیست");
      return;
    }
    if (contacts.some((contact) => contact.phoneNumber === phone)) {
      setErrorMessage("این شماره موبایل قبلا ثبت شده است");
      return;
    }
    if (contacts.some((contact) => contact.email === email)) {
      setErrorMessage("این ایمیل قبلا ثبت شده است");
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
        toast.success(`Contact ${name} ${lastName} created successfully`);
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

  return (
    <div className="lg:w-1/4 sm:w-full  flex flex-col gap-3">
      <h2 className="flex justify-center font-bold text-xl">
        اضافه / ویرایش کاربران
      </h2>
      <form
        className="shadow-md p-3 flex flex-col gap-4"
        onSubmit={handleSubmit}
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
            {isLoading ? "در حال اضافه کردن..." : "اضافه کردن"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
