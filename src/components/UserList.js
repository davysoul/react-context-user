import React,{useEffect,useContext} from 'react'
import UserContext from './context/User/UserContext'
import User from './context/User'
const UserList  = () => {
  
 const {users,getUsers} = useContext(UserContext)
 // apres creation du dom , la fonction getUsers sera executee
 useEffect(()=>{
  getUsers();

 })
  return (
    <div className='list-group h-100'>
       {
        users.map(user =>(
          <User user={user}/>
        ))
       }
    </div>
  )
}

export default UserList 