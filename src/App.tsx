import "../global.css";
import { Geral } from "./components/Geral";
import { NotesContextProvider } from "./components/NotesContext";

function App() {
  return (
    <>
      <NotesContextProvider>
        <Geral />
      </NotesContextProvider>
    </>
  );
}

export default App;
