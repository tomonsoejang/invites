'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date('July 23, 2023').getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return (
    <div>
      <div
        style={{
          fontSize: '2rem',
          padding: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {countdown}
      </div>
    </div>
  );
}
