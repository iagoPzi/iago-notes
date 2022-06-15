import { useState } from "react";
import { NoteInputButton } from "./NoteInputButton";
import { NoteInputForm } from "./NoteInputForm";

export function NoteInput() {
  const [isAddButtonActive, setIsAddButtonActive] = useState(true);

  return (
    <>
    <div className="bg-transparent w-full md:max-w-[25rem] flex flex-col justify-end h-fit md:h-full md:justify-center md:flex-row">

    <span className="bg-zinc-400 w-full h-10 mb-[-2rem] skew-y-1 z-10 md:h-full md:w-10 md:-skew-x-1 md:skew-y-0 md:mr-[-2rem]"></span>
      <div className="z-20 bg-zinc-400 grid place-content-center h-[13rem] w-full md:h-full">
        {isAddButtonActive ? (
          <NoteInputButton
            OnAddRequest={() => setIsAddButtonActive(!isAddButtonActive)}
          />
        ) : (
          <NoteInputForm
            OnAddRequest={() => setIsAddButtonActive(!isAddButtonActive)}
          />
        )}
      </div>
    </div>
    </>
  );
}
