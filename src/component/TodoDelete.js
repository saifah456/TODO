const  deleteHandler = (props) => {
    props.updateTodo((oldTodo)=> {
        return oldTodo.filter((item) => item.id !== props.itemid ? true : false )
    })  
}

export default function Delete(props){
    return(
        <button onClick={() => deleteHandler(props)}>Delete</button>
    )
}