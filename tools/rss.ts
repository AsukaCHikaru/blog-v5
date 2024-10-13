import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { getBlogPostList } from '../services/markdownServices';

const generateRssFeed = ({
  siteData,
  feedData,
}: {
  siteData: string;
  feedData: string;
}) => {
  return `<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
${siteData}
${feedData}
</channel>
</rss>`;
};

const generateSiteData = ({
  title,
  link,
  description,
  language,
  lastBuildDate,
}: {
  title: string;
  link: string;
  description: string;
  language: string;
  lastBuildDate: string;
}) => `<title>${title}</title>
<link>${link}</link>
<description>${description}</description>
<language>${language}</language>
<lastBuildDate>${lastBuildDate}</lastBuildDate>`;

const generateFeedData = async () => {
  const blogPostList = await getBlogPostList();
  return blogPostList
    .map(
      (blog) => `<item>
<title>${blog.title}</title>
<link>https://asukawang.com/blog/${blog.pathname}</link>${blog.description ? `<description>${blog.description}</description>` : ''
        }
<pubDate>${new Date(blog.publishDate).toUTCString()}</pubDate>
<guid>https://asukawang.com/blog/${blog.pathname}</guid></item>`,
    )
    .join('\n');
};

const writeFile = (feed: string) => {
  writeFileSync(resolve(process.cwd(), 'out', 'blog', 'feed.xml'), feed);
};

const feed = generateRssFeed({
  siteData: generateSiteData({
    title: 'Asuka Wang',
    link: 'https://asukawang.com',
    description: "Asuka Wang's blog",
    language: 'en-US',
    lastBuildDate: new Date().toUTCString(),
  }),
  feedData: await generateFeedData(),
});
writeFile(feed);
