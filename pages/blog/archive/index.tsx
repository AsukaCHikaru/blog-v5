import { PostMetadata } from '@types';
import { getBlogPostList } from '../../../services/markdownServices';
import { SiteHead } from '@components/SiteHead';
import { PostListPage } from '@components/blog/PostListPage';
import { useSearchParams } from 'next/navigation';

interface Props {
  postList: PostMetadata[];
}

const Home = ({ postList }: Props) => {
  const params = useSearchParams();
  const categoryQuery = params.get('category') ?? undefined;
  const filteredList = categoryQuery
    ? postList.filter(
        (post) => post.category.toLowerCase() === categoryQuery?.toLowerCase(),
      )
    : postList;

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
  return {
    props: {
      postList,
    },
  };
}

export default Home;
