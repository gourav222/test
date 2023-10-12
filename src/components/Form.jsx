import React, { useState } from "react";
import "./Form.css";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = () => {
    // console.log("@@@@@@@@@", {
    //   name,
    //   email,
    //   price,
    //   quantity,
    //   city,
    //   state,
    //   zipCode,
    // });

    let localStorageData = JSON.parse(localStorage.getItem("product"));

    if (localStorageData) {
      localStorageData.push({
        name,
        email,
        price,
        quantity,
        city,
        state,
        zipCode,
      });
    } else {
      localStorageData = [
        {
          name,
          email,
          price,
          quantity,
          city,
          state,
          zipCode,
        },
      ];
    }
    localStorage.setItem("product", JSON.stringify(localStorageData));
    setCity("");
    setEmail("");
    setName("");
    setPrice("");
    setState("");
    setZipCode("");
    setQuantity("");
  };
  return (
    <div className="form">
      <button
        className="productButton"
        onClick={() => {
          <ProductDetails />;
        }}
      >
        <Link to={"/product"}>Product Details</Link>
      </button>
      <div className="form-1">
        <div className="nameEmail">
          <label htmlFor="product name">Product Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required={true}
            placeholder="Product Name"
          />
        </div>

        <div className="nameEmail">
          <label htmlFor="product name">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required={true}
            placeholder="Email"
          />
        </div>

        <div className="priceQuantity">
          <div>
            <label htmlFor="Price">Price</label>
            <br />

            <input
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required={true}
              placeholder="Price"
            />
          </div>

          <div>
            <label htmlFor="Quantity">Qunatity</label>
            <br />

            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              required={true}
              placeholder="Quantity"
            />
          </div>
        </div>

        <div className="cityState">
          <div>
            <label htmlFor="City">City</label>
            <br />

            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              required={true}
              placeholder="City"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <br />
            <input
              type="text"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              required={true}
              placeholder="State"
            />
          </div>
          <div>
            <label htmlFor="Zip Code">Zip Code</label>
            <br />

            <input
              type="number"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
              required
              placeholder="0000"
            />
          </div>
        </div>

        <div className="placeOrder">
          <button onClick={handleSubmit}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
