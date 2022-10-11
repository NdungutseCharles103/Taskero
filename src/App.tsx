import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { pageType } from './contexts/types'
import { pages } from './pages'
// import { useApp } from './contexts/AppContext'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <DndProvider  backend={HTML5Backend} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          {pages.map((page: pageType)=>(
            <Route key={page.id} path={page.url} element={page.component as React.ReactNode} />
          ))}
        </Routes>
      </BrowserRouter>
    </DndProvider>
  )
}

export default App
