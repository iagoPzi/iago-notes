import { XCircle } from "phosphor-react";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export function Note() {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <>
      {notes.length === 0 ? (
        <h1>Sem notas</h1>
      ) : (
        <>
          {Object.entries(notes).map((note) => {
            return (
              <div
                key={note[0]}
                className="bg-blue-800 text-zinc-200 rounded-md p-3 m-2 overflow-auto w-[10rem] aspect-square scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-400 relative "
              >
                <button
                  onClick={() => deleteNote(note[1])}
                  className="absolute left-2 top-2"
                >
                  <XCircle />
                </button>
                <h2 className="font-bold underline underline-offset-2 mb-2">
                  {note[1].name}
                </h2>
                <p className="leading-5">{note[1].description}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
