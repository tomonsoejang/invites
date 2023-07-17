import Khinong from './khinong/page';
import { images } from './khinong/data/images';
import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: `Khinong's Solid Food`,
    description: `Join us on Khinong's solid food`,
    images: [
      {
        url: images.cardThumbnail,
        width: 500,
        height: 500,
        alt: `Khinong's Solid Food`,
      },
    ],
    type: 'website',
    siteName: 'Tomonso Invites',
  },
};

export default function Home() {
  return <Khinong />;
}
