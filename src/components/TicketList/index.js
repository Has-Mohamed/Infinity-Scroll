import { useState } from "react";
import TicketRow from "./TicketRow/index";

const TicketList = (props) => {
  const {
    numItems,
    itemHeight,
    windowHeight,
    itemsArray = [],
    getTicketIndex,
  } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + (windowHeight / itemHeight) 
  

  const onScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className="shadow-sm p-3 mb-5 rounded overflow-hidden">
      <div
        className="scroll"
        style={{ overflowY: "scroll", height: "450px", width: "100%" }}
        onScroll={onScroll}
      >
        <div
          style={{
            boxSizing: "border-box",
            padding: "5px",
            width: "100%",
            position: "sticky",
            zIndex: 1,
            top: 0,
            backgroundColor: "white",
          }}
          className="d-flex fw-bold shadow-sm"
        >
          <span className="w-25 d-flex align-items-center">Subject</span>
          <span className="w-25 d-flex align-items-center">Priority</span>
          <span className="w-25 d-flex align-items-center">Status</span>
          <span className="w-25 d-flex align-items-center">Description</span>
          <span className="w-auto px-3 d-flex align-items-center">Edit</span>
        </div>
        <div
          className="inner"
          style={{ position: "relative", height: `${innerHeight}px` }}
        >
          {/* {items} */}
          {itemsArray.slice(startIndex, endIndex + 1).map((i, ind) => {
            // const index = ind + startIndex;
            // console.log(i);
            return (
              <TicketRow
                key={i.id}
                onEdit={() => getTicketIndex(i.id)}
                itemsDetails={i}
                style={{
                  position: "absolute",
                  top: `${i.id * itemHeight}px`,
                  width: "100%",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
