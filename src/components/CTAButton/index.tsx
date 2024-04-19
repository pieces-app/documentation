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
}

const CTAButton = ({ ...props }: CTAButtonProps) => {
  const {colorMode} = useColorMode();

  // If the href starts with http, open in a new tab
  const newTab = props.href?.startsWith('http');

  return (
    <a
      href={props.href}
      className={'cta-button'}
      style={{
        fontSize: props.type === 'secondary' ? '1rem' : '1.25rem',
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
              <Image width={20} src={props.iconDark} />
            ) : (
              <Image width={20} src={props.icon} />
            )
          )
        ) : null
      }

      {props.label}
    </a>
  )
}

export default CTAButton;
