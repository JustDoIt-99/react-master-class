import React, {useState} from "react";

function App() {

   const [value, setValue] = useState("");
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       const {currentTarget: { value }} = event;
       setValue(value);
   };

   const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
       event.preventDefault();
       console.log("hello", value);
   }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input
                value={value}
                onChange={onChange}
                type="text"
                placeholder="username"
            />
            <button>Log in</button>
        </form>
    </div>
  )
}

export default App;
