import s from "./Modal.module.scss";

export function Modal({ children, onClose }) {
  const CloseHanlder = () => {
    onClose(false);
  };

  return (
    <div className={s.container} onClick={CloseHanlder}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
