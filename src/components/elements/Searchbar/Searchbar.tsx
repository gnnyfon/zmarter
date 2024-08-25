'use client';
import React, { useState } from 'react';
import Image from "next/image";

type SearchbarProps = {
    input: string;
}

function Searchbar({input}: SearchbarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="searchbar outline outline-gray-600 outline-offset-4 rounded-2xl flex items-center justify-between mr-48 ml-48 rounded-md justify-content-center mt-24 pt-1 pb-1">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={input}
          className="text-base text-colors-black font-light ml-2 outline-none bg-transparent placeholder:text-colors-black/35 w-full"
        />
      
        <div className="mr-4">
          <Image src="/images/icon-searchbar.png" alt="Icon Search Bar" width="30" height="26" />
        </div>
      </div>
    </>
  )
}

export { Searchbar };