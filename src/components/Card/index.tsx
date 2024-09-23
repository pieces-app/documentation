// import {MiniSpacer} from "@site/src/components/Spacers";
// import CTAButton from "@site/src/components/CTAButton";
// import {useColorMode} from "@docusaurus/theme-common";
//
// const Card = ({
//   title,
//   href,
//   icon,
//   darkIcon,
//   description
// }: {
//   title: string,
//   href: string,
//   icon: string
//   darkIcon?: string
//   description?: string,
// }) => {
//   const { colorMode } = useColorMode()
//
//   return (
//     <a className={'grid-card'} href={href}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: description ? 'flex-start' : 'center',
//         flexDirection: description ? 'column' : 'row',
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '10px'
//         }}>
//           <img
//             src={darkIcon && colorMode === 'dark' ? darkIcon : icon}
//             alt={title}
//             width={40}
//           />
//           <span style={{
//             fontSize: '1.25rem',
//             fontWeight: 'bold'
//           }}>{title}</span>
//         </div>
//         {description ? (
//           <>
//             <MiniSpacer/>
//             <p>{description}</p>
//           </>
//         ) : (
//           <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
//           </svg>
//         )}
//       </div>
//
//       {description ? (
//         <CTAButton
//           label={'Get Started'}
//           href={href}
//           type={'secondary'}
//           fullWidth={true}
//         />
//       ) : null}
//     </a>
//   );
// }
//
// export default Card;

import {MiniSpacer} from "@site/src/components/Spacers";
import CTAButton from "@site/src/components/CTAButton";
import {useColorMode} from "@docusaurus/theme-common";

const CardWithCTA = ({
  title,
  href,
  icon,
  darkIcon,
  description,
  ctaLabel
}: {
  title: string,
  href: string,
  icon: string,
  darkIcon?: string,
  description: string,
  ctaLabel: string,
}) => {
  const { colorMode } = useColorMode()

  return (
    <div className={'grid-card'}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {icon && (
            <img
              src={darkIcon && colorMode === 'dark' ? darkIcon : icon}
              alt={title}
              width={40}
            />
          )}
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>{title}</span>
        </div>
        <MiniSpacer/>
        <p>{description}</p>
      </div>
      <CTAButton
        label={ctaLabel ?? 'Get Started'}
        href={href}
        type={'secondary'}
        fullWidth={true}
      />
    </div>
  );
}

const CardWithoutCTA = ({
  title,
  href,
  icon,
  darkIcon
}: {
  title: string,
  href: string,
  icon: string,
  darkIcon?: string
}) => {
  const { colorMode } = useColorMode()

  return (
    <a className={'grid-card-link'} href={href}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {icon && (
            <img
              src={darkIcon && colorMode === 'dark' ? darkIcon : icon}
              alt={title}
              width={40}
            />
          )}
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>{title}</span>
        </div>
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
        </svg>
      </div>
    </a>
  );
}

export { CardWithCTA, CardWithoutCTA };
