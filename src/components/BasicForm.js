import { useRef, useState } from "react";

const BasicForm = (props) => {
	const inputRefName = useRef();
	const inputRefLastName = useRef();
	const inputRefEmail = useRef();

	const [nameEntered, setNameEntered] = useState("");
	const [lastNameEntered, setLastNameEntered] = useState("");
	const [emailEntered, setEmailEntered] = useState("");
	const [validName, setValidName] = useState(false);
	const [validLastName, setValidLastName] = useState(false);
	const [validEmail, setValidEmail] = useState(false);

	const [nameTouched, setNameTouched] = useState(false);
	const [lastNameTouched, setLastNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);

	const inputNameChangeHandler = (event) => {
		setNameEntered(event.target.value);
	};

	const inputLastNameChangeHandler = (event) => {
		setLastNameEntered(event.target.value);
	};

	const inputEmailChangeHandler = (event) => {
		setEmailEntered(event.target.value);
	};

	const formSubmission = (event) => {
		event.preventDefault();

		setNameTouched(true)
    setLastNameTouched(true)
    setEmailTouched(true)
    
		if (nameEntered.trim() === "") {
			setValidName(false);
			return;
		} else if (lastNameEntered.trim === "") {
			setValidLastName(false);
			return;
		} else if (emailEntered.trim === "") {
			setValidEmail(false);
			return;
		}

		// const newNameValue = inputRefName.current.value;
		// const newLastNameValue = inputRefLastName.current.value;
		// const newEmailValue = inputRefEmail.current.value;

		// console.log(newNameValue, newLastNameValue, newEmailValue)

		setNameEntered("");
		setLastNameEntered("");
		setEmailEntered("");
	};

	const nameInputIsInvalid = !validName && nameTouched;
	const lastNameInputIsInvalid = !validLastName && lastNameTouched;
	const emailInputIsInvalid = !validEmail && emailTouched;

	const enteredNameInput = validName ? "form-control" : "form-control invalid";
	const enteredLastNameInput = validLastName
		? "form-control"
		: "form-control invalid";
	const enteredEmailInput = validEmail
		? "form-control"
		: "form-control invalid";

	return (
		<form onSubmit={formSubmission}>
			<div className="control-group">
				<div className={enteredNameInput}>
					<label htmlFor="name">First Name</label>
					<input
						ref={inputRefName}
						type="text"
						id="name"
						onChange={inputNameChangeHandler}
						value={nameEntered}
					/>
					{nameInputIsInvalid && <p className="error-text">Name cannot be empty!</p>}
				</div>
				<div className={enteredLastNameInput}>
					<label htmlFor="name">Last Name</label>
					<input
						ref={inputRefLastName}
						type="text"
						id="lastname"
						onChange={inputLastNameChangeHandler}
						value={lastNameEntered}
					/>
					{lastNameInputIsInvalid && (
						<p className="error-text">Last Name cannot be empty!</p>
					)}
				</div>
			</div>
			<div className={enteredEmailInput}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					ref={inputRefEmail}
					type="email"
					id="email"
					onChange={inputEmailChangeHandler}
					value={emailEntered}
				/>
				{emailInputIsInvalid && <p className="error-text">Email cannot be empty!</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
