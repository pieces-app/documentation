import GridFlexRow from "@site/src/components/GridFlexRow";
import {MiniSpacer} from "@site/src/components/Spacers";
import Image from "@site/src/components/Image";

const ProductIcons = () => {
  return (
    <>
      <GridFlexRow type={'evenly'}>
        <a href="/extensions-plugins/web-extension"><Image width={70} src="/assets/chromium_logo.svg" /></a>
        <a href="/extensions-plugins/vscode"><Image width={70} src="/assets/vscode_logo.png" /></a>
        <a href="/extensions-plugins/jetbrains"><Image width={70} src="/assets/jetbrains_logo.png" /></a>
        <a href="/extensions-plugins/visual-studio"><Image width={70} src="/assets/visual_studio_logo.png" /></a>
        <a href="/extensions-plugins/web-extension"><Image width={70} src="/assets/edge_logo.png" /></a>
      </GridFlexRow>

      <MiniSpacer />

      <GridFlexRow type={'evenly'}>
        <a href="/extensions-plugins/teams"><Image width={70} src="/assets/teams_logo.png" /></a>
        <a href="/extensions-plugins/obsidian"><Image width={70} src="/assets/obsidian_logo.png" /></a>
        <a href="/extensions-plugins/jupyterlab"><Image width={70} src="/assets/jupyterlab_logo.png" /></a>
      </GridFlexRow>
    </>
  )
}

export default ProductIcons;
