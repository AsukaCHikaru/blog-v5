import { FC, useEffect } from 'react';
import { Content, Heading } from 'mdast';
import { getHeadingBlockPlainText } from '../utils/markdownUtils';

interface Props {
  postContent: Content[];
}

const depthMarginCap: Record<number, string> = {
  1: '',
  2: 'ml-4',
  3: 'ml-8',
};

export const ContentIndex: FC<Props> = ({ postContent }) => {
  const headingBlocks = postContent.filter(
    (block) => block.type === 'heading',
  ) as Heading[];
  const contentIndexes = headingBlocks
    .map(({ depth, children }) => ({ children, depth }))
    .map(({ depth, children }) => {
      return {
        depth,
        content: children
          .map((block) => getHeadingBlockPlainText(block))
          .join(''),
      };
    })
    .map((heading) => ({
      depthClassname: depthMarginCap[heading.depth],
      text: heading.content,
      id: encodeURIComponent(heading.content.toLowerCase()),
    }));

  return (
    // TODO: sticky
    <ul>
      {contentIndexes.map((heading) => (
        <li
          key={`content-indexn-${heading}`}
          className={`${heading.depthClassname} mb-2`}
        >
          <a href={`#${heading.id}`} className="text-lg leading-5">
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
