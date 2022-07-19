import { useRef, useState } from 'react'



const BasicForm = (props) => {
  const inputRefName = useRef();
  const inputRefLastName = useRef()
  const inputRefEmail = useRef()

  const [ nameEntered, setNameEntered ] = useState();
  const [ lastNameEntered, setLastNameEntered ] = useState()
  const [ emailEntered, setEmailEntered ] = useState()


  const inputNameChangeHandler = event => {
    setNameEntered(event.target.value)
    
  }

  const inputLastNameChangeHandler = event => {
    
    setLastNameEntered(event.target.value)
    
  }

  const inputEmailChangeHandler = event => {
   
    setEmailEntered(event.target.value)
  }

  const formSubmission = event => {
    event.preventDefault();

    console.log(nameEntered, lastNameEntered, emailEntered)

    const newNameValue = inputRefName.current.value;
    const newLastNameValue = inputRefLastName.current.value;
    const newEmailValue = inputRefEmail.current.value;


    console.log(newNameValue, newLastNameValue, newEmailValue)
  }



  return (
    <form onSubmit={formSubmission}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input ref={inputRefName} type='text' id='name' onChange={inputNameChangeHandler} />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input ref={inputRefLastName} type='text' id='lastname' onChange={inputLastNameChangeHandler} />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input ref={inputRefEmail} type='email' id='email' onChange={inputEmailChangeHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
