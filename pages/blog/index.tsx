import { getBlogPostList } from '../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { useContext, useEffect } from 'react';
import { SiteContext } from 'pages/_app';
import {
  BlogCategoryList,
  convertPostListToCategories,
} from '@utils/blogUtils';
import { PostMetadata } from '@utils/markdownUtils';
import { PostListPage } from '@components/blog/PostListPage';
import { useSearchParams } from 'next/navigation';

interface Props {
  postList: PostMetadata[];
  categories: BlogCategoryList;
}

const Home = ({ postList, categories }: Props) => {
  const params = useSearchParams();
  const categoryQuery = params.get('category') ?? undefined;
  const filteredList = categoryQuery
    ? postList.filter(
        (post) => post.category.toLowerCase() === categoryQuery?.toLowerCase(),
      )
    : postList;
  const context = useContext(SiteContext);

  useEffect(() => {
    if (!context) {
      return;
    }
    context.activeSection = 'blog';
    if (context.blogCategories.length) {
      return;
    }
    context.blogCategories = categories;
  }, [categories, context]);

  return (
    <>
      <SiteHead
        title="Blog | Asuka Wang"
        description="Essays, reviews and notes."
      />
      <PostListPage postList={filteredList} category={categoryQuery} />
    </>
  );
};
export async function getStaticProps() {
  const postList = await getBlogPostList();
  const categories = convertPostListToCategories(postList);
  return {
    props: {
      postList,
      categories,
    },
  };
}

export default Home;
