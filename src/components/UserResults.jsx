import React, { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import GithubContext from "../context/GithubContext"
import Useritem from "./Useritem"


function UserResults() {
    const {users,fetchUsers} = useContext(GithubContext)
    
useEffect(() =>{
    fetchUsers()
})
    

   

  return (
    <div>
        {users.map((user) => (
            <Useritem user={user} key={user.id} />
            
        ))}
    </div>)
    
  
}

    

export default UserResults
