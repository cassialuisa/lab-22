import create from "zustand";
import apiClient from "../../Services/apiClient";
import { ProductProps } from "../Product/Product.types";

type useProductsType = {
    products: ProductProps[];
    setProducts: () => void;
}

const useProducts = create<useProductsType>(set => ({
    products: [],
    setProducts: async function buscarProdutos() {
        const response = await apiClient.get<ProductProps[]>(
            `/products`
        );
        set({ products: response.data });
    },

}));
