import { useState } from "react";

function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClick = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputType = isPasswordVisible ? "text" : "password";
  const buttonText = isPasswordVisible ? "Hide" : "Show";

  return (
    <div>
      <input type={inputType} />
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default PasswordInput;
