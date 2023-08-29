import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";



const App = () => {

  const[courses,setCourses] = useState([]);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      // save data into a variable
      setCourses(output.data);
      
    }catch(error){
      
      toast.error("Something went wrong");
    }
    setLoading(false);

  };
    

    useEffect(() => {
      fetchData();
    },[])
   
  return ( 
    <div className="min-h-screen flex-col flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <div>
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
        <div>
          <Filter 
          filterData={filterData} 
          category ={category}
          setCategory = {setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div> 
      </div>
    </div>
  );
};

export default App;