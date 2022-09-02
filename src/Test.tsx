import React from 'react'
import { useDrag } from 'react-dnd'
// import { ItemTypes } from './Constants'

/**
 * Your Component
 */
export default function Card({ isDragging, text }: any) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'ItemTypes.CARD',
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div className='w-[300px] cursor-grab h-[200px] bg-blue-500' ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}