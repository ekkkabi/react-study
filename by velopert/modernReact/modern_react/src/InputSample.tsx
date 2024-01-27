import React, { HtmlHTMLAttributes, useRef, useState } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef<HTMLInputElement | null>(null);
  const { name, nickname } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    if (nameInput && nameInput.current) {
      nameInput.current.focus();
    }
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        ref={nameInput}
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          {name}({nickname})
        </b>
      </div>
    </div>
  );
};
export default InputSample;
