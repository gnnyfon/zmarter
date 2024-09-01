'use client'

import { useCartContext } from "@/components/contexts/CartContext";
import Link from "next/link";
import React from "react";

function SummarySection() {
    const { cart } = useCartContext()
    const total = cart.reduce((total, item) => total + (item.price * item.quantity!), 0);
    const extraCost = 1000

  return (
    <div className="w-full h-fit bg-white rounded-xl p-5 flex flex-col gap-5">
        <h1 className="font-medium text-lg">Ringkasan pesanan</h1>
        <div className="flex flex-col gap-3 text-sm font-semibold">
            <div className="flex justify-between items-center">
                <p className="text-gray-400">Total Harga</p>
                <p>Rp{total.toLocaleString('ID-id')}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-400">Biaya Platform</p>
                <p>Rp1.000</p>
            </div>
            <div className="h-0.5 w-full gradient-leaf"></div>
            <div className="flex justify-between items-center">
                <p className="">Total Akhir</p>
                <p>Rp{(total+extraCost).toLocaleString('ID-id')}</p>
            </div>
            <Link href={'/checkout'} className="gradient-leaf w-full p-2 rounded-md font-semibold text-white
            hover:shadow-[0_0_10px_1px_rgba(171,203,146,1)] text-center duration-300">
                Checkout
            </Link>
        </div>
    </div>
  )
}

export default SummarySection;
