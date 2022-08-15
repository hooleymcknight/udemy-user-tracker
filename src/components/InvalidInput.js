import './InvalidInput.css'

const InvalidInput = (props) => {
  const clickHandler = () => {
    props.onCloseModal()
  }

  return(
    <div className="invalid-modal">
      <div className="modal-contents">
        <h2>Invalid input</h2>
        <div className="modal-contents__inner">
          <p>{props.data}</p>
          <button type="button" onClick={clickHandler}>Okay</button>
        </div>
      </div>
    </div>
  )
}

export default InvalidInput