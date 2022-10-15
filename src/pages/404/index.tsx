import Link from 'next/link'
import React from 'react'
import { useApp } from '../../contexts/AppContext'

const NotFound = () => {
    const { theme } = useApp()
  return (
    <div className={`${theme.bg1} flex w-full h-screen flex-col items-center justify-center`}>
        <img className='max-w-[400px] w-11/12' src="/images/404.gif" alt="" />
        <h1 className='text-lg text-center font-semibold'>It looks like page you are looking for doesn't exist or the link may have been broken</h1>
        <Link href={`/`}>
            <button className={`${theme.main} text-white px-5 py-2 mt-5`}>Go to Hompage</button>
        </Link>
    </div>
  )
}

export default NotFound