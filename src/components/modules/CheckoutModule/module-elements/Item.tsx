import { ProductType } from "@/components/contexts/type";
import Image from "next/image";
import React from "react";

function Item({item} : {item: ProductType}) {
  return (
    <div className="w-full bg-white rounded-xl p-4 flex justify-between">
        <div className="flex items-center gap-7">
            <div className="flex gap-5">
                <Image src={item.image} 
                alt="" width={720} height={720} className="w-24 h-24 object-cover rounded-md"/>
                <div className="flex flex-col font-semibold">
                    <p>{item.name}</p>
                    {/* <p className="font-normal">1 kg</p> */}
                </div>
            </div>
        </div>
        <div className="flex gap-2 font-semibold">
            <p className=" text-carrot">{item.quantity}</p>
            <p>x</p>
            <p className="">
                Rp{(item.price).toLocaleString('ID-id')}</p>
        </div>
    </div>
  )
}

export default Item;
