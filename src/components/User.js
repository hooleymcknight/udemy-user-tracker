const User = (props) => {
  return (
    <div className="user-entry">
      <p>
        {props.data.username}
        <span> ({props.data.age} years old)</span>
      </p>
    </div>
  )
}

export default User