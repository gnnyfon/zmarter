import React from "react";

function SummarySection() {
  return (
    <div className="w-2/5 h-fit bg-white rounded-xl p-5 flex flex-col gap-5">
        <h1 className="font-medium text-lg">Ringkasan pesanan</h1>
        <div className="flex flex-col gap-3 text-sm font-semibold">
            <div className="flex justify-between items-center">
                <p className="text-gray-400">Total Harga</p>
                <p>Rp30.000</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-400">Biaya Platform</p>
                <p>Rp1.000</p>
            </div>
            <div className="h-0.5 w-full gradient-leaf"></div>
            <div className="flex justify-between items-center">
                <p className="">Total Akhir</p>
                <p>Rp31.000</p>
            </div>
            <button className="gradient-leaf w-full p-2 rounded-md font-semibold text-white
            hover:shadow-[0_0_10px_1px_rgba(171,203,146,1)] duration-300">
                Checkout
            </button>
        </div>
    </div>
  )
}

export default SummarySection;
