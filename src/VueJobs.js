import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const VueJobs = () => {
   const [jobs,setJobs] =  useState([])


   const handleDelete=(id)=>{
     const newJob= jobs.filter(job=>job.id !== id)
     setJobs(newJob)
   }
   useEffect(()=>{



const getData = async() =>{

const data = await fetch('https://vuejobs.com/api/jobs')
const value = await data.json()
setJobs(value)
}
getData()
   }, [])
  return (
    <div>
       {jobs.map(job=>{
          const {id,title,description,location, company:{name, avatar}, published_at:{date,for_humans} }=job
return(
   <div key={id}>
   {name}{avatar}
<li>{title}</li>
<li>{description}</li>
<li>{description}</li>
<button  onClick={()=>handleDelete(id)}> Delete Me </button>
   </div>
)

       })  }
    </div>
  )
}

export default VueJobs