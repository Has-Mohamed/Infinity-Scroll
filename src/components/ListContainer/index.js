import { useEffect, useState } from "react";
import  UpdateTickets from "../UpdateTickets/index";
import  TicketList  from "../TicketList/index";

const ListContainer = () => {
  const [tickets, setTickets] = useState([]);

  const [ticketIndex, setUpdateIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => {
    setUpdateIndex(null);
    setOpenModal(false);
  };

  const getTicketIndex = (index) => {
    setUpdateIndex(index);
    handleOpenModal();
  };

  useEffect(() => {
    // repopulate the list when count changes
    setTickets(
      new Array(10101).fill(null).map((_, i) => ({
        id: i,
        subject: `subject ${i}`,
        priority: `priority ${i}`,
        status: `status ${i}`,
        description: `description ${i}`,
      }))
    );
  }, []);

  const updateTickets = (newTickets) => {
    setTickets(newTickets);
  };

  // const addTicket = ()=>
  return (
    <div className="container my-5 ">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h4 className="mb-0">Plan Radar Tickets</h4>
        <button
          className="btn btn-primary text-white "
          title="Add"
          onClick={() => setOpenModal(true)}
        >
          <span>Add Ticket</span>
        </button>
      </div>

      <UpdateTickets
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        updateTickets={updateTickets}
        ticketIndex={ticketIndex}
        ticketsList={tickets} />

      <TicketList
        numItems={tickets.length}
        itemHeight={50}
        windowHeight={500}
        itemsArray={tickets}
        getTicketIndex={getTicketIndex} />
    </div>
  );
};

export default ListContainer