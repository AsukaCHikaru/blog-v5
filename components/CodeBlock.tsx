import { FC, PropsWithChildren, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import csharp from "highlight.js/lib/languages/csharp";
import "highlight.js/styles/base16/google-dark.css";

import { Code } from "mdast";

hljs.registerLanguage("javascript", js);
hljs.registerLanguage("typescript", ts);
hljs.registerLanguage("csharp", csharp);

interface Props {
  lan?: Code['lang'];
}

export const CodeBlock: FC<PropsWithChildren<Props>> = ({ children, lan }) => {
  // highlight.js doesn't recognize "c#" in register
  const modifiedLan = lan === "c#" ? "csharp" : lan;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="my-6 border rounded-md text-base leading-4">
      <code className={`font-courier language-${modifiedLan} rounded-md`}>
        {children}
      </code>
    </pre>
  );
};
