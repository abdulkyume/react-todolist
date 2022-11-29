import apiservice from "../../services/api.service";
import { Link, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
ReactModal.setAppElement("#root");

const LogIn = () => {
  var errormsg = 'Email/ Password Incorrect';
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  let ApiService = new apiservice();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const checkPasswords = () => {
    console.log();
  };

  const login = (e: any) => {
    e.preventDefault();
    var email = e.target[0].value;
    var password = e.target[1].value;
    var formvalue = {
      email: email,
      password: password,
    };

    ApiService.logIn(formvalue).then((response) => {
      if (Object.keys(response).length > 0) {
        navigate("/Dashboard");
      }
      else{
        openModal();
      }
    });

  };
  return (
    <div className="h-screen justify-center flex items-center flex-col flex-wrap">
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {errormsg}
      </ReactModal>
      <div className="my-6 font-bold text-2xl">Log In</div>
      <form className="w-[30rem]" onSubmit={login}>
        <input
          type="email"
          className="form-input px-4 py-3 w-full my-3"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          className="form-input px-4 py-3 w-full my-3"
          placeholder="Password"
          name="password"
          required
          onChange={checkPasswords}
        />
        <div className="flex items-center">
          <div className="w-full">
            <input type="submit" className="form-input px-4 py-3 my-3" />
          </div>
          <div className="w-full text-right">
            <Link to="/forgetPassword">Forgot Password?</Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full text-center">
            <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
