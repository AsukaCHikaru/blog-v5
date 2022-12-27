import Image from "next/image";
import { FC } from "react";
import { NotionBlock, NotionRichTextObject } from "../types/notion";

interface Props {
  block: NotionBlock;
}

export const PostBodyBlock: FC<Props> = ({ block }) => {
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
      return <h2>{block.heading_1.text[0].text.content}</h2>;
    case "heading_2":
      return <h3>{block.heading_2.text[0].text.content}</h3>;
    case "heading_3":
      return <h4>{block.heading_3.text[0].text.content}</h4>;
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
        <ul>
          <li key={block.id}>
            {block.bulleted_list_item.text.map((item, i) => (
              <RichTextItem item={item} key={item.plain_text + i} />
            ))}
          </li>
        </ul>
      );
    case "code":
      return <code className="whitespace-pre-wrap">{block.code?.text[0].text.content}</code>;
    case "image": {
      if (block.image.type === "file") {
        return (
          <Image
            src={block.image.file.url}
            alt={block.image.caption[0]?.plain_text}
          />
        );
      }
      if (block.image.type === "external") {
        return (
          <Image
            src={block.image.external.url}
            alt={block.image.caption[0]?.plain_text}
          />
        );
      }
    }
    case "divider":
      return <hr />;
    case "video":
      if (block.video.type === "external") {
        return (
          <div className="iframeWrapper" key={block.id}>
            <iframe
              id="ytplayer"
              src={block.video.external.url.replace(/watch\?v=/, "embed/")}
            />
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

const RichTextItem: React.VFC<RichTextItemProps> = ({ item }) => {
  if (item.href) {
    return (
      <a href={item.href} rel="noreferrer noopener" target="_blank">
        {item.plain_text}
      </a>
    );
  }

  if (item.annotations.code) {
    return <code>{item.plain_text}</code>;
  }

  if (item.annotations.bold) {
    return <strong>{item.text.content}</strong>;
  }

  if (item.annotations.italic) {
    return <i>{item.text.content}</i>;
  }

  if (item.annotations.underline) {
    return <span className="underline">{item.text.content}</span>;
  }

  if (item.annotations.strikethrough) {
    return <span className="line-through">{item.text.content}</span>;
  }

  return <span>{item.text.content}</span>;
};
