import Link from 'next/link'
import React, {FunctionComponent} from 'react';

type Props = {
  variant?: string
  label?: String
  isLink: Boolean
}

const Button:FunctionComponent<Props> = ({variant,label,isLink}) => {
  return (
    <>
    { isLink
      ? <Link href="/generate">
          <a className={variant}>
              {label}
          </a>
        </Link>
      : <button type="button" className={variant}>{label}</button>
      
    }
      
    </>
  );
};
export default Button;
