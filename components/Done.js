import React from "react";
import Lottie from "lottie-react";
import done1 from "../public/done.json";

const Done = ({ done, setDone }) => {
  const handleShowMessage = () => {
    setTimeout(() => {
      setDone(null);
    }, 1800);
  };
  return (
    <div>
      <input type="checkbox" id="done" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box pattern-bg">
          <h3 className="font-bold text-2xl text-center text-primary">
            Complete Pc Build
          </h3>
          <div>
            <Lottie
              animationData={done1}
              loop={true}
              style={{ height: "300px" }}
            />
          </div>
          <div className="flex justify-center">
            <label htmlFor="done" onClick={handleShowMessage()}></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
