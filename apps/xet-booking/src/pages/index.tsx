import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { StepsHeader } from '../components';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

export default function Home() {
  return (
    <>
      <StepsHeader />
    </>
  );
}
