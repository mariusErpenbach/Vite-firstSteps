import { useState } from "react"


const Schedule = () => {

const [numberOfNotes, setNumberOfNotes]= useState (0)

    

    const displayMessage = (e:any) => {
        let clickedField = e.target.parentNode
        let newText:string = e.target.value
        // post phrase to parent element
        let newPhrase = document.createElement("p")
        let newId = "note" + numberOfNotes
        newPhrase.id = newId;
        setNumberOfNotes(numberOfNotes+1)
        newPhrase.textContent = newText;
        // add remove note button
        let newRemoveButton = document.createElement("div")
        newRemoveButton.innerHTML = "O"
        newRemoveButton.onclick = () => {
            let noteToDelete:any = document.getElementById(newId)
            let parentElement = noteToDelete.parentNode;
            parentElement?.removeChild(noteToDelete)
        }
        // append childs to parents
        newPhrase.appendChild(newRemoveButton)
        clickedField.appendChild(newPhrase)
        // remove inputfield
        clickedField.removeChild(e.target)
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
        let newElement = document.createElement("input");
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