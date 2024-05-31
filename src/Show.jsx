import React, { useEffect } from 'react';
import useStore from './store'; // Store dosyanızın yolunu belirtin

const ProductDetail = ({ productId }) => {

    const { productDetail, loading, error, getProductDetail } = useStore();

    useEffect(() => {
        getProducts(productId)
    }, [getProductDetail])

    return (
        <div>
            <h1>{productDetail.title}</h1>
            <p>{productDetail.body}</p>
        </div>
    );
};

export default ProductDetail;
