import { useState } from "react"
import EditModal from "./EditModal"

export default function Edit(props){

const [modalShow,setModal]=useState(false)

    return(
        <>
        <button onClick={() => setModal(true)}>Edit</button>
        
        <EditModal
        show={modalShow}
        itemid={props.itemid}
        itemtitle={props.itemtitle}
        updateTodo={props.updateTodo}
        onHide={() => setModal(false)}
      />

        </>
    )
}