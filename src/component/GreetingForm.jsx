import { useState } from "react";

function GreetingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName.trim() || 'John'} ${lastName.trim() || 'Doe'}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First Name"
          className="py-2 mb-2 border border-gray-200 rounded-md pr-14"
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="py-2 mb-2 border border-gray-200 rounded-md pr-14"
        />
      </label>
      <br />
      <button
        type="submit"
        className="bg-[#f0003c]  py-4 text-white font-bold rounded-lg px-20 active:shadow-lg active:shadow-red-700"
      >
        GREET ME
      </button>
    </form>
  );
}

export default GreetingForm;
