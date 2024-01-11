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
    <div className={showModal ? "modalOn" : "modal-trigger"}>
      <button onClick={handleModal}>Trigger Modal</button>
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
