import React from 'react'

type Props = {
    children:React.ReactNode
}

const StudentCard = (props: Props) => {
  return (
    <div className='bg-green-600'>{props.children}</div>
  )
}




export default StudentCard