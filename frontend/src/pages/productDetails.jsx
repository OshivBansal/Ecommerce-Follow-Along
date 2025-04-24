import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";
import Nav from "../components/nav";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useSelector } from "react-redux";

export default function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const email = useSelector((state) => state.user.email);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(`/api/v2/product/product/${id}`);
				console.log("Fetched product:", response.data.product);
				setProduct(response.data.product);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching product:", err);
				setError(err);
				setLoading(false);
			}
		};
		fetchProduct();
	}, [id]);

	// Log updated product state whenever it changes
	useEffect(() => {
		if (product !== null) {
			console.log("Updated product state:", product);
			console.log("Product name:", product.name);
		}
	}, [product]);

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};
	const handleDecrement = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const addToCart = async () => {
		if (!email) {
			alert("No user email found! Please login.");
			return;
		}
		try {
			const response = await axios.post("/api/v2/product/cart", {
				userId: email,
				productId: id,
				quantity,
			});
			console.log("Added to cart:", response.data);
			alert("Item added to cart!");
		} catch (err) {
			console.error("Error adding to cart:", err);
		}
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-xl">Loading...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-red-500 text-xl">Error: {error.message}</div>
			</div>
		);
	}

	if (!product) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-gray-500 text-xl">No product found.</div>
			</div>
		);
	}

	return (
		<>
			<Nav />
			<div className="container mx-auto p-6">
				<div className="bg-white drop-shadow-lg rounded-lg overflow-hidden">
					<div className="md:flex select-none">
						{/* Image Section */}
						<div className="w-full bsm:w-2/3 md:w-1/3 rounded-lg">
							{product.images && product.images.length > 0 ? (
								<img
									src={`http://localhost:8000${product.images[0]}`}
									alt={product.name}
									className="w-full h-full object-contain bsm:object-cover"
									style={{ maxHeight: "500px" }}
								/>
							) : (
								<div className="w-full h-64 bg-gray-200 flex items-center justify-center">
									No Image Available
								</div>
							)}
						</div>
						{/* Info */}
						<div className="md:w-1/2 p-6">
							<h1 className="text-3xl font-semibold mb-4 text-gray-800">
								{product.name}
							</h1>
							<div className="mb-4">
								<h2 className="text-xl font-medium text-gray-700">Description</h2>
								<p className="text-gray-600 mt-2">{product.description}</p>
							</div>
							<div className="flex flex-wrap gap-x-5 my-2">
								<div>
									<h2 className="text-xl font-medium text-gray-700">Category</h2>
									<p className="text-gray-600 mt-2">{product.category}</p>
								</div>
								{product.tags && product.tags.length > 0 && (
									<div>
										<h2 className="text-xl font-medium text-gray-700">Tags</h2>
										<div className="mt-2 flex flex-wrap">
											{product.tags.map((tag, index) => (
												<span
													key={index}
													className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
							<div className="flex flex-wrap gap-x-5 mt-3 mb-5 items-start">
								<div className="flex flex-col gap-y-3">
									<h2 className="text-xl font-medium text-gray-700">Price</h2>
									<p className="text-gray-600 text-lg font-semibold">${product.price}</p>
								</div>
								{/* Quantity */}
								<div className="flex flex-col gap-y-3">
									<div className="text-xl font-medium text-gray-700">Quantity</div>
									<div className="flex flex-row items-center gap-x-2">
										<div
											onClick={handleIncrement}
											className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
										>
											<IoIosAdd />
										</div>
										<div className="px-5 py-1 text-center bg-gray-100 rounded-xl pointer-events-none">
											{quantity}
										</div>
										<div
											onClick={handleDecrement}
											className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl cursor-pointer"
										>
											<IoIosRemove />
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-wrap gap-x-5 my-3">
								<button
									className="bg-black text-white px-5 py-2 rounded-full hover:bg-neutral-800 hover:-translate-y-1.5 active:translate-y-0 transition-transform duration-200 ease-in-out"
									onClick={addToCart}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav";
import { useSelector } from "react-redux"; // Import useSelector

const CreateAddress = () => {
    const navigate = useNavigate();

    // Get email from Redux state
    const email = useSelector((state) => state.user.email);

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [addressType, setAddressType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            country,
            city,
            address1,
            address2,
            zipCode,
            addressType,
            email // Use the email from Redux
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/api/v2/user/add-address",
                addressData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (response.status === 201) {
                alert("Address added successfully!");
                navigate("/profile");
            }
        } catch (err) {
            console.error("Error adding address:", err);
            alert("Failed to add address. Please check the data and try again.");
        }
    };

    return (
        <>
            <Nav />
            <div className="w-[90%] max-w-[500px] bg-white shadow h-auto rounded-[4px] p-4 mx-auto">
                <h5 className="text-[24px] font-semibold text-center">Add Address</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="pb-1 block">Country</label>
                        <input
                            type="text"
                            value={country}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Enter country"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">City</label>
                        <input
                            type="text"
                            value={city}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Address 1</label>
                        <input
                            type="text"
                            value={address1}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setAddress1(e.target.value)}
                            placeholder="Enter address 1"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Address 2</label>
                        <input
                            type="text"
                            value={address2}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Enter address 2"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Zip Code</label>
                        <input
                            type="number"
                            value={zipCode}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="Enter zip code"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Address Type</label>
                        <input
                            type="text"
                            value={addressType}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setAddressType(e.target.value)}
                            placeholder="Enter address type"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
                    >
                        Add Address
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateAddress;
