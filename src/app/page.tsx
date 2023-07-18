import Khinong from './khinong/page';
import { images } from './khinong/data/images';
import { Metadata } from 'next';
import { textData } from './khinong/data/text';

export const metadata: Metadata = {
  openGraph: {
    title: textData.title,
    description: textData.description,
    images: [
      {
        url: images.cardThumbnail,
        width: 500,
        height: 500,
        alt: textData.title,
      },
    ],
    type: 'website',
    siteName: 'Tomonso Invites',
  },
};

export default function Home() {
  return <Khinong />;
}
