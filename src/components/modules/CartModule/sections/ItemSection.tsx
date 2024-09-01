'use client'
import React from "react";
import ItemCard from "../module-elements/ItemCard";
import { useCartContext } from "@/components/contexts/CartContext";
import Link from "next/link";
import Image from "next/image";

function ItemSection() {
    const {cart} = useCartContext()

    if ( cart.length == 0 ) return (
        <div className="w-full my-16 flex flex-col justify-center items-center gap-5">
            <Image src={'/images/empty-cart.png'} alt="Empty Cart" width={720} height={720}
            className="w-1/4" />
            Keranjang anda masih kosong
            <Link className="gradient-leaf hover:shadow-[0_0_10px_1px_rgba(171,203,146,1)] p-2 rounded-md text-white font-semibold " href='/bahan'>
            Belanja sekarang!
            </Link>
        </div>
    )
  return (
    <div className="w-full flex flex-col gap-5">
        {/* <div className="bg-white w-full flex justify-between rounded-xl font-semibold p-4">
            <div className="flex gap-7 items-center">
                <input id="checkall" type="checkbox" />
                <label htmlFor="checkall" className="hover:cursor-pointer">
                    Pilih semua
                </label>
            </div>
            <p className="text-red-600 hover:cursor-pointer p-1 hover:bg-black/20 rounded-md">Hapus semua</p>
        </div> */}
        <div className="w-full flex flex-col gap-3">
            {cart.map( item => (
                <ItemCard key={item.name} item={item} />
            ))}
        </div>
    </div>
  )
}

export default ItemSection;
