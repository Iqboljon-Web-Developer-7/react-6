import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UniModal from "../modal/Modal";
import { remove, update } from "@/redux/slices/cart-slice";

const LoadCards = () => {
  const dispatch = useDispatch();
  const [cardId, setCardId] = useState("");
  const cartList = useSelector((state) => state.cart.value);
  const [open, setOpen] = useState(false);
  const handleModal = (e) => {
    if (e.target.classList.contains("form-wrapper")) {
      setOpen(false);
    }
  };
  let id = 0;
  let cardInfo = {
    id: "",
    fname: "",
    lname: "",
    phone: "",
  };

  const handleInput = (e) => {
    e = e.target;
    cardInfo[e.name] = e.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(id);
  };

  const cart = cartList.map((item, idx) => {
    return (
      <div key={idx} className="py-2 px-3 border">
        <div className="fullName flex items-center gap-2">
          <h2 className="text-xl">{item.lname}</h2>
          <h2 className="text-xl">{item.fname}</h2>
        </div>
        <p className="text-sm mt-1">
          <span>Phone:</span> {item.phone}
        </p>
        <div className="btns flex justify-between items-center mt-5">
          <button
            onClick={() => dispatch(remove({ id: item.id }))}
            className="py-2 px-4 rounded-full bg-red-400 hover:bg-red-500 text-sm"
          >
            Delete
          </button>

          <UniModal title={"Update"} open={open} setOpen={setOpen}>
            <div
              onClick={(e) => handleModal(e)}
              className="form-wrapper w-full h-full min-h-screen flex items-center justify-center flex-col"
            >
              <h2 className="text-2xl mb-4 text-green-100">Add Card</h2>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  setCardId(item.id);
                }}
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
      </div>
    );
  });

  return (
    <div>
      <h2 className="text-center text-3xl text-green-400 my-7">Your Carts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cart}
      </div>
    </div>
  );
};

export default LoadCards;
