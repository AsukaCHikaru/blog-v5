import { FC } from "react";
import { NotionBlock, NotionRichTextObject } from "../types/notion";

interface Props {
  block: NotionBlock;
}

export const PostBodyBlock: FC<Props> = ({ block }) => {
  return (
    <div className="mb-2 text-lg">
      <BlockContent block={block} />
    </div>
  );
};

const BlockContent: FC<Props> = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          {block.paragraph.text?.map((item, i) => (
            <RichTextItem item={item} key={item.plain_text + i} />
          ))}
        </p>
      );
    case "heading_1":
      return (
        <h2 className="mt-6 text-3xl">
          {block.heading_1.text[0].text.content}
        </h2>
      );
    case "heading_2":
      return (
        <h3 className="mt-6 text-2xl">
          {block.heading_2.text[0].text.content}
        </h3>
      );
    case "heading_3":
      return (
        <h4 className="mt-6 text-xl">{block.heading_3.text[0].text.content}</h4>
      );
    case "numbered_list_item":
      return (
        <ol>
          {block.numbered_list_item.text.map((t) => (
            <li key={t.plain_text}>{t.text.content}</li>
          ))}
        </ol>
      );
    case "bulleted_list_item":
      return (
        <ul className="list-disc list-inside">
          <li key={block.id}>
            {block.bulleted_list_item.text.map((item, i) => (
              <RichTextItem item={item} key={item.plain_text + i} />
            ))}
          </li>
        </ul>
      );
    case "code":
      return (
        <pre className="px-1 bg-gray-700 whitespace-pre-wrap rounded-sm">
          <code className="font-courier">
            {block.code?.text[0].text.content}
          </code>
        </pre>
      );
    case "image": {
      if (block.image.type === "file") {
        return (
          <div className="my-6">
            <img
              className="max-w-3xl max-h-[48rem] m-auto"
              src={block.image.file.url}
              alt={block.image.caption[0]?.plain_text}
            />
            <p className="text-center text-gray-400 text-md">
              {block.image.caption[0]?.plain_text}
            </p>
          </div>
        );
      }
      if (block.image.type === "external") {
        return (
          <div className="my-6">
            <img
              className="max-w-3xl max-h-[48rem] m-auto"
              src={block.image.external.url}
              alt={block.image.caption[0]?.plain_text}
            />
            <p className="text-center text-gray-400 text-md">
              {block.image.caption[0]?.plain_text}
            </p>
          </div>
        );
      }
    }
    case "divider":
      return <hr className="my-6 w-80 mx-auto" />;
    case "video":
      if (block.video.type === "external") {
        return (
          <div className="flex justify-center my-6">
            <div className="iframeWrapper w-full h-[27rem] mx-2">
              <iframe
                className="w-full h-full"
                id="ytplayer"
                src={block.video.external.url.replace(/watch\?v=/, "embed/")}
              />
            </div>
          </div>
        );
      }
    // todo: bookmark
    default:
      return null;
  }
};

interface RichTextItemProps {
  item: NotionRichTextObject;
}

const RichTextItem: FC<RichTextItemProps> = ({ item }) => {
  if (item.href) {
    return (
      <a
        className="text-blue-400 underline"
        href={item.href}
        rel="noreferrer noopener"
        target="_blank"
      >
        {item.plain_text}
      </a>
    );
  }

  if (item.annotations.code) {
    return (
      <code className="px-1 font-courier text-red-500 bg-gray-700 rounded-sm">
        {item.plain_text}
      </code>
    );
  }

  if (item.annotations.bold) {
    return <strong>{item.text.content}</strong>;
  }

  if (item.annotations.italic) {
    return <span className="italic">{item.text.content}</span>;
  }

  if (item.annotations.underline) {
    return <span className="underline">{item.text.content}</span>;
  }

  if (item.annotations.strikethrough) {
    return <span className="line-through">{item.text.content}</span>;
  }

  return <span>{item.text.content}</span>;
};
