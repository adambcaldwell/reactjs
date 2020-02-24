import React from "react";

/**
 * @component functional
 * @name ApprovalCard
 * @description Approval card component
 * @param {Object} props          - properties of approval card
 * @param {Object} props.children - child object to be displayed as content in the approval card
 */
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
