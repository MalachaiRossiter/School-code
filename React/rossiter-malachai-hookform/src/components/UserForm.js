import React, {useState} from "react";

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {firstname, lastname, email, password, confirmpassword};
        console.log("Welcome ", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };

    return(
        <div>
            <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label>
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value)} />
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value)} />
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
            <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your form data</h3>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirmpassword}</p>
                <p>{newUser}</p>
            </div>
        </div>
    );
};

export default UserForm;