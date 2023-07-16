import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ noteData, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notelist">
      {noteData.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          text={item.text}
          date={item.date}
          handleDeleteNote={handleDeleteNote}
      
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
