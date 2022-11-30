import { useState } from "react"

const Schedule = () => {

const [numberOfClickedFields, setnumberOfClickedFields]= useState(0)

    const editField = (e:any) =>{
        var clickedField = e.target
    
        if(e.target.nodeName == "TD"){
          
        let newId:string =  "clickedField" + numberOfClickedFields
        setnumberOfClickedFields(numberOfClickedFields+1)
        clickedField.id += newId
       
        let newUserInput = document.createElement("input");
        newUserInput.className += "userNote"

        let myElement = document.getElementById(newId)
        console.log(myElement)
            myElement?.appendChild(newUserInput)
     
    }
    }

return(<div id="schedule" onClick={editField}>
    <table>
        <thead> 
        
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
    </thead>
  
    
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
     
    </table>
</div>)
}
export default Schedule