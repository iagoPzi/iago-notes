import { FormEvent, useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

interface NoteInputFormProps {
  OnAddRequest: () => void;
}

export function NoteInputForm(props: NoteInputFormProps) {
  const [note, setNote] = useState({ name: "", description: "" });

  const { addNote } = useContext(NotesContext);

  function AddNoteRequest(e: FormEvent) {

    e.preventDefault();

    if (note.description === '') {
      alert("Preencha ao menos a descrição da nota!");
    } else {
      
      props.OnAddRequest();
      addNote(note);
    }

  }


  return (
    <>
      <form
        onSubmit={AddNoteRequest}
        className="bg-blue-800 flex flex-col gap-2 p-5 rounded-md"
      >
        <input
          value={note.name}
          onChange={(e) => setNote({ name: e.target.value, description:note.description})}
          placeholder="Nome   "
          className="rounded-md p-2"
        />

        <textarea
          required
          value={note.description}
          onChange={(e) => setNote({ name:note.name ,description: e.target.value})}
          placeholder="Descrição"
          className="rounded-md p-2"
        />

        <button onClick={AddNoteRequest} type="submit" className="bg-white rounded-md py-1 text-blue-800 font-bold">
          Adicionar Nota!
        </button>
      </form>
    </>
  );
}
