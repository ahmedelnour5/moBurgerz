import React, { useState } from "react";
import { Modal } from "@mui/base/Modal";

const EditItemModal = ({ open, onClose, children }) => {
  if (!open) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
    >
      <div className="w-[600px] ">
        <div className=" bg-white p-3 rounded-md h-[500px] flex flex-col">
          <button
            className="text-red-500 text-xl place-self-end font-bold"
            onClick={() => onClose()}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
