import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Collision Repair, Custom Paint & PDR Services',
  description: 'Expert collision repair, custom paint jobs, auto restoration, and paintless dent repair at Texas Five Star Paint & Body in Garland, TX.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Texas Five Star Paint & Body',
    description: 'Expert collision repair, custom paint, auto restoration, and PDR in Garland, TX.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
