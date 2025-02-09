"use client";

import React, { Dispatch } from "react"
import { useReducer } from "react"
import getStudents from "@/dataFunctions"
import { createContext } from "react";
interface student{
  id:number,
  name:String,
  age:number,
  major:String,
  gpa: number
}

type studentAction=
  | {type:'ADD_STUDENT',payload:student} | {type:'DELETE_STUDENT',payload:student}
  | {type:'UPDATE_STUDENT',payload:{id:number,gpa:number}} | {type:'INITIALISE',payload:student[]};

  interface StudentContextType {
    students: student[] | undefined ;
    dispatch: Dispatch<studentAction>;
   
  }

export const AppContext=createContext<StudentContextType | undefined>(undefined);

export const studentDispacher=(state:student[] | undefined,action:studentAction):student[] | undefined=>{
  if(state===undefined){
    return state;
       }
  switch(action.type){
   
    case 'ADD_STUDENT':
      return [...state,action.payload];
     case 'DELETE_STUDENT': 
      return state.filter(std=>std.id!==action.payload.id);
    case 'UPDATE_STUDENT':
      return state.map(std=>std.id===action.payload.id?{...std,gpa:action.payload.gpa}:std);
     case 'INITIALISE':
        return  action.payload; 
    default:
      return state;
    }

   

 

}

interface StudentContextProviderProps {
  children: React.ReactNode;
}
export const AppContextProvider : React.FC<StudentContextProviderProps>=({children})=>{

  
      
      const [students,dispatch]=useReducer(studentDispacher,[]);

      return(
        <AppContext.Provider value={{students, dispatch}}>
          {children}
        </AppContext.Provider>
      
      )
}








