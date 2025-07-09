import { useState } from "react";

import data from "./app.js";

export default function Accordian() {
  const [selected, setSelected] = useState(false);
  function handleselected(getCurrentId) {
    setSelected(getCurrentId===selected?null:getCurrentId);
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handleselected(dataItems.id)}>
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItems.id ? <div>{dataItems.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
