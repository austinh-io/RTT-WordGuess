import Button from "./Button";

type ModalProps = {
  children: React.ReactNode;
  enabled?: boolean;
};

const Modal = ({children, enabled}: ModalProps) => {
  return (
    <div className={`${enabled ? 'auto' : 'hidden'} fixed w-[100dvw] h-[100dvh] m-0 p-0 top-0 left-0 bg-slate-900/90 backdrop-blur-lg z-10 flex items-center justify-center`} >
      <div className="max-w-xs w-full bg-slate-700 p-10 mx-8 flex items-center justify-center flex-col gap-4 rounded-md">
        {children}        
      </div>
    </div>
  );
};

export default Modal;
