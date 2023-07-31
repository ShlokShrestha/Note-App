import React, { useState } from "react";
import NoteList from "./components/NoteList";
import Data from "./Data/Data";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import "./index.scss"

const App = () => {
  const [noteData, setNoteData] = useState(Data);

  const addNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...noteData, newNote];
    setNoteData(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = noteData.filter((curNote) => curNote.id !== id);
    setNoteData(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  const [mode, setMode] = useState(false);
  return (
    <div className={mode ? "dark-mode" : ""}>
      <div className="container">
        <Header handleMode={setMode} />
        <Search handleSearchText={setSearchText} />
        <NoteList
          noteData={noteData.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;

// const searchData = (data) => {
//   return data.filter((curnote) =>
//     curnote.text.toLowerCase().includes(searchText)
//   );
// };
// useEffect(() => {
//   const saveData = localStorage.getItem("My-note-app");
//   if (saveData) {
//     setNoteData(saveData);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem("My-note-app",JSON.stringify(noteData));
// }, [noteData]);
