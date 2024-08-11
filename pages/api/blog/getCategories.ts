import { NextApiRequest, NextApiResponse } from 'next';
import { getBlogPostList } from 'services/markdownServices';

export default async function getCategories(
  _: NextApiRequest,
  res: NextApiResponse,
) {
  const blogList = await getBlogPostList();
  const categories = blogList.map((post) => post.category);

  const categoryCountList: { name: string; count: number }[] = [];
  categories.forEach((category) => {
    const thisCategoryCountItem = categoryCountList.find(
      (item) => item.name === category,
    );
    if (thisCategoryCountItem) {
      thisCategoryCountItem.count += 1;
    } else {
      categoryCountList.push({ name: category, count: 1 });
    }
  });

  res.status(200).send(categoryCountList);
}
