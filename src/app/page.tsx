import { Metadata } from 'next';
import { Navbar, Searchbar } from '../components'
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <>
      <Navbar />
      <Searchbar input="Mau masak apa hari ini?"/>
      <div className='text-textBlack'>hi, this is landing pagedd</div>
    </>
  );
}

export default Page;