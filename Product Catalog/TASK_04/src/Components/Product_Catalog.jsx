import { UseAuth } from "./ContextPage";
import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Product_Catalog() {
  const navigate = useNavigate();
  const {
    WholeProduct,
    AddtoCard,
    setAddtoCard,
    setCardDetail,
    CompareItems,
    isNotification,
    setNotification,
    setCompareItems,
  } = UseAuth();

  const handleCardProduct = (data) => {
    if (!CompareItems.includes(data)) {
      setAddtoCard([...AddtoCard, { ...data, quantity: 1 }]);
      setCompareItems([...CompareItems, data]);
      setNotification(isNotification + 1);
    } else {
      alert("Items is already in your card..!!");
    }
  };

  const DisplayProduct = (data) => (
    <div className="">
      <div
        onClick={() => setCardDetail([data])}
        className="lg:mb-4 lg:flex shadow-lg rounded-lg lg:p-9 lg:h-[325px] lg:justify-center bg-white"
      >
        <div className="lg:w-[200px] lg:flex lg:justify-center">
          <img
            className="lg:h-[200px] lg:w-[165px] p-4"
            src={data.image}
            alt="Images"
          />
        </div>
        <div className="lg:flex lg:flex-col font-serif lg:w-[880px]   lg:gap-4 lg:justify-center lg:text-center">
          <div className="font-semibold uppercase text-indigo-500">
            {data.category}
          </div>
          <div className=" font-semibold inline">{data.title}</div>
          <div>
            <ReactReadMoreReadLess
              charLimit={100}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="text-blue-500"
              readLessClassName="text-red-500"
            >
              {data.description}
            </ReactReadMoreReadLess>
          </div>
          <div className="lg:flex lg:gap-4 lg:justify-center lg:text-center">
            <button
              onClick={(e) => {
                navigate("addtocard");
                e.stopPropagation();
                handleCardProduct(data);
              }}
              className="border-0 p-2 bg-yellow-600 font-serif lg:w-[140px] lg:h-[40px] rounded-md text-white"
            >
              Add to Card
            </button>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:text-center lg:gap-y-6 text-lg font-serif">
          <div className="text-green-900">
            &#x20B9;{(data.price * 30).toFixed(2)}
          </div>
          <div className="mx-5 text-yellow-500">
            Rating: {data.rating.rate}&#11088;
          </div>
          <div className="mx-5 text-black md:mt-2">
            Count:{data.rating.count}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="p-36 bg-gradient-to-tr from-sky-600 via-pink-300 to-sky-700 ">
        {WholeProduct.map((data) => DisplayProduct(data))}
      </div>
      <Footer />
    </>
  );
}

export default Product_Catalog;
