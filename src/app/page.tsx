"use client";


interface Student {
  id:number,
  name:String,
  age:number,
  major:String,
  gpa: number
}



import {  useMemo, useState } from "react";
import {  useEffect} from "react";
import getStudents from "@/dataFunctions";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";
import { studentContext } from "@/context/studentsContext";
import Students from "./Students";
import student from "@/types/student";
import StudentCard from "./studentCard";
import StudentName from "./StudentName";
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

  const displayStudents=useMemo(()=>{
    return students?.map((student,key)=>{
      return <StudentCard key={key}>
         <StudentName name={student.name} />
      </StudentCard>
 })
  },[students])


  return (
        <div className="grid grid-cols-2 gap-x-[200px] px-[100px]">
               
            {displayStudents}
          
        </div>
  );
}


