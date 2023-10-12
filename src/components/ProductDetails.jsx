import React from "react";
import "./ProductDetails.css";
const ProductDetails = () => {
  const productData = JSON.parse(localStorage.getItem("product"));

  console.log("@@@@@",productData)

  const removeItems = (index) => {
    console.log(index)
    let newData = productData.map((items, i) => {
      if (i != index) {
        return items;
      }
    });
    localStorage.setItem("product", JSON.stringify(newData));
  };

  return (
    <div>
      <div>
        <table className="table-data">
          <tr>  
            <th>Product Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>

          {productData &&
            productData.map((items, index) => {
              return (
                <tr className="item-table" key={index}>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.price}</td>
                  <td>{items.quantity}</td>
                  <td>{items.city}</td>
                  <td>{items.state}</td>
                  <td>{items.zipCode}</td>
                  <span
                    
                  >
                    Delete
                  </span>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
