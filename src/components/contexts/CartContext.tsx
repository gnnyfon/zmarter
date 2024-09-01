"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductType } from "./type";

type CartContextType = {
    cart: ProductType[]
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>
    addItemToCart: (newItem: ProductType) => void
    checkoutCart: () => void
    reduceQuantity: (itemName: string) => void
    deleteItemFromCart: (itemName: string) => void
}

const CartContext = createContext({} as CartContextType);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const defaultCart: ProductType[] = [];
    
    const [cart, setCart] = useState<ProductType[]>(defaultCart);

    useEffect(() => {
        setCartToState();
    }, []);

    const setCartToState = () => {
        const storedCartItems = localStorage.getItem("keranjang");
        if (storedCartItems) {
            setCart(JSON.parse(storedCartItems) as ProductType[]);
        } else {
            setCart(defaultCart);
        }
    };
    

    const addItemToCart = async (newItem : ProductType) => {
        // console.log(newItem)
    const existingItem = cart?.find(
    (item) => item.name === newItem.name
    );

    let newCartItems;

    if (existingItem) {
        existingItem.quantity! += 1
        newCartItems = cart?.map((item) =>
            item.name === newItem.name ? existingItem : item
        );
    } else {
        newItem.quantity = 1
        newCartItems = [...(cart || []), newItem];
    }

    const updatedCart = newCartItems;
    localStorage.setItem("keranjang", JSON.stringify(updatedCart));
    setCartToState();
    };

    const reduceQuantity = (itemName: string) => {
        const existingItem = cart?.find(
            (item) => item.name === itemName
            );

        if (!existingItem) return;

        let newCartItems;

        if (existingItem.quantity! > 1) {
            existingItem.quantity! -= 1
            newCartItems = cart?.map((item) =>
                item.name === existingItem.name ? existingItem : item
            );
        } else {
            newCartItems = cart?.filter((item) => item.name !== existingItem.name);
        }

        const updatedCart = newCartItems;
        localStorage.setItem("keranjang", JSON.stringify(updatedCart));
        setCartToState();
    };

    const checkoutCart = () => {
        localStorage.setItem("keranjang", JSON.stringify([]));
        setCartToState();
    }

    const deleteItemFromCart = (itemName: string) => {
        const newCartItems = cart?.filter((i) => i.name != itemName);
        console.log({newCartItems})

        const updatedCart = newCartItems;
        localStorage.setItem("keranjang", JSON.stringify(updatedCart));
        setCartToState();
    }
  
    return (
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addItemToCart,
          checkoutCart,
          reduceQuantity,
          deleteItemFromCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  