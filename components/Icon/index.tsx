import PATHS from './paths';

export type IconProps = {
  type: keyof typeof PATHS;
  size?: string;
  fill?: string;
  stroke?: string;
  className?: string;
}

export default function Icon(props: IconProps) {
  const { 
    type, fill='none', size='32', 
    stroke='currentColor', className ='' 
  } = props;
  const pathComponent = PATHS[type];

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden={ true }
      width={ size }
      height={ size }
      fill={ fill } 
      stroke={ stroke } 
      className={ className } 
    >
      { pathComponent }
    </svg>
  )
}