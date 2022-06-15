import { NoteInput } from "./NoteInput";
import { NotesContextProvider } from "./NotesContext";
import { NotesDashboard } from "./NotesDashboard";

export function Geral() {
  return (
    <>
      <main className="flex flex-col w-[100vw] h-[100vh] md:flex-row justify-between">
        <NotesDashboard />
        <NoteInput />
      </main>
    </>
  );
}
