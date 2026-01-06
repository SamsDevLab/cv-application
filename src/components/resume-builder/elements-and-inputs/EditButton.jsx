/*
Pseudo:
• 
*/
import { generalData } from "../../../../data";

function EditButton() {
  const showEdit = () => {
    console.log(generalData);
  };

  return <button onClick={() => showEdit()}>Edit</button>;
}

export default EditButton;
