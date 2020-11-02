import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch(` https://api.github.com/user/${id}`)
      .then(req => req.json())
      .then(data => {
        console.log(data)
        setUser(data);
      });
    console.log('got id', id)
  }, [id])

  return (
    <div> 
        <div className="pa4 tc">
            <img 
            src={user.avatar_url} className="br-100 h4 w4 dib ba b--black-05 pa2"
            alt='user-avatar'  
            />
        </div>
        <div className='tc'>
          <h1>{user.login}</h1>
           <ul className="list pl0 measure center">
             <li className='lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30'> <a className="f4 fw6 db black link hover-dark-green" href={user.repos_url}>Repositiories </a> </li>
             <li className='lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30'> <a class="f4 fw6 db black link hover-green" href={user.gists_url}>Gists </a> </li>
             <li className='lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30'> <a class="f4 fw6 db black hover-light-purple" href={user.followers_url}>Followers </a> </li>
             
         </ul> 
        </div>
    </div>   
  )
}

export default User