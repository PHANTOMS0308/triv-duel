import Link from 'next/link';
import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  href: string;
  highlight?: boolean;
  ariaLabel?: string;
  className?: string;
}

export default function ButtonLink(props: ButtonProps) {
  const { children, highlight=false, ariaLabel, href, className='' } = props;

  return (
    <Link
      { ...(ariaLabel ? { "aria-label": ariaLabel } : {}) }
      href={ href }
      className={`btn ${highlight ? 'btn--highlight' : ''} ${ className }`}
    >
      { children }
    </Link>
  )
}