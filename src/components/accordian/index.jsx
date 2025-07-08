import { useState } from "react";

import data from "./app";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  function handlesinglereq(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handlesinglereq(dataItems.id)}>
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItems.id ? (
                <div className="content">{dataItems.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
