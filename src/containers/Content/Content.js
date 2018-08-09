import React, { Component } from "react";
import Note from "../../components/Note/Note";
import Sidebar from "../../components/Sidebar/Sidebar";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [], // storage for all notes that have been saved
      currentNote: "" // current <textarea> input
    };
  }

  // gets input from <textarea> and saves it to state
  getInputHandler = event => {
    this.setState({
      currentNote: event.target.value
    });
  };

  // clicking the 'save' button saves the current <textarea> input to state 
  saveNoteHandler = event => {
    if (this.state.currentNote) {
      const notesCopy = this.state.notes; // create a copy of the notes stored so far
      const currentNoteCopy = this.state.currentNote; // create a copy of the current note content
      const id = Math.random() * 10 + currentNoteCopy.slice(0, 3); // create a (hopefully) random id to assign to each note
      notesCopy.push({ note: currentNoteCopy, id }); // adds the current input to the copy
      this.setState({
        notes: notesCopy,
        currentNote: ""
      });
    }
  };

  // clicking a note in the sidebar displays its content in the text area
  displayNoteHandler = event => {
    const notesCopy = this.state.notes; // create a copy of the notes stored so far
    const note = notesCopy.find(el => el.id === event.target.id); // retrieves the stored note based on the id of the clicked note
    this.setState({
      currentNote: note.note
    });
  };

  // clicking the delete button on a sidebar note, deletes the note from storage
  deleteNoteHandler = event => {
    const notesCopy = this.state.notes; // create a copy of the notes stored so far
    const index = notesCopy.findIndex(el => el.id === event.target.id); // finds the index of the element in the stored note based on the id of the clicked note
    notesCopy.splice(index, 1); // removes it from the stored notes
    this.setState({
      notes: notesCopy
    });
  };

  render() {
    const style = {
      position: "fixed",
      top: "20rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70rem",
      height: "50rem",
      border: '1px solid #ddd',
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "10px",
      boxShadow:
        "2px 0 5px 5px rgba(220, 220, 220, 0.2), -2px 0 5px 5px rgba(220, 220, 220, 0.2), 0 2px 5px 5px rgba(220, 220, 220, 0.2), 0 -2px 5px 5px rgba(220, 220, 220, 0.2)"
    };

    return (
      <main style={style}>
        <Sidebar notes={this.state.notes} clicked={this.displayNoteHandler} delete={this.deleteNoteHandler} />
        <Note
          change={this.getInputHandler}
          clicked={this.saveNoteHandler}
          value={this.state.currentNote}
        />
      </main>
    );
  }
}

export default Content;
