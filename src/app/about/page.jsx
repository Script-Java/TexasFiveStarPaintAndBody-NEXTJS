import AboutContent from './AboutContent';

export const metadata = {
  title: 'About Us | Family-Owned Auto Body Shop in Garland, TX',
  description: 'Meet the team behind Texas Five Star Paint & Body - a family-owned Garland, TX auto body shop with 15+ years of experience, 1,000+ satisfied customers, and a perfect 5-star Google rating.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Texas Five Star Paint & Body',
    description: 'Family-owned, trusted auto body shop serving Garland and DFW for 15+ years.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
