// src/ProductDetail.jsx
import React, { useEffect } from 'react';
import useStore from './store'; // Store dosyanızın yolunu belirtin

const ProductDetail = ({ productId }) => {
    const { productDetail, loading, error, getProductDetail } = useStore();

    console.log(productId)
    useEffect(() => {
        getProductDetail(productId);
    }, [productId, getProductDetail]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!productDetail) {
        return <div>No product found.</div>;
    }

    return (
        <div>
            <h1>{productDetail.id}</h1>
            <p>{productDetail.title}</p>
            <p>Price: ${productDetail.body}</p>
        </div>
    );
};

export default ProductDetail;
