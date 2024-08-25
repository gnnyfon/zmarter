import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

type RecipeCardProps = {
    image: string,
    title: string,
}

function RecipeCard({
    image, 
    title}: 
    RecipeCardProps) {
  
  const starIcons = Array(5).fill(null);

  return (
    <div className="ml-2 bg-garlic w-64 h-72 rounded-lg shadow-md">
      <div className='rounded-t-lg overflow-hidden h-40'>
        <Image src={image} alt={title} width={256} height={176}/>
      </div>
      <div className='card-resep-konten ml-5 mt-3 align-items-center justify-content-center'>
        <div className='flex justify-between'>
            <div>
                <div>
                    <p className='text-base text-textBlack'>{title}</p>
                </div>
                <div className='flex gap-1'>
                  {starIcons.map((_, index) => (
                    <Image
                    key={index}
                    src='/images/icon-resep-star.png'
                    width={18}
                    height={18}
                    alt='icon star'
                    />
                  ))}
                </div>
            </div>
            <div className='mr-6 mt-1 overflow-hidden'>
                <Image src='/images/icon-resep-bookmark.png' width={26} height={31} alt='icon bookmark' />
            </div>
        </div>
        <div>
            <button className='w-28 h-7 gradient-leaf-button text-garlic font-medium text-sm rounded-md mt-6 mb-6 shadow-lg shadow-matcha/50 hover:text-spinach hover:font-bold hover:outline hover:outline-spinach hover:outline-3'>
              <Link href="/resep/detail" legacyBehavior><a>Lihat Resep</a></Link>
            </button>
        </div>
      </div>
    </div>
  );
}

export { RecipeCard };