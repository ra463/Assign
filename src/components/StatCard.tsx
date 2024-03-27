import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  increase: string;
  percentage: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  increase,
  percentage,
}) => {
  return (
    <div className="card">
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
      <div>
        <span
          className={`nothing ${increase.includes("+") && "green"} ${
            increase.includes("-") && "red"
          }`}
        >
          {increase}
        </span>
        <span>{percentage}</span>
      </div>
    </div>
  );
};

export default StatCard;
