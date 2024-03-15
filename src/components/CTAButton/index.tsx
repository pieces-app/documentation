import {useColorMode} from '@docusaurus/theme-common';
import Image from "../Image";

type CTAButtonProps = {
  label: string
  href: string
  // Primary is larger, secondary is smaller
  type?: 'primary' | 'secondary'
  icon?: string
  iconDark?: string
}

const CTAButton = ({ ...props }: CTAButtonProps) => {
  const {colorMode} = useColorMode();

  return (
    <a
      href={props.href}
      className={'cta-button'}
      style={{
        fontSize: props.type === 'secondary' ? '1rem' : '1.25rem',
      }}
    >
      {props.icon || props.iconDark ? (
        colorMode === 'dark' && props.iconDark ? (
          <Image width={20} src={props.iconDark} />
        ) : (
          <Image width={20} src={props.icon} />
        )
      ) : null}
      {props.label}
    </a>
  )
}

export default CTAButton;
