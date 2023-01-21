import React,{useContext} from 'react'
import UserContext from './User/UserContext'

function User({user}) {
    const{getProfile} = useContext(UserContext)
  return (
    <div>
        <a className='list-group-item list-group-item-action d-flex flex-row justify-content-start' href='#!' key={user.id} onClick={()=>getProfile(user.id)}>
            <img  src={user.avatar} alt="" className='img-fluid mr-4 rounded-circle' with='70'/>
            <p>{`${user.first_name} ${user.last_name}`}</p>
          </a>

    </div>
  )
}

export default User