interface ITextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  error,
}: ITextInputProps) {
  return (
    <>
      <label>
        {label}
        <br />
        <input
          value={value}
          className="px-3 py-2 shadow w-full p-1 rounded outline-none"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
      {/* {value === "" && <p className="text-red-500 text-sm">{error}</p>} */}
    </>
  );
}
