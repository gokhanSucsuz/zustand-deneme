import React, { useEffect } from 'react';
import useStore from './store'; // Store dosyanızın yolunu belirtin
import ProductDetail from './ProductDetail';

const Product = () => {
    const { products, loading, error, getProducts } = useStore();

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!products) {
        return <div>No products found.</div>;
    }

    return (
        <div>
            {products.map(product => (
                <ProductDetail key={product.id} productId={product.id} />
            ))}
        </div>
    );
};

export default Product;
