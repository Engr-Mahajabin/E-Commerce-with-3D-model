import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Product";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [show3D, setShow3D] = useState(false);
    const [quantity, setQuantity] = useState(1);

    if (!product) return <div>Product not found!</div>;

    return (
        <div className="container section_gap" style={{ marginTop: "50px" }}>
            <div className="row">
                {/* LEFT SIDE IMAGE / 3D MODEL */}
                <div className="col-lg-6">
                    <div
                        style={{
                            background: "#8a93b9",
                            padding: "40px",
                            borderRadius: "10px",
                        }}
                    >
                        {show3D ? (
                            <model-viewer
                                src={product.model}
                                alt={product.title}
                                auto-rotate
                                camera-controls
                                style={{ width: "100%", height: "450px" }}
                            />
                        ) : (
                            <img
                                src={product.img}         // dynamic image
                                alt={product.title}
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE DETAILS */}
                <div className="col-lg-6">
                    <h2>{product.title}</h2>
                    <h3 style={{ color: "orange", fontWeight: "700" }}>{product.price}</h3>
                    <p><b>Category</b>: {product.category || "General"}</p>
                    <p><b>Availability</b>: {product.stock || "In Stock"}</p>

                    <hr />

                    <p style={{ lineHeight: "26px" }}>
                        {product.description || "No description available."}
                    </p>

                    <div className="d-flex align-items-center mt-4">
                        <span style={{ marginRight: "10px", fontWeight: "500" }}>Quantity:</span>
                        <select
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            style={{
                                padding: "8px 12px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        >
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                        <button
                            style={{
                                background: "#ff9f1c",
                                color: "#fff",
                                border: "none",
                                padding: "12px 35px",
                                borderRadius: "5px",
                                fontWeight: "600",
                            }}
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => setShow3D(!show3D)}
                            style={{
                                background: "#8a93b9",
                                color: "#fff",
                                border: "none",
                                padding: "12px 25px",
                                borderRadius: "5px",
                                fontWeight: "600",
                                marginLeft: "20px",
                            }}
                        >
                            {show3D ? "View Image" : "3D View"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
