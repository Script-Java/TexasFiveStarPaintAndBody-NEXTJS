import BeforeAndAfterContent from './BeforeAndAfterContent';

export const metadata = {
  title: 'Before & After Auto Body Repair Photos',
  description: 'See dramatic before and after transformations from Texas Five Star Paint & Body. Collision repair, paint restoration, PDR, and classic car bodywork in Garland, TX.',
  alternates: { canonical: '/before-and-after' },
  openGraph: {
    title: 'Before & After Photos | Texas Five Star Paint & Body',
    description: 'See dramatic before and after auto body repair transformations from our Garland, TX shop.',
    url: '/before-and-after',
  },
};

export default function BeforeAndAfterPage() {
  return <BeforeAndAfterContent />;
}
