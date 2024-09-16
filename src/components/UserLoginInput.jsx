import { useState } from "react";

function UserLoginInput() {
  const [login, setLogin] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setLogin(event.target.value);
  };

  const handleBlur = () => {
    setShowError(login.length < 5);
  };

  return (
    <div>
      <input type="text" placeholder="login" value={login} onChange={handleChange} onBlur={handleBlur} />
      {showError ? <div>Login za krótki</div> : null}
    </div>
  );
}

export default UserLoginInput;
