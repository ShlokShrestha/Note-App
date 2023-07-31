import React, { useState } from "react";
import '../assets/style.scss';

const AddNote = ({handleAddNote}) => {
  const [addNoteText, setAddNoteText] = useState("");
  const characterText = 200;
  function handleOnChange(e) {
    if(characterText - e.target.value.length >=0){
      setAddNoteText(e.target.value);
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    if(addNoteText.trim().length >0){
      handleAddNote(addNoteText);
      setAddNoteText('');
    }
  }

  return (
    <div className="note add">
      <textarea
        name="addnote"
        cols="10"
        rows="8"
        placeholder="Enter your note"
        value={addNoteText}
        onChange={handleOnChange}
      ></textarea>
      <div className="footer">
        <small>{characterText-addNoteText.length} remaning</small>
        <button className="save" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
