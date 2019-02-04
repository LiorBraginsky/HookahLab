import React from "react";

const Alerts = ({ error, value }) => {
  return (
    <div>
      {error && (
        <div
          style={{
            color: "red"
          }}
        >
          {error} {value}
        </div>
      )}
    </div>
  );
};

export default Alerts;
