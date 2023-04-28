import React from 'react'
import { Task } from './Todo'

export default function List({task, done}: Task) {
  return (
    <>
      <h1>할 일: {task}</h1>
      <h1>완료여부: {done ? '완료':'미완료'}</h1>
      
    </>
  )
}
