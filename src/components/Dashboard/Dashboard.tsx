import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiservice from "../../services/api.service";
import Mytodos from "./Mytodos";

const Dashboard = () => {
  const navigate = useNavigate();
  let ApiService = new apiservice();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")!) || [];
  });
  var [todolists, settodolists] = useState([]);

  function sortlist() {
    todolists.sort((a: any, b: any) => {
      var e: any = new Date(a.time);
      var f: any = new Date(b.time);
      return e - f;
    });
  }
  const onEdit = () => {
    document.getElementById("chekbox")?.classList.add("hidden");
    document.getElementById("morefuncbtn")?.classList.add("hidden");
    document.getElementById("editbtn")?.classList.add("hidden");
    document.getElementById("editmode")?.classList.add("border-black");
    document.getElementById("editmode")?.classList.add("border-2");
    document.getElementById("cancelbtn")?.classList.remove("hidden");
    document.getElementById("savebtn")?.classList.remove("hidden");
    document.getElementById("workdate")?.classList.remove("hidden");
    document.getElementById("worktitle")?.removeAttribute("readOnly");
    document.getElementById("workdescription")?.removeAttribute("readOnly");
  };
  const onCancel = () => {
    document.getElementById("chekbox")?.classList.remove("hidden");
    document.getElementById("morefuncbtn")?.classList.remove("hidden");
    document.getElementById("editbtn")?.classList.remove("hidden");
    document.getElementById("editmode")?.classList.remove("border-black");
    document.getElementById("editmode")?.classList.remove("border-2");
    document.getElementById("cancelbtn")?.classList.add("hidden");
    document.getElementById("savebtn")?.classList.add("hidden");
    document.getElementById("workdate")?.classList.add("hidden");
    document.getElementById("worktitle")?.setAttribute("readOnly", "true");
    document
      .getElementById("workdescription")
      ?.setAttribute("readOnly", "true");
  };
  const fonCancel = () => {
    document.getElementById("addnewform")?.classList.add("hidden");
  };
  const onSave = () => {
    document.getElementById("chekbox")?.classList.remove("hidden");
    document.getElementById("morefuncbtn")?.classList.remove("hidden");
    document.getElementById("editbtn")?.classList.remove("hidden");
    document.getElementById("editmode")?.classList.remove("border-black");
    document.getElementById("editmode")?.classList.remove("border-2");
    document.getElementById("cancelbtn")?.classList.add("hidden");
    document.getElementById("savebtn")?.classList.add("hidden");
    document.getElementById("workdate")?.classList.add("hidden");
    document.getElementById("worktitle")?.setAttribute("readOnly", "true");
    document
      .getElementById("workdescription")
      ?.setAttribute("readOnly", "true");
  };
  const fonSave = () => {
    var a = (document.getElementById("fworktitle") as HTMLInputElement).value;
    var b = (document.getElementById("fworkdescription") as HTMLInputElement)
      .value;
    var c = (document.getElementById("fworkdate") as HTMLInputElement).value;
    if (c !== "") {
      var newtodo = {
        id: user._id,
        todolist: { title: a, description: b, time: c, complete_status: false },
      };
      ApiService.addTodoList(newtodo);
      (document.getElementById("fworktitle") as HTMLInputElement).value = "";
      (document.getElementById("fworkdescription") as HTMLInputElement).value =
        "";
      (document.getElementById("fworkdate") as HTMLInputElement).value = "";
      document.getElementById("addnewform")?.classList.add("hidden");
    }
  };
  const onAddnew = () => {
    document.getElementById("addnewform")?.classList.remove("hidden");
    document.getElementById("addnewform")?.classList.add("border-black");
    document.getElementById("addnewform")?.classList.add("border-2");
    document.getElementById("fcancelbtn")?.classList.remove("hidden");
    document.getElementById("fsavebtn")?.classList.remove("hidden");
    document.getElementById("fworkdate")?.classList.remove("hidden");
    document.getElementById("fworktitle")?.removeAttribute("readOnly");
    document.getElementById("fworkdescription")?.removeAttribute("readOnly");
  };
  const ondelete = (e: any) => {
    ApiService.delTodoList({ id: user._id, room_id: e });
  };
  const onchanges = (e: any,tdolist:any) => {
    ApiService.updateTodoList({ id: user._id, tdlist:tdolist, cmp_status: !e });
  };
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    navigate('/')
  };
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      var newName;
      ApiService.geTodoList({ email: user.email })
        .then((data) => {
          return data[0].todoList;
        })
        .then((result) => {
          newName = result;
          settodolists(newName);
        });
      sortlist();
    } else {
      navigate("/");
    }
  }, [todolists]);

  return (
    <div className="md:grid xl:grid 2xl:grid md:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10 h-screen">
      <div className="col-span-2 bg-red-300">
        <div>
          <h3 className="text-center my-5 font-bold text-[2rem]">Profile</h3>
          <div className="mx-6 my-4">{user.username}</div>
          <div className="mx-6 my-4">{user.email}</div>
          <div className="mx-6 my-4">
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
      </div>
      <div className="col-span-8 bg-red-400">
        <h3 className="text-center my-5 font-bold text-[2rem]">My Todo List</h3>
        <div className="overflow-y-auto h-96 border-red-600 border-l-2 border-b-2">
          {todolists.map((todoList: any) => {
            return (
              <Mytodos
                todoList={todoList}
                onEdit={onEdit}
                onAddnew={onAddnew}
                fonSave={fonSave}
                onSave={onSave}
                fonCancel={fonCancel}
                onCancel={onCancel}
                ondelete={ondelete}
                onchanges={onchanges}
                key={todoList._id}
              />
            );
          })}
        </div>
        <div className="xl:w-[50rem] 2xl:w-[50rem] m-auto text-right">
          <button className="bg-red-600 px-3 py-1 rounded" onClick={onAddnew}>
            Add New
          </button>
        </div>
        <div
          className="xl:w-[50rem] 2xl:w-[50rem] m-auto text-right hidden"
          id="addnewform"
        >
          <div className="xl:w-[50rem] 2xl:w-[50rem] m-auto">
            <div className="md:grid xl:grid 2xl:grid md:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10 my-2">
              <div className="col-span-10" id="feditmode">
                <input
                  type="text"
                  name="worktitle"
                  id="fworktitle"
                  className="w-full h-6 border-none bg-transparent text-white"
                  placeholder="Work Title"
                  readOnly
                />
                <textarea
                  name="workdescription"
                  id="fworkdescription"
                  className="w-full h-11 border-none bg-transparent text-white"
                  placeholder="Work Description"
                  readOnly
                ></textarea>
                <div className="text-right">
                  <input
                    type="datetime-local"
                    name="workdate"
                    id="fworkdate"
                    className="bg-transparent text-white hidden"
                    required
                  />
                  <button
                    className="text-black bg-gray-300 px-3 py-1 mx-2 rounded hidden"
                    id="fcancelbtn"
                    onClick={fonCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-red-600 px-3 py-1 mx-2 rounded hidden"
                    id="fsavebtn"
                    onClick={fonSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
