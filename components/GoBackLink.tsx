import Link from 'next/link';
import Icon from './Icon';

export type GoBackLinkProps = {
  href: string;
  className?: string;
}

export default function GoBackLink({ href, className = ''}: GoBackLinkProps) {
  return (
    <Link 
      aria-label='Go back to previous page or home page'
      href={href}
      className={`
        flex items-center justify-center
        absolute top-8 left-8
        ${className}
      `}
    >
      <Icon type='goBack' />
    </Link>
  );
}