

function Useritem({user : {login,avatar_url}}) {
  return (
    <div>
        <img src={avatar_url} alt='profiles' style={{width:100}} />
      <h2>{login}</h2>
    </div>
  )
}



export default Useritem
