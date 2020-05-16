import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  {title}
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product img" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>model : {title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h5>
                  <h6 className="text-blue">
                    <strong>
                      price : <span>GHS </span>
                      {price}
                    </strong>
                  </h6>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product:{" "}
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer> back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* end of product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
