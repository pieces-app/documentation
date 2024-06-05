import GridFlexRow from "@site/src/components/GridFlexRow";
import {useColorMode, useThemeConfig} from "@docusaurus/theme-common";

const SocialIcons = () => {
  const { colorMode } = useColorMode();


  return (
    <GridFlexRow type={'evenly'}>
      <a href="https://discord.gg/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/discord.png" alt="Discord" />
      </a>
      <a href="https://twitter.com/getpieces" target="_blank" rel="noreferrer">
        <svg width="40" height="40" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
            fill={colorMode === 'dark' ? 'white' : 'black'} />
        </svg>
        {/*<img width={50} src="/social/twitter.webp" alt="Twitter" />*/}
      </a>
      <a href="https://www.linkedin.com/company/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/linkedin.png" alt="LinkedIn"/>
      </a>
      <a href="https://www.youtube.com/@getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/youtube.webp" alt="YouTube"/>
      </a>
      <a href="https://www.instagram.com/getpieces" target="_blank" rel="noreferrer">
        <img width={50} src="/social/instagram.webp" alt="Instagram" />
      </a>
    </GridFlexRow>
  )
}

export default SocialIcons;
