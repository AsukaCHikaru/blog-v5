import React from "react";
import { Link } from "react-router-dom";

import { PostSummary } from "../../types";
// import { parseDateToEn } from "client/utils/dateTimeUtils";
// import { lanName } from "client/constants/string";

interface OwnProps {
  postSummary: PostSummary;
}

export const PostLink: React.VFC<OwnProps> = ({ postSummary }) => {
  return (
    <div>
      <div>
        <Link to={`/post/${postSummary.pathname}`}>{postSummary.title}</Link>
        {postSummary.language.map((lan, i) => (
          <Link
            to={`/post/${postSummary.pathname}${i === 0 ? "" : `?lan=${lan}`}`}
            key={`${postSummary.pathname}-${lan}`}
          >
            {/* {lanName[lan]} */}
            {lan}
          </Link>
        ))}
      </div>
      <div>
        {postSummary.publishDate}
        {/* {parseDateToEn(postSummary.publishedDate)} */}
      </div>
      <div>
        {postSummary.tags.map((tag) => (
          <Link to={`/tag/${tag}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
};
