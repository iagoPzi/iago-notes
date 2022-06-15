import { Plus } from "phosphor-react";


interface NoteInputButtonProps{
    OnAddRequest: ()=>void;

}



export function NoteInputButton(props: NoteInputButtonProps) {
  return (
    <button onClick={props.OnAddRequest}
    className="bg-blue-800 rounded-full aspect-square text-white p-5 flex flex-col justify-center items-center">
      <span className="text-[2rem] ">
        <Plus />
      </span>
      <h3 className="text-[1.25rem]">Adicionar!</h3>
    </button>
  );
}
