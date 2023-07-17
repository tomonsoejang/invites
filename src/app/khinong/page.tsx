import { Happy_Monkey } from 'next/font/google';
import CountDown from './countdown';
import Image from 'next/image';
import { images } from './data/images';
import Gallery from './gallery';

const happyMonkey = Happy_Monkey({
  weight: '400',
  subsets: ['latin'],
});

export default function Khinong() {
  const title = `Khinong's Solid Food`;

  const displayTitle = (
    <div
      className={happyMonkey.className}
      style={{
        fontSize: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {title}
    </div>
  );

  const cardImage = (
    <div style={{ width: '100%' }}>
      <Image
        src={images.card}
        alt="Picture of the author"
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );

  const displayCountdown = <CountDown />;

  const displayDesigner = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Designed at Tomonso FutureLabs
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#f8dbe0',
        paddingBottom: '2rem',
      }}
    >
      {cardImage}
      {/* {displayTitle} */}
      {displayCountdown}
      <Gallery />
      {displayDesigner}
    </div>
  );
}
