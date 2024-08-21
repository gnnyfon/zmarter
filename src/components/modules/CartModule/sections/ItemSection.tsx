import React from "react";
import ItemCard from "../module-elements/ItemCard";

function ItemSection() {
  return (
    <div className="w-full flex flex-col gap-5">
        <div className="bg-white w-full flex justify-between rounded-xl font-semibold p-4">
            <div className="flex gap-7 items-center">
                <input id="checkall" type="checkbox" />
                <label htmlFor="checkall" className="hover:cursor-pointer">
                    Pilih semua
                </label>
            </div>
            <p className="text-red-600 hover:cursor-pointer p-1 hover:bg-black/20 rounded-md">Hapus semua</p>
        </div>
        <div className="w-full flex flex-col gap-3">
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    </div>
  )
}

export default ItemSection;
