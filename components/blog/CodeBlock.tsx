import { FC, PropsWithChildren, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import csharp from 'highlight.js/lib/languages/csharp';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/base16/google-dark.css';
import styles from '@styles/blog/CodeBlock.module.css';

import { Code } from 'mdast';

hljs.registerLanguage('js', js);
hljs.registerLanguage('javascript', js);
hljs.registerLanguage('ts', ts);
hljs.registerLanguage('typescript', ts);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);

interface Props {
  lan?: Code['lang'];
}

export const CodeBlock: FC<PropsWithChildren<Props>> = ({ children, lan }) => {
  // highlight.js doesn't recognize "c#" in register
  const modifiedLan = lan === 'c#' ? 'csharp' : lan;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className={styles.block}>
      <code className={`${styles.code} language-${modifiedLan}`}>
        {children}
      </code>
    </pre>
  );
};
