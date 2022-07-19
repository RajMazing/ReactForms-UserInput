
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangehandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput
	} = useInput(value => value.includes('@'));


	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	//evaluates every KEY STROKE



	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);

		// nameInputRef.current.value = ''; NOT IDEAL, DONT MANIPULATE THE DOM
		resetNameInput();
		resetEmailInput();

	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailInputHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			{/* first div */}
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty!</p>
				)}
			</div>
			{/* second div */}
			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailChangehandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className="error-text">Email must not be empty!</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
