import { useState } from 'react';
import NewUser from './components/NewUser'
import UserList from './components/UserList'
import InvalidInput from './components/InvalidInput'

let starter_users = []

function App() {
  const [users, setUsers] = useState(starter_users)
  const [errorMessage, setErrorMessage] = useState('')
  const [inputIsValid, setInputIsValid] = useState(true)

  const formSumbitHandler = (newUserData) => {
    if (typeof(newUserData) !== 'string') {
      setUsers((prevUsers) => {
        return [newUserData, ...prevUsers]
      })
    }
    else {
      // handle errors here
      setInputIsValid(false)
      setErrorMessage(newUserData)
    }
  }

  const closeModal = () => {
    setInputIsValid(true)
  }

  return (
    <div>
      <NewUser data={users} onSubmitForm={formSumbitHandler} />
      <UserList data={users} />
      {!inputIsValid && <InvalidInput data={errorMessage} onCloseModal={closeModal} />}
    </div>
  )
}

export default App;
