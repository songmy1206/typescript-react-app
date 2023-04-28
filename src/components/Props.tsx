import React from 'react'
import { MyProps } from './ParentProps';

export default function Props({name, age, hobbies}:MyProps) {
  // name age hobbies
  return (
    <>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
      {hobbies?.map((el:string, idx:number)=>(
        <p key={idx}>{el}</p>
      ))}
    </>
  )
}
