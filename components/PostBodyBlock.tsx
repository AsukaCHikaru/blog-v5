import { FC } from "react";
import { NotionBlock, NotionRichTextObject } from "../types/notion";

interface Props {
    block: NotionBlock;
}

export const PostBodyBlock: FC<Props> = ({block}) => {
  switch(block.type) {
    case "paragraph":
        return <p>{block.paragraph.text?.map((item, i) => <RichTextItem item={item} key={item.plain_text + i} />)}</p>
    default:
        return null;
  }
}


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
  