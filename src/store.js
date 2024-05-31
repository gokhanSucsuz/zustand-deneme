// src/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
    productDetail: null,
    loading: false,
    error: null,
    getProductDetail: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ productDetail: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useStore;
