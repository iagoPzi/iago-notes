import { createContext, ReactNode, useEffect, useState } from "react";

export interface Note {
  name: string;
  description: string;
}

interface NotesContextProviderProps {
  children: ReactNode;
}

interface NotesContextProps {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (note: Note) => void;
}

export const NotesContext = createContext<NotesContextProps>(
  {} as NotesContextProps
);

export function NotesContextProvider({
  children,
}: NotesContextProviderProps): React.ReactElement {

  
  let notesArr = JSON.parse(localStorage.getItem("notes") || "[]");
  const [notes, setNotes] = useState<Note[]>(notesArr);

  function addNote(note: Note) {
    setNotes((prev) => [...prev, note]);
    localStorage.setItem("notes", JSON.stringify([...notesArr, note]));
  }

  function deleteNote(note: Note) {
    setNotes((prev) => prev.filter((n) => n !== note));
    localStorage.setItem("notes", JSON.stringify(notesArr.filter((n: Note) => n !== note)));
  }


  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote}}>
      {children}
    </NotesContext.Provider>
  );
}
