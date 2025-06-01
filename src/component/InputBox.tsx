import React, { ChangeEvent } from "react";

interface Props {
  text: string;
  setText: (value: string) => void;
}

const InputBox: React.FC<Props> = ({ text, setText }) => {
  //const [text, setText] = useState<string>("");

  function handleText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  return (
    <div className="text text-box flex content-start p-4">
      <input
        className="border border-gray-200 bg-white text-black shadow-md outline-0 w-28 h-14 p-3 rounded-lg"
        type="text"
        value={text}
        onChange={handleText}
        autoFocus
      />
    </div>
  );
};

export default InputBox;
