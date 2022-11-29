import React from "react";
import { useNavigate } from "react-router-dom";
import apiservice from "../../services/api.service";

const ForgetPassword = () => {
  const navigate = useNavigate();
  let ApiService = new apiservice();

  const checkPasswords = () => {
    console.log();
  };

  const changepassword = (e: any) => {
    e.preventDefault();
    var email = e.target[0].value;
    var password = e.target[1].value;
    var cpassword = e.target[2].value;
    if (password === cpassword) {
      var formvalue = {
        email: email,
        password: password,
        cpassword: cpassword,
        todoList: [],
      };
      ApiService.forgetPassword(formvalue);
      navigate("/");
    } else {
      window.alert("password did not match");
    }
  };
  return (
    <div className="h-screen justify-center flex items-center flex-col flex-wrap">
      <div className="my-6 font-bold text-2xl">Forgot Password</div>
      <form className="w-[30rem]" onSubmit={changepassword}>
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
        <input
          type="password"
          className="form-input px-4 py-3 w-full my-3"
          placeholder="Retype Password"
          name="cpassword"
          required
          onChange={checkPasswords}
        />
        <div className="flex items-center">
          <div className="w-full">
            <input type="submit" className="form-input px-4 py-3 my-3" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ForgetPassword;
