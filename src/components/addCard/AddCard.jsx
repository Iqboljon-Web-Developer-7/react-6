import React, { useRef, useState } from "react";

import UniModal from "../modal/Modal";
import { useDispatch } from "react-redux";
import { add } from "@/redux/slices/cart-slice";
import { v4 as uuid } from "uuid";

const AddCard = () => {
  const dispatch = useDispatch();
  let cardInfo = {
    id: "",
    fname: "",
    lname: "",
    phone: "",
  };

  const handleModal = (e) => {
    if (e.target.classList.contains("form-wrapper")) {
      setOpen(false);
    }
  };
  const handleInput = (e) => {
    e = e.target;
    cardInfo[e.name] = e.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add({ cart: { ...cardInfo, id: uuid() } }));
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper flex justify-between items-center">
      <h2>Add Card </h2>
      <UniModal open={open} setOpen={setOpen} title={"Add Cart"}>
        <div
          onClick={(e) => handleModal(e)}
          className="form-wrapper w-full h-full min-h-screen flex items-center justify-center flex-col"
        >
          <h2 className="text-2xl mb-4 text-green-100">Add Card</h2>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-green-200 p-4 rounded-md"
          >
            <div className="flex flex-col">
              <label htmlFor="fname" className="mr-3 grow-[1]">
                Firstname:
              </label>
              <input
                type="text"
                id="title"
                name="fname"
                className="grow-[3]"
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="lname" className="mr-3 grow-[1]">
                Lastname:{" "}
              </label>
              <input
                onChange={(e) => handleInput(e)}
                name="lname"
                id="lname"
                className="grow-[3]"
              ></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mr-3 grow-[1]">
                Phone:{" "}
              </label>
              <input
                type="number"
                onChange={(e) => handleInput(e)}
                name="phone"
                id="phone"
                className="grow-[3]"
              ></input>
            </div>
            <button className="p-1 mt-5 w-full bg-orange-500 text-base rounded-full">
              Add{" "}
            </button>
          </form>
        </div>
      </UniModal>
    </div>
  );
};

export default AddCard;
