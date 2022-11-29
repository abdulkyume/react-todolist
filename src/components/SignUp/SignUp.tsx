import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiservice from "../../services/api.service";
import ReactModal from "react-modal";

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
ReactModal.setAppElement('#root');

const SignUp = () => {
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

  const openaccount = (e: any) => {
    e.preventDefault();
    var username = e.target[0].value;
    var email = e.target[1].value;
    var password = e.target[2].value;
    var formvalue = {
      username: username,
      email: email,
      password: password,
      todoList: [],
    };

    ApiService.createEmployee(formvalue).then((response) => {
      if (Object.keys(response).length > 0) {
        openModal();
        setTimeout(() => {
          closeModal();
          navigate("/");
        }, 2000);
      }
    });
  };
  return (
    <div
      className="h-screen justify-center flex items-center flex-col flex-wrap"
      id="main"
    >
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Account Created Successfully !!!
      </ReactModal>
      <div className="my-6 font-bold text-2xl">Sign Up</div>
      <form className="w-[30rem]" onSubmit={openaccount}>
        <input
          type="text"
          className="form-input px-4 py-3 w-full my-3"
          placeholder="Username"
          name="username"
          required
        />
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
            Already Have an Account? <Link to="/">Sign In</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
