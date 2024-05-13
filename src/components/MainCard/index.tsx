import CTAButton from "@site/src/components/CTAButton";

type MainCardProps = {
  icon: React.ReactElement,
  title: string,
  link: {
    href: string,
    text: string,
  },
  children: React.ReactNode
}

const MainCard = ({ icon, title, link: { href, text }, children }: MainCardProps) => {
  return (
    <div className={'main-card'}>
      <div className={'main-card-header'}>
        <div style={{ display: "flex" }}>
          { icon }

          <div className={'main-card-header-title'}>
            { title }
          </div>
        </div>

        <CTAButton
          href={href}
          label={text}
          type={'secondary'}
        />
      </div>

      { children }
    </div>
  );
};

export default MainCard;
