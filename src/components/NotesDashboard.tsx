import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useContext, useState } from "react";
import { Note } from "./Note";
import { NotesContext } from "./NotesContext";


export function NotesDashboard() {
  const [isSobreActive, setIsSobreActive] = useState(false);
  const { notes } = useContext(NotesContext);

  return (
    <>
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-blue-800 font-bold text-right m-3 text-blue-800 flex flex-col md:w-full">
        <div className="flex justify-end gap-3 pr-5">
        <span className="bg-blue-900 text-white rounded-full h-4 p-3 aspect-square flex items-center justify-center font-thin text-sm">{notes.length}</span>
          <h2
            onClick={() => setIsSobreActive(false)}
            className="cursor-pointer underline underline-offset-4"
          >
            Suas notas
          </h2>
          <h2 onClick={() => setIsSobreActive(true)} className="cursor-pointer underline underline-offset-4">
            Sobre
          </h2>
        </div>

        {!isSobreActive ? (
          <div className="flex flex-wrap justify-center mt-4">
            <Note />
          </div>
        ) : (
          <div className="drop-shadow-2xl shadow-black text-left bg-zinc-300 w-fit self-center text-blue-900 p-4 rounded-md mt-5">
            <p className="mb-2">
              Projeto feito por{" "}
              <strong className="underline">
                {" "}
                <a href="https://www.linkedin.com/in/pziago/" target="_blank">
                  Iago Pzivitovski
                </a>
              </strong>{" "}
            </p>
            <p className="">Tecnologias utilizadas</p>
            <ul>
              {Object.entries(Tecnologias).map((Tec) => {
                return <li key={Tec[0]}>{Tec[1]}</li>;
              })}
            </ul>
            <div className="flex justify-center items-center gap-2 text-2xl mt-2">
              <a href="https://github.com/iagoPzi" target="_blank"
              className="hover:bg-blue-900 hover:text-white rounded-full p-2 transition-all"><GithubLogo /></a>
              <a href="https://www.linkedin.com/in/pziago/" target="_blank"
              className="hover:bg-blue-900 hover:text-white rounded-full p-2 transition-all"><LinkedinLogo /></a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const Tecnologias = {
  1: "React",
  2: "Typescript",
  3: "TailwindCSS",
  4: "ContextAPI",
};
