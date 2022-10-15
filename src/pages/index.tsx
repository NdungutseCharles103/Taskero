import { useRouter } from 'next/router';
import React from 'react'
import DashBoard from './dashboard';

const Home = () => {
	const router = useRouter();
    console.log(router);
    
  return <DashBoard />
}

export default Home