import React from "react";
import { useParams } from "react-router-dom";


function ProductDetail({Products }) {
const params = useParams();

  return (
    <div>
      {" "}
      <h4 className="Title">{Products[params.id - 1].title}</h4>
      <img className="ProductImage" src={Products[params.id - 1].image} />
      <p className="Price">Price:{Products[params.id - 1].price}</p>
      <p className="Price">category:{Products[params.id - 1].category}</p>
      <p className="Price">descript:{Products[params.id -1].description}</p>
    </div>
  );
}

export default ProductDetail;
