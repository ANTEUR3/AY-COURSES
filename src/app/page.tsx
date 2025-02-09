"use client";


interface Student {
  id:number,
  name:String,
  age:number,
  major:String,
  gpa: number
}



import {  useState } from "react";
import {  useEffect} from "react";
import getStudents from "@/dataFunctions";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";
export default function Home() {


const context = useContext(AppContext);
if (!context) throw new Error('Context must be used within provider');
const {students, dispatch} = context;
  useEffect(()=>{
    const fetchData = async () => {
      const data = await getStudents();
      dispatch({type:'INITIALISE',payload:data})  
  };
    fetchData(); 
  },[])

  useEffect(()=>{console.log(students)},[students])
  return (
    <div>
     <h1>hello</h1>

    </div>
  );
}
