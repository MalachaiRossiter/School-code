import React, {useState} from 'react';

const ListForm = (props) => {
    
    const {todoListArray, setTodoListArray} = props;

    const [item, setItem] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const todoItem = {
            text: item,
            complete: false
        }
        
        setTodoListArray([...todoListArray, todoItem]);
        setItem("");
        console.log(todoListArray);
    };

    const handleItem = (e) => {
        setItem(e.target.value);
        if (e.target.value.length === 0) {
            setError("");
        } else if (e.target.value.length < 2){
            setError("please input more information");
        } else {
            setError("");
        }
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Input new Item for List</h1>
                <input type="text" name="item" value={item} onChange={ handleItem }/>
                {
                    error ?
                    <p>{error}</p>:
                    ''
                }
                <input type="submit" value="Add Item" />
            </form>
        </div>
    )
}

export default ListForm;