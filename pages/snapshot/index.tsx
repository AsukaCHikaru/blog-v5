import { SectionHeader } from '@components/SectionHeader';
import { SiteHeader } from '@components/SiteHeader';
import { GridLayout } from '@components/blog/layout/GridLayout';
import { MainContentLayout } from '@components/blog/layout/MainContentLayout';

const SnapshotPage = () => {
  return (
    <GridLayout>
      <SiteHeader />
      <SectionHeader title="SNAPSHOT" path="/snapshot" />
      <MainContentLayout>123</MainContentLayout>
    </GridLayout>
  );
};

export default SnapshotPage;
