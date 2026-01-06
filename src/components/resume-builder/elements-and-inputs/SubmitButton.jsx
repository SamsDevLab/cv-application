import { generalData } from "../../../../data";

/*
Pseudo:

• Submit btn updates the section obj with 'state' (working)
• Submit btn NEEDs to update the resume at the proper section
*/

function SubmitButton({ state, section }) {
  const handleGeneralUpdate = () => {
    generalData.name = state.name;
    generalData.email = state.email;
    generalData.phone = state.phone;
  };

  const routeSectionUpdate = () => {
    if (section === "general") handleGeneralUpdate();
  };

  return <button onClick={() => routeSectionUpdate()}>Submit</button>;
}

export default SubmitButton;
