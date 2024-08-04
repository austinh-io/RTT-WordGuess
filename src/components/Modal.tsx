type ModalProps = {
	children: React.ReactNode;
	enabled?: boolean;
	onClose: () => void;
};

const Modal = ({ children, enabled, onClose }: ModalProps) => {
	return (
		<div
			className={`${
				enabled ? 'opacity-100 visible' : 'opacity-0 invisible'
			} fixed w-[100dvw] h-[100dvh] m-0 p-0 inset-0  z-10 flex items-center justify-center aria-hidden=${!enabled}`}
		>
			<div
				onClick={onClose}
				className={`${
					enabled ? 'visible' : 'invisible'
				}fixed inset-0 z-20 w-full h-full bg-slate-900/90 backdrop-blur-lg`}
			></div>
			<div className='fixed z-30 max-w-xs w-full bg-slate-700 p-10 mx-8 flex items-center justify-center flex-col gap-4 rounded-md'>
				{children}
			</div>
		</div>
	);
};

export default Modal;
