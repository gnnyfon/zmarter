import { Metadata } from 'next';
import { Navbar } from '../components'

export default function Page() {
  return (
    <>
      <Navbar />
      ini landing page
      <div className='gradient-soil bg-black'> yyes</div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Zmart'
};