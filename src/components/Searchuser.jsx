import React from 'react'
import { useEffect }from 'react'
import { useState } from 'react'

function Searchuser() {
    const [text, setText] = useState('')

    const handletextChange=(e)=>{
        setText(e.target.value)
    }

    useEffect(() => {
        SearchUsers()
    })
    const params = new URLSearchParams({
        q: text
    }) 
    const SearchUsers =async() =>{
        const res = await fetch(`https://api.github.com/search/users?${params}`)
        const data = await res.json()
        

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text === ''){
            alert('Enter text')
        }else{
            SearchUsers(text)
        }
        setText('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handletextChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Searchuser
