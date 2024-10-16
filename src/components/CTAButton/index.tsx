import React, { useState, useEffect } from 'react';

type CTAButtonProps = {
  label?: string
  href?: string
  // Primary is larger, secondary is smaller
  type?: 'primary' | 'secondary'
  icon?: string | React.ReactElement
  iconDark?: string
  disabled?: boolean
  fullWidth?: boolean
}

// Define the type for gaGlobal
interface GaGlobal {
  vid: string;
  from_cookie: boolean;
}

// Check if gaGlobal exists in the global scope
declare const gaGlobal: GaGlobal | undefined;

const CTAButton = ({ ...props }: CTAButtonProps) => {
  const [href, setHref] = useState(props.href);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof gaGlobal !== 'undefined') {
      const vid = gaGlobal.vid;

      if (props.href?.startsWith('https://builds.pieces.app/stages/production')) {
        // Need to ensure that vid is defined before appending it to the query string
        const updatedHref = `${props.href}?download=true&product=DOCUMENTATION_WEBSITE${vid && `&visitor=${vid}`}`;
        setHref(updatedHref);
      }
    }
  }, []);

  // If the href starts with http, open in a new tab
  const newTab = href?.startsWith('http');

  return (
    <a
      href={href} // Use the state variable here instead of props.href
      className={'cta-button'}
      style={{
        fontSize: props.type === 'secondary' ? '1rem' : '1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: props.fullWidth ? '100%' : undefined
      }}
      aria-disabled={props.disabled}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {/* ... (keep your existing icon rendering logic) */}
      {props.label}
    </a>
  )
}

export default CTAButton;
