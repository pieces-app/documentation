import {MiniSpacer} from "@site/src/components/Spacers";
import CTAButton from "@site/src/components/CTAButton";

const Card = ({
  title,
  href,
  icon,
  description
}: {
  title: string,
  href: string,
  icon: string
  description?: string,
}) => {
  return (
    <a className={`grid-card` + (description ? '' : ' grid-card-hover')} href={href}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img
            src={icon}
            alt={title}
            width={40}
          />
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>{title}</span>
        </div>
        {description ? (
          <>
            <MiniSpacer/>
            <p>{description}</p>
          </>
        ) : (
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
          </svg>
        )}
        </div>

        {description ? (
          <CTAButton
          label={'Get Started'}
        href={href}
        type={'secondary'}
        fullWidth={true}
      />
      ) : null}
    </a>
  );
}

export default Card;
