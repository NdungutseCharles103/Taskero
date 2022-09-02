import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { useApp } from './contexts/AppContext'
import DashBoard from './pages/DashBoard'
import Card from './Test'

function App() {

  return (
    <DndProvider  backend={HTML5Backend} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  )
}

export default App
