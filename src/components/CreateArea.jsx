import React, { useState } from "react";

function CreateArea(props) {

  const [isExp, setExp] = useState(false);

  function exp (){
  setExp(true);
  }

  const [note, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNotes({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        {isExp && <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />}
        
        <textarea
          name="content"
          onClick = {exp}
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExp ? 3 :1}
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
