import React, {useState} from "react";

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    // used to see if form has been submitted
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // used for true or false if there is an error and checking what that error is
    const [informationError, setInformationError] = useState("");

    // on form submition, create user is played out
    const createUser = (e) => {

        e.preventDefault();

        const newUser = {firstname, lastname, email, password, confirmpassword};
        console.log("Welcome ", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        
        setHasBeenSubmitted(true);
    };

    // when typing in first name, checks for validation
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length === 0) {
            setInformationError("");
        } else if (e.target.value.length < 2) {
            setInformationError("Your first name isnt long enough");
        } else {
            setInformationError("");
        }
    }

    // only have information error conditional on first name because lazy, would have to create different informational errors for each item
    return(
        <div>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form!</h3>
            }
            <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label>
                <input type="text" value={firstname} onChange={ handleFirstname } />
                { 
                    informationError ?
                    <p> {informationError} </p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value)} />
                { 
                    informationError ?
                    <p> {informationError} </p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value)} />
            </div>
            {
                informationError ?
                <input type="submit" value="Create User" disabled /> :
                <input type="submit" value="Create User" />
            }
            </form>
            <div>
                <h3>Your form data</h3>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirmpassword}</p>
            </div>
        </div>
    );
};

export default UserForm;