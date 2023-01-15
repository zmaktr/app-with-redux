import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productsActions";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?limit=25")
      .catch((error) => {
        console.assert("fetch error", error);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="ui grid container">
      <h2 style={{ width: "100%", marginTop: "30px" }}>ProductListing</h2>
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
