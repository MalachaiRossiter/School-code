const ListDisplay = (props) => {
    const {todoListArray, setTodoListArray} = props;

    const deleteItem = (delItem) => {
        console.log(delItem);
        const filteredTodos = todoListArray.filter((item, i) => {
            return i !== delItem;
        })
        setTodoListArray(filteredTodos);
    }

    const toggleComplete = (checkedItem) => {
    //     const updatedTodos = todoListArray.map((item, i) => {
    //         if (checkedItem === i){
    //             item.complete = !item.complete;
    //             const updatedTodo = {...todoListArray};
    //             return updatedTodo;
    //         }
    //         return todoListArray;
    //     });
    //     setTodoListArray(updatedTodos);
        const updatedTodos = [...todoListArray];
        updatedTodos[checkedItem].complete = !updatedTodos[checkedItem].complete;
        setTodoListArray(updatedTodos);
    }

    return (
        <div>
            {
                todoListArray.map((item, index) => (
                    <div key={index}>
                        <p>{item.text}</p>
                        <input type="checkbox" checked={item.complete} name="finished" onChange={(e) => {toggleComplete(index)}} />
                        <button onClick={(e) => {deleteItem(index)}}>Delete</button>
                    </div>
                )
            )}
        </div>
    )
}

export default ListDisplay;