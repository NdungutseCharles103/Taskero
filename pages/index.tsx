import { useRouter } from 'next/router';
import React from 'react'

const Home = () => {
	const router = useRouter();
    console.log(router);
    
  return (
    <div className='bg-red-600'>Home:</div>
  )
}

export default Home