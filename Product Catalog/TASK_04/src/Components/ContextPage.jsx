import React, { useEffect, useState, useContext, createContext } from "react";

//This is Jay Vekariya
//I'm Created here Context API so we can avoid Prop Drilling Problem..
const PostContext = createContext();
export const UseAuth = () => useContext(PostContext);

const ContextPage = ({ children }) => {
  // // Don't forget to pass children as a prop
  const [WholeProduct, setWholeProduct] = useState([]);
  const [AddtoCard, setAddtoCard] = useState([]);
  const [cardDetail, setCardDetail] = useState([]);
  const [isNotification, setNotification] = useState(0);
  const [CompareItems, setCompareItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [sortCard, setsortCard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //I'm Fetching here some Products from API, so here no need to create a JSON Server & It's time saving also..
  const dataFetcing = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((Data) => setWholeProduct(Data))
      .catch((error) => setWholeProduct("Action  Failed"));
  };

  useEffect(() => {
    dataFetcing();
  }, []);

  const searchCard = (searchValue) => {
    const filteredValue = WholeProduct.filter((search) => {
      return `${search.title.toLowerCase()} ${search.category.toLowerCase()}`.includes(
        searchValue.toLowerCase()
      );
    });
    setSearchValue(filteredValue);
    console.log("filteredValue", filteredValue);
  };
  return (
    <PostContext.Provider
      value={{
        WholeProduct: searchValue.length > 0 ? searchValue : WholeProduct,
        setWholeProduct,
        AddtoCard,
        setAddtoCard,
        cardDetail,
        setCardDetail,
        isNotification,
        setNotification,
        CompareItems,
        setCompareItems,
        searchValue,
        setSearchValue,
        searchCard,
        sortCard,
        setsortCard,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default ContextPage;
