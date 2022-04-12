import { useState } from "react";
import create from "zustand";
import { ProductProps } from "../Product/Product.types";

type CartProductProps = {
    product: ProductProps;
    quantity: number;
};

type UseCartProps = {
    cart: CartProductProps[];
    total: number;
    addItem: (newItem: ProductProps) => void;
    removeItem: (removeProduct: ProductProps) => void;
};

const useCart = create<UseCartProps>((set) => ({
    cart: [],
    total: 0,
    addItem: (newItem) => set(({ cart, total }) => {
        let isPresent = false;

        cart.forEach(item => {
            if (item.product.id === newItem.id) {
                isPresent = true;
                if (item.product.quantity >= item.quantity + 1) {
                    item.quantity++;
                    total += newItem.price;
                } else {
                    alert(`Quantidade escolhida é maior do que a quantidade disponível em estoque`);
                }
            }
        });
        
        if (isPresent) {
            return {
                cart: [...cart],
                total: total
            }
        } else {
            return {
                cart: [...cart, { product: newItem, quantity: 1 }],
                total: total += newItem.price
            }
            
        };
    }),

    removeItem: (removeProduct) => set(({ cart, total }) => {
        const indexProduct = cart.findIndex(item => item.product.id === removeProduct.id);

        if (indexProduct !== -1) {
            cart[indexProduct].quantity <= 1
                ? cart.splice(indexProduct, 1)
                : cart[indexProduct].quantity--;
        }

        // console.log(cart);
        return {
            cart: [...cart],
            total: indexProduct !== -1
                ? total - removeProduct.price
                : total,
        };
    }),

}));

export default useCart;
