import React, { useState, useEffect } from "react";
import "./inputpage.css";
import CustomInput from "./CustomInput";
import CustomBtn from "../profile/CustomBtn";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../states/LoginState.ts";
import Lottie from "lottie-react";
import Loader2 from "../../assets/Lottie/Loader2.json";

// InputPage component
const InputPage = ({ isAuthenticated, defaultHeaders }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [items, setItems] = useState(null); // State to store items
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch user ID from local storage
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);
  const userId = userData._id;

  // Check if user is logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  useEffect(() => {
    console.log("Calling");
    const fetchItems = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch(`/api/users/${userId}/products`, {
          method: "GET",
          headers: {
            ...defaultHeaders,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    const timer = setTimeout(fetchItems, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleInputChange = (index, value) => {
    const updatedItems = items.map((item) =>
      item.index === index ? { ...item, productName: value } : item
    );
    setItems(updatedItems);
  };

  const handleCheckboxChange = (index, checked) => {
    const updatedItems = items.map((item) =>
      item.index === index ? { ...item, donatable: checked } : item
    );
    setItems(updatedItems);
  };

  const handleDateChange = (index, value) => {
    const updatedItems = items.map((item) =>
      item.index === index ? { ...item, expdate: value } : item
    );
    setItems(updatedItems);
  };

  const handleUpdate = async () => {
    console.log("UPDATED ITEMS: ", items);
    try {
      const res = await fetch(`/api/users/${userId}/products`, {
        method: "PUT",
        ...defaultHeaders,
        body: JSON.stringify(items),
      });
      if (!res.ok) {
        throw new Error("Failed to update items");
      }
      console.log(res);
      navigate("/main");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="input_page">
      <h2>Edit Your Product Data</h2>
      <div className="input_page_desc">
        Update your product name, expiration data and check if your product is
        donable!
      </div>
      {loading ? ( // Render loader if loading is true
        <div>
          <Lottie animationData={Loader2} style={{ marginTop: "4rem" }} />
        </div>
      ) : (
        <div className="inputpage_container">
          {items.map((item) => (
            <CustomInput
              key={item.index}
              index={item.index}
              product={item.productName}
              isDonatable={item.donatable}
              onInputChange={handleInputChange}
              onCheckboxChange={handleCheckboxChange}
              onDateChange={handleDateChange}
            />
          ))}
        </div>
      )}
      <div className="inputpage_btn_container">
        <CustomBtn text={"Update Food Data"} onClick={handleUpdate} />
      </div>
    </div>
  );
};

export default InputPage;
