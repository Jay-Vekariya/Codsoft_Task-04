import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { UseAuth } from "./ContextPage";
import Quantity from "./Quantity";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const AddtoCart = () => {
  const {
    AddtoCard,
    setAddtoCard,
    isNotification,
    setNotification,
    setCompareItems,
    totalPrice,
    setTotalPrice,
  } = UseAuth();

  useEffect(() => {
    // Calculate total price whenever AddtoCard changes
    const newTotalPrice = AddtoCard.reduce(
      (acc, item) => acc + item.price * 30 * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [AddtoCard]);

  const hadleDeleteItem = (id) => {
    setAddtoCard((listofcard) =>
      listofcard.filter((deletedItem) => deletedItem.id !== id)
    );
    console.log("Item Deleted...");
  };

  const AddCard = (listofcard) => (
    <>
      <div className="lg:mb-4 lg:flex shadow-lg rounded-lg lg:p-9 lg:h-[340px] lg:justify-center  bg-white ">
        <div className="lg:w-[200px] lg:flex lg:justify-center">
          <img
            className="lg:h-[200px] lg:w-[165px] p-4"
            src={listofcard.image}
            alt="Images"
          />
        </div>
        <div className="lg:flex lg:flex-col font-serif lg:w-[880px] lg:gap-4">
          <div className="font-semibold uppercase text-indigo-500">
            {listofcard.category}
          </div>
          <div className=" font-semibold inline">{listofcard.title}</div>
          <div>{listofcard.description}</div>
          <div className="lg:flex font-bold lg:gap-4 lg:items-center">
            <div>
              <Quantity listofcard={listofcard} />
            </div>
            <div>Quantity: {listofcard.quantity}</div>
            <div className="text-green-700">
              &#x20B9;{(listofcard.price * listofcard.quantity * 30).toFixed(2)}
            </div>
            <button
              onClick={() => {
                hadleDeleteItem(listofcard.id);
                setNotification(Number(isNotification - 1));
                setCompareItems([]);
              }}
              className="border-0 p-2 bg-red-600 font-serif w-[100px] rounded-md text-white"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      {isNotification === 0 ? (
        <>
          <NavLink to="/">
            <div className="p-[400px] hover:underline lg:flex font-serif font-bold text-[50px] lg:place-content-center bg-gradient-to-tr from-sky-600 via-yellow-200 to-emerald-700">
              Your Card is Empty..!!
            </div>
          </NavLink>
        </>
      ) : (
        <>
          <div className="p-44 bg-gradient-to-tr from-sky-600 via-yellow-200 to-emerald-700">
            <div className="lg:p-3 lg:text-center font-serif text-[40px]">
              Your Subtotal: &#x20B9;{totalPrice}
            </div>
            {AddtoCard.map((listofcard) => AddCard(listofcard))}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default AddtoCart;
