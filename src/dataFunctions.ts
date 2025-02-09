interface student{
    id:number,
    name:String,
    age:number,
    major:String,
    gpa: number
}


async function getStudents():Promise<student[]>{
    const std=await fetch('http://localhost:4000/students');
    return std.json();
  
}
export default getStudents;
