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
      style={{
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        fontSize: props.type === 'secondary' ? '1rem' : '1.25rem',
        gap: '10px',
        padding: '10px 20px',
        backgroundColor: 'var(--ifm-color-primary)',
        color: 'var(--ifm-color-secondary)',
        fontWeight: 'bold',
        borderRadius: '5px',
        textDecoration: 'none',
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
