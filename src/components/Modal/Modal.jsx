export default function Modal({ id, heading, body, footer, onClose }) {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div id={id || "modal-1"} className="modal-head">
          <span onClick={onClose}>&times;</span>
          <h2>{heading ? heading : "Modal Heading"}</h2>
        </div>
        <div className="modal-body">
          <p>{body ? body : "Modal Body"}</p>
        </div>
        <div className="modal-foot">
          <h3>{footer ? footer : "Modal Footer"}</h3>
        </div>
      </div>
    </div>
  );
}
