import { useId } from 'react'
import Image from 'next/image';
import logo from '@/images/uaecodes-logo.png';

interface LogoProps {
    className?: string;
    width: number;
    height: number;
  }

export function Logo(prop: LogoProps) {
  let id = useId();

  return (
    <div className={prop.className}>
      <Image id={id} src={logo} alt='Logo' width={prop.width} height={prop.height} />
    </div>
  );
}