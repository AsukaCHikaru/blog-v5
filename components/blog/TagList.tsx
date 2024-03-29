import { FC, useMemo } from 'react';
import { PostSummary } from '@types';

interface Props {
  postSummaryList: PostSummary[];
  selectedTag?: string;
  onTagClick: (tag: string) => void;
}

export const TagList: FC<Props> = ({
  postSummaryList,
  selectedTag,
  onTagClick,
}) => {
  const tagList = useMemo(() => {
    const result: string[] = [];
    postSummaryList
      .flatMap((postSummary) => postSummary.tags)
      .forEach((tag) => {
        if (result.includes(tag)) {
          return;
        }
        result.push(tag);
      });
    return result.sort();
  }, [postSummaryList]);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-medium mb-4">Tags</h2>
      <div className="pr-8">
        {tagList.map((tag, i) => (
          <span
            key={`tag-${tag}`}
            className={`${
              selectedTag === tag ? 'font-bold' : ''
            } mr-1 text-lg leading-8`}
          >
            <button onClick={() => onTagClick(tag)}>
              {tag}
              {i === tagList.length - 1 ? null : ','}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
