import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full relative flex flex-col font-semibold gap-5 items-center gradient-footer p-5">
        <Image src={'/images/logo-navbar-zmart.png'} alt="" width={720} height={720}
        className="w-44 mt-12 md:mt-0" />
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
                <MapPin size={15}/>
                <p>Jl. Akses UI No. 3, Beji, Depok</p>
            </div>
            <div className="flex items-center gap-2">
                <Mail size={15}/>
                <p>support@zmart.com</p>
            </div>
            <div className="flex items-center gap-2">
                <Phone size={15}/>
                <p>123-456-789</p>
            </div>
        </div>
        <p className="text-sm text-gray-500">© 2024 Zmart. All rights reserved.</p>
        <div className="flex gap-4 absolute top-10 md:right-10">
            <Link href={'/'}
            className="p-2 rounded-[50%] hover:cursor-pointer hover:bg-black/20">
                <Instagram size={18} />
            </Link>
            <Link href={'/'}
            className="p-2 rounded-[50%] hover:cursor-pointer hover:bg-black/20">
                <Facebook size={18} />
            </Link>
            <Link href={'/'}
            className="p-2 rounded-[50%] hover:cursor-pointer hover:bg-black/20">
                <Twitter size={18} />
            </Link>
        </div>
    </div>
  )
}

export default Footer;
