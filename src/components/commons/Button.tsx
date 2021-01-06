import Link from 'next/link';
import React, { FunctionComponent } from 'react';

type Props = {
  variant?: string;
  href?: string;
  label?: string;
  isLink: boolean;
};

const Button: FunctionComponent<Props> = ({ variant, href, label, isLink }) => {
  return (
    <>
      {isLink ? (
        <Link href={href}>
          <a className={variant}>{label}</a>
        </Link>
      ) : (
        <button type="button" className={variant}>
          {label}
        </button>
      )}
    </>
  );
};
export default Button;
