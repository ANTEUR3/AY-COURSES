import React, { ReactNode, useMemo } from 'react'
import student from '@/types/student'
const Students = ({students,logedIn}:{students:student[] | undefined,logedIn:boolean}) => {

    const displayUsers=useMemo(()=>{
        if(students !==undefined){
            return students.map((std,key)=>{
                return  <div className='w-full py-2 flex justify-start items-center' key={key}>
                     <p>{std.name}</p>
                     <p>{std.major}</p>
                     <p>{std.age}</p>
                  </div>
             })
        }
       
    },[students])
  return (
    <div className='w-full px-[100px]'>
        {displayUsers}
    </div>
  )
}

export default Students