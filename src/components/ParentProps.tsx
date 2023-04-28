import React from 'react'
import Props from './Props'

export interface MyProps {
  name: string;
  age: number;
  hobbies?: string[];
}

export default function ParentProps() {
  const smy: MyProps = {
    name: '송민영',
    age: 25,
    hobbies: ['a','b'],
  }
  return (
    <>
      <Props {...smy}/>
    </>
  )
}
