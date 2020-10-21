import React, { useEffect, useState } from 'react'


const User = () => {

    const[repos, setRepos] = useState([])
    const[error,setError]=useState(false)

    
    useEffect(() => {
        
        
        
        fetch ("https://api.github.com/orgs/HackYourFuture-CPH/repos")
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            
            setRepos(data)
        })
    .catch(err => {
        setError(true)
        
        console.error(err)
    })
},[repos])
   


    return (
        <div> 
            
               
               <div>
                 {repos.map(repo => {
                   return(
                       <p>
                           
                           {repo.name}
                       </p>
                       
                   )
               })}

            </div>
        </div>

    )
}

export default User
