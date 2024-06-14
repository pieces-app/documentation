import {MiniSpacer} from "@site/src/components/Spacers";
import CTAButton from "@site/src/components/CTAButton";

const Card = ({
  title,
  description,
  href,
  icon
}: {
  title: string,
  description: string,
  href: string,
  icon: string
}) => {
  return (
    <div className={'grid-card'}>
      <div className="card-content">
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
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>{title}</span>
        </div>
        <MiniSpacer/>
      </div>

      <CTAButton
        label={'Get Started'}
        href={href}
        type={'secondary'}
        fullWidth={true}
      />
    </div>
  );
}

export default Card;
