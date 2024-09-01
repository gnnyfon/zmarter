'use client'
import { Navbar } from "@/components/elements";
import React, { useState } from "react";
import Item from "./module-elements/Item";
import Footer from "@/components/elements/Footer";
import Image from "next/image";
import { useCartContext } from "@/components/contexts/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CheckoutModule() {
    const [method, setMethod] = useState('kurir')
    const { cart,checkoutCart } = useCartContext()
    const total = cart.reduce((total, item) => total + (item.price * item.quantity!), 0);
    const router = useRouter()

    const handleCheckout = () => {
        checkoutCart()
        router.push('/')
        toast.success('Pembayaran Berhasil! 🎉')
    }
    return (
        <div className="flex flex-col items-center min-h-screen pt-10 gap-2 bg-[#F0F3F7]">
            <Navbar />
            <main className="flex gap-6 min-h-[80dvh] my-10 w-4/5">
                <section className="w-full flex flex-col gap-5">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="font-bold text-2xl w-full">Keranjang</h1>
                        <div className="flex border rounded-xl overflow-hidden border-spinach text-sm text-center font-semibold w-1/3">
                            <p onClick={() => setMethod('kurir')} 
                            className={`w-full hover:cursor-pointer p-1 py-2 text-g ${method == 'kurir' && 'bg-matcha'}`}>
                                Dikirim kurir
                            </p>
                            <p onClick={() => setMethod('ambil')} 
                            className={`w-full hover:cursor-pointer p-1 py-2 ${method == 'ambil' && 'bg-matcha'}`}>
                                Ambil di toko
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {method == 'kurir' && <div className="w-full bg-white rounded-xl p-5">
                            <div className="flex items-center justify-between w-full">
                                <p className="font-bold text-soil">Alamat Pengiriman</p>
                                <p className="text-spinach hover:underline hover:cursor-pointer">Ubah alamat</p>
                            </div>
                            <p className="font-bold">Rumah - Fathan</p>
                            <p className="font-semibold text-gray-400">Jl. Yang Benar No. 5, Kebon Apel, Cibubur, Jawa Barat 18103</p>
                            <p className="font-semibold text-gray-400">081299268023</p>
                        </div>}
                        {
                            cart.map(item => (
                                <Item item={item} key={item.name}/>
                            ))
                        }
                    </div>

                </section>
                <section className="w-2/5 flex flex-col gap-4 my-[3.5rem]">
                    <div className="bg-white rounded-xl flex flex-col gap-2 w-full p-4">
                        <p className="font-bold">Metode Pembayaran</p>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <Image src={'/images/gopay.jpg'} alt="gopay" width={720} height={720}
                                className="w-12 h-12 border border-lime-500 object-cover rounded-md"/>
                                <div className="flex flex-col font-semibold text-sm">
                                    <p>Uang Elektronik</p>
                                    <p>Gopay</p>
                                </div>
                            </div>
                            <p className="text-sm text-spinach hover:underline hover:cursor-pointer">Ubah</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-3 w-full p-4">
                        <p className="font-bold">Ringkasan Pesanan</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between font-semibold text-sm">
                                <p className="text-gray-400">Total harga</p>
                                <p>Rp{total.toLocaleString('ID-id')}</p>
                            </div>
                            <div className="flex justify-between font-semibold text-sm">
                                <p className="text-gray-400">Ongkos kirim</p>
                                <p>-</p>
                            </div>
                            <div className="flex justify-between font-semibold text-sm">
                                <p className="text-gray-400">Biaya platform</p>
                                <p>Rp1000</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 gradient-leaf"></div>
                        <div className="flex justify-between font-bold ">
                            <p>Grand Total</p>
                            <p>Rp{(total+1000).toLocaleString('ID-id')}</p>
                        </div>
                        <button onClick={handleCheckout}
                        className="gradient-leaf w-full p-2 rounded-md font-semibold text-white
                        hover:shadow-[0_0_10px_1px_rgba(171,203,146,1)] text-center duration-300">
                            Bayar
                        </button>
                    </div>
                    
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default CheckoutModule;
