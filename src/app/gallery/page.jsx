import GalleryContent from './GalleryContent';

export const metadata = {
  title: 'Work Gallery - Before & After Auto Body Repair Photos',
  description: 'Browse our portfolio of collision repairs, custom paint jobs, auto restorations, and paintless dent repair work at Texas Five Star Paint & Body in Garland, TX.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Our Work Gallery | Texas Five Star Paint & Body',
    description: 'Browse collision repairs, custom paint jobs, and restoration work from our Garland, TX shop.',
    url: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
