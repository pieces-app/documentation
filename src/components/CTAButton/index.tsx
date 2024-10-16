import {useColorMode} from '@docusaurus/theme-common';
import Image from "../Image";

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
  const {colorMode} = useColorMode();

  // If the href starts with http, open in a new tab
  const newTab = props.href?.startsWith('http');

  if (typeof gaGlobal !== 'undefined') {
    console.log(gaGlobal);
    const vid = gaGlobal.vid;
    const fromCookie = gaGlobal.from_cookie;
    console.log(`VID: ${vid}, From Cookie: ${fromCookie}`);

    if (props.href?.startsWith('https://builds.pieces.app/stages/production')) {
      console.log('Link is a download link: ', props.href);
  
      props.href = `${props.href}?${gaGlobal?.vid ? `visitor=${gaGlobal?.vid}` : ''}&download=true&product=DOCUMENTATOIN_WEBSITE`;
    }
  } else {
    console.log('gaGlobal is not available.');
  }

  return (
    <a
      href={props.href}
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
      {
        props.icon || props.iconDark ? (
          // If the icon is a React element (object) and not a string, render it directly
          typeof props.icon === 'object' ? (
            props.icon
          ) : (
            colorMode === 'dark' && props.iconDark ? (
              <Image width={20} src={props.iconDark} alt={props.label} />
            ) : props.icon && (
              <Image width={20} src={props.icon} alt={props.label} />
            )
          )
        ) : null
      }

      {props.label}
    </a>
  )
}

export default CTAButton;
