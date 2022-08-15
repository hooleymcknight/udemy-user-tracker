import User from './User'
import './UserList.css'

const UserList = (props) => {
  console.log(props.data)

  return (
    <div className="users-list">
      {props.data.map((user) => 
        <User key={user.id} data={user} />
      )}
    </div>
  )
}

export default UserList