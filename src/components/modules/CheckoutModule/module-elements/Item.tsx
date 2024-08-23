import Image from "next/image";
import React from "react";

function Item() {
  return (
    <div className="w-full bg-white rounded-xl p-4 flex justify-between">
        <div className="flex items-center gap-7">
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
        </div>
    </div>
  )
}

export default Item;
