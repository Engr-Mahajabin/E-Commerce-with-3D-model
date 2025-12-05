import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/Product";

const Products = () => {
    return (
        <section className="active-product-area section_gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>Latest Products</h1>
                            <p>Checkout our trending items.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {products.map((pd) => (
                        <div key={pd.id} className="col-lg-3 col-md-6">
                            <div className="single-product">
                                <img className="img-fluid" src={pd.img} alt="" />
                                <div className="product-details">
                                    <h6>{pd.title}</h6>
                                    <div className="price">
                                        <h6>{pd.price}</h6>
                                        <h6 className="l-through">{pd.oldPrice}</h6>
                                    </div>

                                    <div className="prd-bottom">

                                        <Link to={`/product/${pd.id}`} className="social-info">
                                            <span className="lnr lnr-move"></span>
                                            <p className="hover-text">view more</p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Products;
