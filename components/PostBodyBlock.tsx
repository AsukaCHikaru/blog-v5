import { FC } from "react";
import { CodeBlock } from "./CodeBlock";
import { Content, List, PhrasingContent } from "mdast";

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
  switch(block.type) {
    case "paragraph": 
    return (
      <p>

      {block.children.map((item, i) => <RichTextItem item={item} key={i} />)}
      </p>
    )
    case "heading":
      switch(block.depth) {
        case 1:
          return <h2 className="mt-6 text-3xl">{block.children.map((item, i) => <RichTextItem item={item} key={i} />)}</h2>
        case 2:
          return <h3 className="mt-6 text-2xl">{block.children.map((item, i) => <RichTextItem item={item} key={i} />)}</h3>
        case 3:
          return <h4 className="mt-6 text-xl">{block.children.map((item, i) => <RichTextItem item={item} key={i} />)}</h4>
      }
  
    case "list":
      const b = block as List;
      if (b.ordered) {

        return (
          <ol>
            {b.children.map((t,i) => (
              <li key={i}><RichTextItem item={t} /></li>
            ))}
          </ol>
        );
      } else {
        return (
                <ul className="list-disc list-inside">
                  {b.children.map((t,i) => (
              <li key={i}><RichTextItem item={t} /></li>
            ))}
                </ul>
                )
      }
  
    case "code":
      return (
        <CodeBlock lan={block.lang}>
          {block.value}
        </CodeBlock>
      );
    case "blockquote":
      return (
        <div className="my-8 text-center whitespace-pre-wrap text-gray-600 dark:text-gray-400">
          <RichTextItem item={block.children[0]} />
        </div>
      );

      // TODO: image
    // case "image": {
    //   if (block.image.type === "file") {
    //     return (
    //       <div className="my-6">
    //         <img
    //           className="max-w-3xl max-h-[48rem] m-auto"
    //           src={block.image.file.url}
    //           alt={block.image.caption[0]?.plain_text}
    //         />
    //         <p className="text-center text-gray-400 text-md">
    //           {block.image.caption[0]?.plain_text}
    //         </p>
    //       </div>
    //     );
    //   }
    // }
    case "thematicBreak":
      return <hr className="my-6 w-80 mx-auto" />;
  //     if (block.image.type === "external") {
  //       return (
  //         <div className="my-6">
  //           <img
  //             className="max-w-3xl max-h-[48rem] m-auto"
  //             src={block.image.external.url}
  //             alt={block.image.caption[0]?.plain_text}
  //           />
  //           <p className="text-center text-gray-400 text-md">
  //             {block.image.caption[0]?.plain_text}
  //           </p>
  //         </div>
  //       );
  //     }
  //   }
  //   case "divider":
  //     return <hr className="my-6 w-80 mx-auto" />;
  //   case "video":
  //     if (block.video.type === "external") {
  //       return (
  //         <div className="flex justify-center my-6">
  //           <div className="iframeWrapper w-full h-[27rem] mx-2">
  //             <iframe
  //               className="w-full h-full"
  //               id="ytplayer"
  //               src={block.video.external.url.replace(/watch\?v=/, "embed/")}
  //             />
  //           </div>
  //         </div>
  //       );
  //     }
    // todo: bookmark
    default:
      return null;
  }
};

interface RichTextItemProps {
  item: PhrasingContent
}

const RichTextItem: FC<RichTextItemProps> = ({ item }) => {
  switch (item.type) {
    case 'text':
      return <span>{item.value}</span>

    case 'link':
      return <a href={item.url} 
      className="text-blue-400 underline"
        rel="noreferrer noopener"
        target="_blank"
      ><RichTextItem item={item.children[0]} /></a>

    case "strong":
      return <strong><RichTextItem item={item.children[0]} /></strong>;

    case "emphasis":
      return <span className="italic"><RichTextItem item={item.children[0]} /></span>;

    case "inlineCode":
      return <code className="px-1 font-courier text-red-500 bg-gray-700 rounded-sm">
        {item.value}
        </code>
      
    // TODO: strikethrough (need remark GFM plugin)
    default:
      return <span>FIXME</span>;
  }
};
