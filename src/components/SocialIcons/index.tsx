import GridFlexRow from "@site/src/components/GridFlexRow";

const SocialIcons = () => {
  return (
    <GridFlexRow type={'evenly'}>
      <a href="https://discord.gg/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/discord.png" alt="Discord" />
      </a>
      <a href="https://twitter.com/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/twitter.webp" alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/company/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/linkedin.webp" alt="LinkedIn" />
      </a>
      <a href="https://www.youtube.com/@getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/youtube.webp" alt="YouTube" />
      </a>
      <a href="https://www.instagram.com/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/instagram.webp" alt="Instagram" />
      </a>
    </GridFlexRow>
  )
}

export default SocialIcons;
