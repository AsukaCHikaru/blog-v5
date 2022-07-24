import React from "react";

import { NotionBlock, NotionRichTextObject } from "../types/notion";

interface OwnProps {
  block: NotionBlock;
}

export const PostBodyBlock: React.FC<OwnProps> = ({ block }) => {
  if (block.type === "paragraph") {
    return (
      <p>
        {block.paragraph.text?.map((item, i) => (
          <RichTextItem item={item} key={item.plain_text + i} />
        ))}
      </p>
    );
  }
  if (block.type === "heading_1") {
    return <h2>{block.heading_1.text[0].text.content}</h2>;
  }
  if (block.type === "heading_2") {
    return <h3>{block.heading_2.text[0].text.content}</h3>;
  }
  if (block.type === "heading_3") {
    return <h4>{block.heading_3.text[0].text.content}</h4>;
  }
  if (block.type === "numbered_list_item") {
    return (
      <ol>
        {block.numbered_list_item.text.map((t) => (
          <li key={t.plain_text}>{t.text.content}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "bulleted_list_item") {
    return (
      <ul>
        <li key={block.id}>
          {block.bulleted_list_item.text.map((item, i) => (
            <RichTextItem item={item} key={item.plain_text + i} />
          ))}
        </li>
      </ul>
    );
  }
  if (block.type === "code") {
    return <pre>{block.code?.text[0].text.content}</pre>;
  }
  if (block.type === "image") {
    if (block.image.type === "file") {
      return (
        <img
          src={block.image.file.url}
          // caption={block.image.caption[0]?.plain_text}
        />
      );
    }
    if (block.image.type === "external") {
      return (
        <img
          src={block.image.external.url}
          // caption={block.image.caption[0]?.plain_text}
        />
      );
    }
  }
  if (block.type === "divider") {
    return <div />;
  }
  if (block.type === "video") {
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
  }
  // todo: bookmark
  return null;
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
    return <span>{item.text.content}</span>;
  }

  if (item.annotations.underline) {
    return <span>{item.text.content}</span>;
  }

  if (item.annotations.strikethrough) {
    return <span>{item.text.content}</span>;
  }

  return <span>{item.text.content}</span>;
};
