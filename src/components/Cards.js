import React, { useState } from 'react'
import Card from './Card'

const Cards=(props)=>{
    let courses= props.courses;  
    let category = props.category;
    // console.log(courses);
    const [likedCourses,setLikedCourses]=useState([]);
    

    //returns you a list of all courses objetcs received from the api response
    function getCourses(){
        if(category === "All"){
            let allCourses =[];

        Object.values(courses).forEach(array =>{
            array.forEach(courseData => {
                allCourses.push(courseData);
                
            })
        })
        
        return allCourses;

        }
        else{
            //me sirf specific category ka data add karung
            return courses[category];
        }
        
        
    }
        
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course)=>{
                return <Card key={course.id} course={course}
                likedCourses ={likedCourses}
                setLikedCourses = {setLikedCourses}/>
            })
        }

    </div>
  )
}

export default Cards