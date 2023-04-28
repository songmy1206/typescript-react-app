import React, { useRef, useState } from 'react'
import List from './List';

export interface Task{
  task: string;
  done: boolean;
}

export default function Todo() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  // const testList: Task[] = [
  //   {task: 'ts배우기', done:false},
  //   {task: 'jest배우기', done:false}
  // ]
  const addList = (): void =>{
    // let copyArr: Task[] = [...taskList]
    if(inputRef.current !== null){
      let newTask: Task= {task: inputRef.current.value, done: false}
      setTaskList([...taskList, newTask])
      // copyArr.push(newTask)
      // setTaskList((cur: Task[])=> copyArr);
      // inputRef.current.value = ""
    }
  }
  return (
    <>
      <input ref={inputRef} type='text'/>
      <button onClick={addList}>할 일 추가</button>
      <h3>할 일 목록</h3>
      {taskList?.map((el,idx)=>(
        <List task={el.task} done={el.done} key={idx}/>
      ))}
    </>
  )
}
