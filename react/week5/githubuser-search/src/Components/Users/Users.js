import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'


import { Link } from 'react-router-dom'

const Users = () => {

    const[input, setInput] = useState('')
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(false)
    const[users, setUsers] = useState([])
    const usersSearchUrl = `https://api.github.com/search/users?q=${input}`

    useEffect(() => {

        if(!input){
           return
        }
         setIsLoading(true)

        fetch (url)
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
},[url,input])


const submitHandler = e => {
    e.preventDefault()
    setInput(e.target.elements.query.value)
    //console.log(setInput)
}
    return (
        <div className='pa4 tc'> 
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
                       <div key={user.id}>
                           <img     
                              src={user.avatar_url}
                              className='br-100 ba h3 w3 dib'
                              alt="user avatar"
                            />
                            <Link to={`/user/${user.id}`}>{user.login}</Link>   
                       </div>
                       
                   )
               })}
                  
            </div>
        </div>

    )
}

export default Users
