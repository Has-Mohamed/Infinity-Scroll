import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
const INITIAL_STATE = {
  subject: "",
  priority: "",
  status: "",
  description: "",
};
export default function UpdateTickets({
  openModal,
  handleCloseModal,
  ticketIndex,
  updateTickets,
  ticketsList,
}) {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const updateCondition = ticketIndex || ticketIndex === 0;
  const allFieldsValid = Object.values(formState).every((i) => i || i === 0);
  const updateTicket = () => {
    if (allFieldsValid) {
      const itemsClone = [...ticketsList];
      if (updateCondition) {
        itemsClone[ticketIndex] = { ...formState };
      } else {
        itemsClone.push({ id: ticketsList.length, ...formState });
      }
      handleCloseModal();
      updateTickets(itemsClone);
    }
  };

  const handleOnChange = ({ name, value }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      isOpen={openModal}
      toggle={handleCloseModal}
      onOpened={() => updateCondition && setFormState(ticketsList[ticketIndex])}
      onClosed={() => setFormState(INITIAL_STATE)}
    >
      <ModalHeader>{`${
        updateCondition ? "Update" : "Add"
      } Ticket`}</ModalHeader>
      <ModalBody>
        <form className="row">
          <div className=" mb-3 col-6">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              id="subject"
              value={formState["subject"]}
              onChange={(e) => {
                handleOnChange({ name: "subject", value: e.target.value });
              }}
              required={true}
            />
          </div>
          <div className=" mb-3 col-6">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Priority"
              id="priority"
              value={formState["priority"]}
              onChange={(e) => {
                handleOnChange({ name: "priority", value: e.target.value });
              }}
              required={true}
            />
          </div>
          <div className=" mb-3 col-6">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Status"
              id="status"
              value={formState["status"]}
              onChange={(e) => {
                handleOnChange({ name: "status", value: e.target.value });
              }}
              required={true}
            />
          </div>
          <div className=" mb-3 col-6">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              id="description"
              value={formState["description"]}
              onChange={(e) => {
                handleOnChange({
                  name: "description",
                  value: e.target.value,
                });
              }}
              required={true}
            />
          </div>
          {!allFieldsValid && (
            <div className="col-12">
              <p className="text-danger">Please fill out all fields</p>
            </div>
          )}
          <div className="d-flex ">
            <button className="btn btn-success mx-2 w-50" type="button" onClick={updateTicket}>
              {updateCondition ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="btn btn-danger mx-2 w-50"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}
