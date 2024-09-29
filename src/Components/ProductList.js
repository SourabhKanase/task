// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
    console.log("productss", products);
    return (
        <div className='flex gap-2 flex-wrap'>
            {products.map((product) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 border border-gray-200">
                <img
                    className="w-full h-64 object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.title}</div>
                    <p className="text-gray-700 text-base mb-2">{product.description}</p>
                    
                    <div className='flex gap-2 items-center'>

                        <p className="text-gray-900 text-lg font-semibold mb-2">
                            ${product.price} <span className="text-xs text-gray-500">({product.discountPercentage}% off)</span>
                        </p>
                        <p className={`text-sm ${product.availabilityStatus === "In Stock" ? 'text-green-600' : 'text-red-600'}`}>
                            {product.availabilityStatus}
                        </p>
        
                        <div className="flex items-center mt-2 mb-4">
                            <span className="text-yellow-500">⭐ {product.rating}</span>
                        </div>
                            
                    </div>
    
                    <div className="mb-4">
                        <span className="font-semibold">Category: </span>
                        <span className="text-gray-600">{product.category}</span>
                    </div>
    
                    <div className="mb-4">
                        <span className="font-semibold">Tags: </span>
                        <span className="text-gray-600">
                            {product.tags.join(', ')}
                        </span>
                    </div>
    
                    <div className="mb-4">
                        <span className="font-semibold">Stock: </span>
                        <span className="text-gray-600">{product.stock} units</span>
                    </div>
    
                    {/* <div className="mb-4">
                        <span className="font-semibold">SKU: </span>
                        <span className="text-gray-600">{product.sku}</span>
                    </div> */}
    
                    <div className="mb-4">
                        <span className="font-semibold">Dimensions: </span>
                        <span className="text-gray-600">
                            {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} inches
                        </span>
                    </div>
    
                    <div className="mb-4">
                        <span className="font-semibold">Warranty: </span>
                        <span className="text-gray-600">{product.warrantyInformation}</span>
                    </div>
    
                    <div className="mb-4">
                        <span className="font-semibold">Shipping: </span>
                        <span className="text-gray-600">{product.shippingInformation}</span>
                    </div>
    
                    <div className="mb-4">
                        <span className="font-semibold">Return Policy: </span>
                        <span className="text-gray-600">{product.returnPolicy}</span>
                    </div>
                </div>
    
                <div className="px-6 py-4">
                    <h4 className="font-bold text-lg mb-2">Customer Reviews</h4>
                    <ul className="list-none">
                        {product.reviews.map((review, index) => (
                            <li key={index} className="border-t border-gray-200 pt-2 mt-2">
                                <p className="text-sm text-gray-700">{review.comment}</p>
                                <p className="text-xs text-gray-500">- {review.reviewerName}, {new Date(review.date).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            ))}
        </div>
    );
};

export default ProductList;
