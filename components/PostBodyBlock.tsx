import { FC } from "react";
import { CodeBlock } from "./CodeBlock";
import {
  BlockContent,
  Content,
  DefinitionContent,
  List,
  ListItem,
  PhrasingContent,
} from "mdast";
import Image from "next/image";

interface Props {
  block: Content;
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
          {block.children.map((item, i) => (
            <RichTextItem item={item} key={i} />
          ))}
        </p>
      );

    case "heading":
      switch (block.depth) {
        case 1:
          return (
            <h2 className="mt-6 text-3xl">
              {block.children.map((item, i) => (
                <RichTextItem item={item} key={i} />
              ))}
            </h2>
          );
        case 2:
          return (
            <h3 className="mt-6 text-2xl">
              {block.children.map((item, i) => (
                <RichTextItem item={item} key={i} />
              ))}
            </h3>
          );
        case 3:
          return (
            <h4 className="mt-6 text-xl">
              {block.children.map((item, i) => (
                <RichTextItem item={item} key={i} />
              ))}
            </h4>
          );
      }

    case "list":
      const b = block as List;
      if (b.ordered) {
        return (
          <ol className="list-decimal list-inside">
            {b.children.map((t, i) => (
              <li key={i}>
                <div className="inline-block">
                  <RichTextItem item={t} />
                </div>
              </li>
            ))}
          </ol>
        );
      } else {
        return (
          <ul className="list-disc list-inside">
            {b.children.map((t, i) => (
              <li key={i}>
                <div className="inline-block">
                  <RichTextItem item={t} />
                </div>
              </li>
            ))}
          </ul>
        );
      }

    case "code":
      return <CodeBlock lan={block.lang}>{block.value}</CodeBlock>;

    case "blockquote":
      return (
        <div className="my-8 text-center whitespace-pre-wrap text-gray-600 dark:text-gray-400">
          <BlockContent block={block.children[0]} />
        </div>
      );

    case "thematicBreak":
      return <hr className="my-6 w-80 mx-auto" />;

    // todo: bookmark
    default:
      return null;
  }
};

interface RichTextItemProps {
  item: PhrasingContent | ListItem | BlockContent | DefinitionContent;
}

const RichTextItem: FC<RichTextItemProps> = ({ item }) => {
  switch (item.type) {
    case "text":
      return <span>{item.value}</span>;

    case "link":
      return (
        <a
          href={item.url}
          className="text-blue-400 underline"
          rel="noreferrer noopener"
          target="_blank"
        >
          <RichTextItem item={item.children[0]} />
        </a>
      );

    case "strong":
      return (
        <strong>
          <RichTextItem item={item.children[0]} />
        </strong>
      );

    case "emphasis":
      return (
        <span className="italic">
          <RichTextItem item={item.children[0]} />
        </span>
      );

    case "inlineCode":
      return (
        <code className="px-1 font-courier text-red-500 bg-gray-700 rounded-sm">
          {item.value}
        </code>
      );

    case "listItem":
      return <BlockContent block={item.children[0]} />;

    case "image":
      // TODO: image size
      return (
        <Image
          src={"/images/" + item.url}
          alt={item.alt || ""}
          width={600}
          height={400}
        />
      );

    // TODO: strikethrough (need remark GFM plugin)
    default:
      return <span>FIXME</span>;
  }
};
