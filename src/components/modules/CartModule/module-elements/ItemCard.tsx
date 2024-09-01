'use client'

import { useCartContext } from "@/components/contexts/CartContext";
import { ProductType } from "@/components/contexts/type";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function ItemCard({item} : {item: ProductType}) {
    const { 
        addItemToCart, 
        deleteItemFromCart, 
        reduceQuantity, 
        cart } = useCartContext()
        
    const quantity = cart?.find(cartItem => cartItem.name == item.name)?.quantity ?? 0
    const handleAddToCart = () => {
        addItemToCart({
            name: item.name,
            price: item.price,
            image: item.image
        })
    };

    const handleReduceQuantity = () => {
        if (quantity > 1) {
            reduceQuantity(item.name)
        } else {
            handleRemoveFromCart()
        }
    }

    const handleRemoveFromCart = () => {
        deleteItemFromCart(item.name)
    };

  return (
    <div className="w-full bg-white rounded-xl p-7 flex justify-between">
        <div className="flex items-center gap-7">
            {/* <input type="checkbox" /> */}
            <div className="flex gap-5">
                <Image src={item.image} 
                alt="" width={720} height={720} className="w-24 h-24 object-cover rounded-md"/>
                <div className="flex flex-col font-semibold">
                    <p>{item.name}</p>
                    {/* <p className="font-normal">1 kg</p> */}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between items-end">
            <p className="font-semibold">Rp{item.price.toLocaleString('ID-id')}</p>
            <div className="flex items-center gap-3">
                <Trash2 onClick={handleRemoveFromCart} size={20} className="hover:text-red-500 hover:cursor-pointer"/>
                <div onClick={handleReduceQuantity} 
                className="p-1 hover:bg-black/20 rounded-[50%] hover:cursor-pointer">
                    <Minus size={14}/>
                </div>
                {quantity}
                <div onClick={handleAddToCart} 
                className="p-1 hover:bg-black/20 rounded-[50%] hover:cursor-pointer">
                    <Plus size={14}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard;
