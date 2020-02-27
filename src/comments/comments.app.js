import React from "react";
import faker from "faker";
import CommentDetail from "./comment-detail.component";
import ApprovalCard from "./approval-card.component";

function CommentsApp() {
  return (
    <body>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            time={faker.date.recent().toString()}
            comment={faker.random.words(10)}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            time={faker.date.recent().toString()}
            comment={faker.random.words(10)}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            time={faker.date.recent().toString()}
            comment={faker.random.words(10)}
          />
        </ApprovalCard>
      </div>
    </body>
  );
}

export default CommentsApp;
