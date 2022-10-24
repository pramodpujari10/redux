import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action/index";

function Cart() {
  const products = useSelector((state) => state.handleCart);
  console.log("state", products);
  const dispatch = useDispatch();
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead-fw-bold">
                {product.qty} X ${product.price}= ${product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => dispatch(delCart(product))}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark "
                onClick={() => dispatch(addCart(product))}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
