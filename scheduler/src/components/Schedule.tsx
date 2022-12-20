import { useState } from "react"


const Schedule = () => {

const [numberOfNotes, setNumberOfNotes]= useState (1)

    

    const displayMessage = (e:any) => {
        let clickedField = e.target.parentNode
        let newText:string = e.target.value
        if (newText.length>0){
        //create a display box for the new note
        let newNoteBox = document.createElement("div")
        //add node#1 to h1
        let newHeader = document.createElement("h3")
        newHeader.textContent = "Note#"+numberOfNotes;
        // post phrase to parent element
        let newPhrase = document.createElement("p")
        let newId = "note" + numberOfNotes
        newPhrase.id = newId;
        setNumberOfNotes(numberOfNotes+1) 
        newPhrase.textContent = newText;
        // add remove note button
        let newRemoveButton = document.createElement("i")
        newRemoveButton.className = "fas fa-times"
        newRemoveButton.onclick = () => {
            let noteToDelete:any = document.getElementById(newId)
            let parentElement = noteToDelete.parentNode;
            let grandParent = parentElement.parentNode
            grandParent?.removeChild(parentElement)
        }
        // append childs to parents
        newNoteBox.appendChild(newHeader)
        newNoteBox.appendChild(newRemoveButton)
        newNoteBox.appendChild(newPhrase)
      
        clickedField.appendChild(newNoteBox)
        // remove inputfield
        clickedField.removeChild(e.target)
        } else {
            clickedField.removeChild(e.target)
        }
    }

    const checkPressedKey = (e:any) =>{
    if (e.keyCode == 13){
        e.target.onblur = ""
        displayMessage(e)
    }
    }

    const editField = (e:any) =>{
        var clickedField = e.target
        if(clickedField.nodeName == "TD"){ // check if clicked field was an TD 
        let newElement = document.createElement("textarea");
        newElement.onkeyup = checkPressedKey
        newElement.placeholder = "Enter your note friend"
        newElement.onblur = displayMessage // onblur event to leave a node when input has finished
        clickedField.appendChild(newElement)
        
    }
    }


return(<div id="schedule" onClick={editField}>

    <table>
        <thead> 
            <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
        </tr>
    </thead>
  
    <tbody>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
       
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
      
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
    </table>
</div>)
}
export default Schedule