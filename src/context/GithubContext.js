import { createContext,useState } from "react";

const GithubContext = createContext()

export const GithubProvider  = ({children}) => {
    const [users, setUsers] = useState([])


    const fetchUsers =async() =>{
        const res = await fetch('https://api.github.com/users')
        const data = await res.json()
        setUsers(data)
    
    } 


    return <GithubContext.Provider value={{users,fetchUsers }}>
        {children}
    </GithubContext.Provider>
}   
 
export default GithubContext