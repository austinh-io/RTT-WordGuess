import Button from "./Button";

type ModalProps = {
  active?: boolean
};

const Modal = () => {
  return (
    <div className="fixed w-[100dvw] h-[100dvh] m-0 p-0 top-0 left-0 bg-slate-900/90 backdrop-blur-lg z-10 flex items-center justify-center" >
      <div className="max-w-xs w-full bg-slate-700 p-10 mx-8 flex items-center justify-center flex-col gap-4 rounded-md">
        <p>Modal</p>
        <Button>Close Me</Button>
      </div>
    </div>
  );
};

export default Modal;
