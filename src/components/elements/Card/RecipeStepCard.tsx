import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

type RecipeStepCardProps = {
    number: string,
    step: string,
}

function RecipeStepCard({
    number, 
    step}: 
    RecipeStepCardProps) {
  
  const starIcons = Array(5).fill(null);

  return (
    <div className='flex items-center ml-4'>
      <div className='rounded-full text-xl font-medium text-garlic gradient-leaf h-fit w-10 h-10 justify-items-center justify-center place-content-center'>
        <div className='place-content-center text-center'>{number}</div>
      </div>
      <div className='bg-garlic w-3/4 h-auto rounded-lg shadow txt-textBlack font-regular text-base pl-4 pb-4 mt-2 pt-2'>
        {step}
      </div>
    </div>
  );
}

export { RecipeStepCard };