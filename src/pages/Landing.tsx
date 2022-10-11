import React from 'react'
import { useApp } from '../contexts/AppContext'

const Landing = () => {
    const { theme } = useApp()
  return (
    <div className={`flex w-full flex-col ${theme.bg1} p-3 ${theme.text}`}>
        
    </div>
  )
}

export default Landing