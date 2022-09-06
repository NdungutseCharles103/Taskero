import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { useApp } from './contexts/AppContext'
import DashBoard from './pages/DashBoard'
import Tasks from './pages/Tasks'
import Card from './Test'

function App() {

  return (
    <DndProvider  backend={HTML5Backend} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/activity' element={<DashBoard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/myprofile' element={<Tasks />} />
          <Route path='/calendar' element={<Tasks />} />
          <Route path='/teams' element={<Tasks />} />
          <Route path='/helpcenter' element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  )
}

export default App
