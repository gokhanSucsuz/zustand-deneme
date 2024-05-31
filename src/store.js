// src/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
    products: null,
    productDetail: null,
    loading: false,
    error: null,
    getProducts: async () => {  // productId parametresi kaldırıldı
        set({ loading: true, error: null });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ products: data, loading: false, error: null });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    getProductDetail: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ productDetail: data, loading: false, error: null });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useStore;
