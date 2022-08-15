import { useState } from 'react'
import './NewUser.css'

const NewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const usernameChangeHandler = (event) => {
    // trim and replace spaces with no spaces to prevent users from including any spaces in their username
    setEnteredUsername(event.target.value.trim().replace(' ', ''))
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const usernameIsTaken = (input) => {
    const takenUsernames = props.data.map(data => data.username)
    if (takenUsernames.includes(input)) {
      return false
    }
    return true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!enteredAge || !enteredUsername) {
      props.onSubmitForm('Please enter a valid name and age (non-empty values).')
      return
    }

    if (!usernameIsTaken(enteredUsername)) {
      props.onSubmitForm('Username is already taken.')
      return
    }

    const newUserData = {
      id: props.data.length,
      username: enteredUsername,
      age: enteredAge
    }

    props.onSubmitForm(newUserData)

    setEnteredUsername('')
    setEnteredAge('')
  }

  return(
    <form className="new-user-form" onSubmit={submitHandler}>
      <div className="add-user__control">
        <label>Username</label>
        <input
          type="text"
          minLength="8"
          maxLength="16"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
      </div>
      <div className="add-user__control">
        <label>Age (Years)</label>
        <input
          type="number"
          min="18"
          max="100"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}

export default NewUser