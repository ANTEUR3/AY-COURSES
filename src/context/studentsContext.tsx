import React from 'react'
import { createContext } from 'react';


interface student{
    id:number,
    name:String,
    age:number,
    major:String,
    gpa: number
  }
 interface StudentContextType {
    students: student[] | undefined  ;
  }

   
 

export const studentContext=createContext<StudentContextType | undefined > (undefined);


