import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'

const User = () => {

    const[input, setInput] = useState('')
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(false)
    const[users, setUsers] = useState([])

    useEffect(() => {
        
        if(!input){
           return
        }
         setIsLoading(true)
        
        fetch (`https://api.github.com/search/users?q=${input}`)
        .then(response =>  response.json())
        .then(data => {
            console.log(data)
            setIsLoading(false)
            setUsers(data.items)
        })
    .catch(err => {
        setError(true)
        setIsLoading(false)
        console.error(err)
    })
},[input])
   

const submitHandler = e => {
    e.preventDefault()
    setInput(e.target.elements.query.value)
    //console.log(setInput)
}
    return (
        <div> 
               <SearchBox searchChange={submitHandler} />
               {isLoading && <div>Loading...</div>}
               {error && (
                   <div>
                       Unexpected Error occured during fetching data. please try again later!
                   </div>
               )}
               <div>
                 {users.map((user) => {
                   return(
                       <p>
                           {user.login}
                       </p>
                       
                   )
               })}

            </div>
        </div>

    )
}

export default User
