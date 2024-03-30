import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ onClose, isOpen, children }) => {
  return isOpen
    ? createPortal(
        <div
          className="grid place-items-center backdrop-blur h-screen absolute top-0 w-screen z-60"
        >
          <div className="Modal m-auto z-50 relative">
            <div className="close-icon">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
        </div>,
        document.getElementById("modal-root")
      )
    : null;
};

export default Modal;
