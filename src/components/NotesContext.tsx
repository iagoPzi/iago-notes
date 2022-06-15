import { createContext, ReactNode, useState } from "react";

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
  // const [notes, setNotes] = useState<Note[]>([
  //   { name: "Teste", description: "Teste description" },
  // ]);

  const [notes, setNotes] = useState<Note[]>([]);

  function addNote(note: Note) {
    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(note: Note) {
    setNotes((prev) => prev.filter((n) => n !== note));
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}
