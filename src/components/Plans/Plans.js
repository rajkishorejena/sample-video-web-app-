import React from "react";
import "./Plans.css";
const Plans = () => {
  const plans = [
    {
      id: 1,
      planType: "Netflix Standard",
      subscription: false,
    },
    {
      id: 2,
      planType: "Netflix Basic",
      subscription: false,
    },
    {
      id: 2,
      planType: "Netflix Premium",
      subscription: true,
    },
  ];
  return (
    <div className="planComponent">
      {plans.map((item) => {
        return (
          <div id={item.id} className="planComponent__item">
            <h4>{item.planType}</h4>
            {item.subscription ? (
              <button
                className="planComponent__button"
                style={{ backgroundColor: "grey" }}
                disabled
              >
                CurrentPlan
              </button>
            ) : (
              <button
                className="planComponent__button"
                style={{ backgroundColor: "#e50914" }}
              >
                Subscribe
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
