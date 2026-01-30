
import "./App.css";
// import { useState } from "react";
import { useState, useEffect } from "react";
// import noteService from "./services/note";
import noteService from "./services/note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState("");


  useEffect(() => {
     const fetchNote = async () => {
    try {
      const fetchedNote = await noteService.getAll();
      setNotes(fetchedNote);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };
  fetchNote();
  }, []);
 
  const handleSubmit = (e) => { 


    e.preventDefault();
    console.log(userInput);
    important: Math.random() < 0.5,

  };

 const newNote = noteService.create(newObject);
  return (
    <>

    <div>
      <h2>Input field </h2>
      <form onSubmit={handleSubmit}>
        <label>
          content:
          <input 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type here" />
          <button type="submit">Submit</button>

        </label>
      </form>

    </div>
      <div>
        <h1>My notes</h1>
        {notes.map((note) => (
          <p key={note.id}>{note.content}</p>
        ))}
      </div>
    </>
  );
};
export default App;
