import GridFlexRow from "@site/src/components/GridFlexRow";

// title: 'Socials',
//   items: [
//   {
//     label: 'Discord',
//     href: 'https://discord.gg/getpieces',
//   },
//   {
//     label: 'Twitter',
//     href: 'https://twitter.com/getpieces',
//   },
//   {
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/company/getpieces',
//   },
//   {
//     label: 'YouTube',
//     href: 'https://www.youtube.com/@getpieces',
//   },
//   {
//     label: 'Instagram',
//     href: 'https://www.instagram.com/getpieces',
//   }

const SocialIcons = () => {
  return (
    <GridFlexRow type={'evenly'}>
      <a href="https://twitter.com/getpieces" target="_blank" rel="noreferrer">
        <img src="/social/twitter.svg" alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/company/getpieces" target="_blank" rel="noreferrer">
        <img src="/social/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://www.youtube.com/@getpieces" target="_blank" rel="noreferrer">
        <img src="/social/youtube.svg" alt="YouTube" />
      </a>
      <a href="https://www.instagram.com/getpieces" target="_blank" rel="noreferrer">
        <img src="/social/instagram.svg" alt="Instagram" />
      </a>
    </GridFlexRow>
  )
}

export default SocialIcons;
