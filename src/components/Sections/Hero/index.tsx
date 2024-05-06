import CTAButton from "@site/src/components/CTAButton";
import Image from "@site/src/components/Image";

const Hero = ({
  title,
  subtitle,
  image,
  cta
}:{
  title: string,
  subtitle: string,
  image: {
    src: string,
    alt: string
    width?: number
  }
  cta?: {
    label: string,
    href: string
  }
}) => {
  return (
    <div className={'hero-container'}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0'
      }}>
        <h1
          style={{color: 'var(--ifm-color-primary-darkest)', fontSize: '2.5rem', textAlign: 'center', marginBottom: 0}}>
          {title}
        </h1>
        <p style={{color: 'var(--ifm-color-primary-darkest)', fontSize: '1rem', textAlign: 'center'}}>
          {subtitle}
        </p>
        {cta && (
          <CTAButton
            href={cta.href}
            label={cta.label}
          />
        )}
      </div>

      <Image alt={image.alt} src={image.src} width={image.width ?? 500} />
    </div>
  );
}

export default Hero;
