import { Happy_Monkey } from 'next/font/google';
import CountDown from './countdown';

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

  const displayCountdown = <CountDown />;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* {displayTitle} */}
      {displayCountdown}
    </div>
  );
}
