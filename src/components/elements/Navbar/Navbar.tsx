import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

function Navbar() {
  return (
    <div className="bg-secondary flex fixed top-0 w-full">
      <div className="flex-1 ml-8">
        <Image src="/images/logo-navbar-zmart.png" alt="Logo Zmart" width={133} height={63}/>
      </div>
      <div className="text-textBlack mt-5 mr-8">
        <Link href="/" legacyBehavior><a className="navigation">Homepage</a></Link>
        <Link href="/resep" legacyBehavior><a className="navigation">Resep</a></Link>
        <Link href="/bahan" legacyBehavior><a className="navigation">Bahan</a></Link>
        <Link href="/keranjang" legacyBehavior><a className="navigation">Keranjang</a></Link>
        <Link href="/profile" legacyBehavior><a className="navigation">Profile</a></Link>
        <Link href="/" legacyBehavior><a className="navigation">Logout</a></Link>
      </div>
    </div>
  );
}

export { Navbar };