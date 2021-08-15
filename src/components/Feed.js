import React from "react";

import FeedHeader from "./FeedHeader";
import Tweet from "./Tweet";

const Feed = (props) => {
  return (
    <div className="p-2">
      <FeedHeader />

      {props.tweets.map((tweet, index) => {
        return <Tweet key={index} name={tweet.name} tweet={tweet.tweet} />;
      })}
    </div>
  );
};

export default Feed;
