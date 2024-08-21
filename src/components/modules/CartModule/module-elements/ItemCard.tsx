'use client'

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function ItemCard() {
    const [quantity, setQuantity] = useState(1)
  return (
    <div className="w-full bg-white rounded-xl p-4 flex justify-between">
        <div className="flex items-center gap-7">
            <input type="checkbox" />
            <div className="flex gap-5">
                <Image src={'/images/jagung.png'} 
                alt="" width={720} height={720} className="w-24 h-24 object-cover rounded-md"/>
                <div className="flex flex-col font-semibold">
                    <p>Jagung</p>
                    <p className="font-normal">1 kg</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between items-end">
            <p className="font-semibold">Rp20.000</p>
            <div className="flex items-center gap-3">
                <Trash2 size={20} className="hover:text-red-500 hover:cursor-pointer"/>
                <div onClick={()=> setQuantity(quantity == 1 ? quantity : quantity-1)} 
                className="p-1 hover:bg-black/20 rounded-[50%] hover:cursor-pointer">
                    <Minus size={14}/>
                </div>
                {quantity}
                <div onClick={()=> setQuantity(quantity+1)} 
                className="p-1 hover:bg-black/20 rounded-[50%] hover:cursor-pointer">
                    <Plus size={14}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard;
