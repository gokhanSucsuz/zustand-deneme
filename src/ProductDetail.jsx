import React, { useEffect } from 'react';
import useStore from './store'; // Store dosyanızın yolunu belirtin

const ProductDetail = ({ productId }) => {
    const { productDetail, loading, error, getProductDetail } = useStore();

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
            <h1>{productDetail.title}</h1>
            <p>{productDetail.body}</p>
        </div>
    );
};

export default ProductDetail;
