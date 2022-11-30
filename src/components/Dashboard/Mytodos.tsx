import React from "react";

const Mytodos = (props:any) => {
    const {onCancel,onSave,ondelete,todoList,onchanges} = props;
    
  return (
      <div className="xl:w-[50rem] 2xl:w-[50rem] m-auto">
        <div className="md:grid xl:grid 2xl:grid md:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-10 my-2">
          <div className="col-span-1 text-center">
            <input
              type="checkbox"
              className="rounded-full border-none"
              id="chekbox"
              value={todoList.complete_status}
              defaultChecked={todoList.complete_status}
              onChange={()=>onchanges(todoList.complete_status,todoList._id)}
            />
          </div>
          <div className="col-span-8" id="editmode">
            <div className="">Time: {todoList.time}</div>
            <input
              type="text"
              name="worktitle"
              id="worktitle"
              className="w-full h-6 border-none bg-transparent text-white"
              placeholder={todoList.title}
              readOnly
            />
            <textarea
              name="workdescription"
              id="workdescription"
              className="w-full h-11 border-none bg-transparent text-white"
              placeholder={todoList.description}
              readOnly
            ></textarea>
            <div className="text-right">
              <input
                type="datetime-local"
                name="workdate"
                id="workdate"
                className="bg-transparent text-white hidden"
              />
              <button
                className="text-black bg-gray-300 px-3 py-1 mx-2 rounded hidden"
                id="cancelbtn"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="text-white bg-red-600 px-3 py-1 mx-2 rounded hidden"
                id="savebtn"
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </div>
          <div className="col-span-1 text-center">
            <button className="" id="morefuncbtn" onClick={()=>ondelete(todoList._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Mytodos;
