import { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

export default function ModalParent() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }

  return (
    <div className="modal-trigger">
      <h1 className="text-3xl font-bold p-10">Modal Parent Project</h1>
      <button onClick={handleModal} className="bg-green-500 text-white ">
        Trigger Modal
      </button>
      {showModal && (
        <Modal
          onClose={onClose}
          heading="Custom Heading"
          body="Custom Body"
          footer="Custom Footer"
          id="1"
        />
      )}
    </div>
  );
}
