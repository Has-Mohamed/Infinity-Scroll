import edit from "../../../assets/images/edit.svg";


const TicketRow = ({ style, itemsDetails, onEdit }) => {
  return (
    <div
      className={`d-flex ${itemsDetails.id % 2 ? "bg-white" : "bg-light"}`}
      // key={itemsDetails.id}
      style={{
        height: "50px",
        boxSizing: "border-box",
        padding: "5px",
        ...style,
      }}
    >
      <span className="w-25 d-flex align-items-center">{itemsDetails.subject}</span>
      <span className="w-25 d-flex align-items-center">{itemsDetails.priority}</span>
      <span className="w-25 d-flex align-items-center">{itemsDetails.status}</span>
      <span className="w-25 d-flex align-items-center">{itemsDetails.description}</span>
      <span className="w-auto px-3 d-flex align-items-center">
        <button className="btn px-0" title="Edit" onClick={onEdit}>
          <img alt="add" src={edit} width={24} />
        </button>
      </span>
    </div>
  );
};

export default TicketRow