import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecipeRecommendation() {
    return (
        <div className="w-full h-fit bg-white rounded-xl p-5 flex flex-col gap-5">
            <div className="flex gap-3 font-medium">
                <p className="text-2xl">🧑‍🍳</p>
                <p>Rekomendasi resep dari bahan-bahan di keranjang kamu!</p>
            </div>
            <div className="h-0.5 w-full gradient-leaf"></div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
                <div className="flex gap-3 items-center w-full">
                    <Image src={'/images/img-resep-sup_bayam_jagung.jpg'} alt="" width={720} height={720}
                    className="w-16 h-16 object-cover rounded-md" />
                    <div className="font-semibold w-full flex flex-col gap-3 justify-between">
                        <p>Sop Bayam Jagung</p>
                        <div className="flex justify-between w-full text-white">
                            <Link href='/resep/detail' className="gradient-soil duration-300 hover:shadow-[0_0_10px_1px_rgba(165,130,130,1)] text-sm p-2 rounded-md">
                                Lihat resep
                            </Link>
                            {/* <Link href='/' className="gradient-soil duration-300 hover:shadow-[0_0_10px_1px_rgba(165,130,130,1)]
                            text-sm p-2 rounded-md">
                                Simpan resep
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeRecommendation;
