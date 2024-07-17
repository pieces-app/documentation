import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CTAButton from "@site/src/components/CTAButton";
import React, { useEffect, useState } from "react";
import GridFlexRow from "@site/src/components/GridFlexRow";
import Admonition from "@theme/Admonition";

// Helper function to detect the OS
function detectOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;

  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  const androidPlatforms = ["Android"];
  const linuxPlatforms = ["Linux", "X11"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "macOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return "Windows";
  } else if (
    linuxPlatforms.indexOf(platform) !== -1 ||
    platform.includes("Linux")
  ) {
    return "Linux";
  } else if (
    iosPlatforms.indexOf(platform) !== -1 ||
    androidPlatforms.some((p) => userAgent.includes(p))
  ) {
    return "Mobile";
  } else {
    return "unknown";
  }
}

// Custom hook to get the OS
function useOS() {
  const [os, setOS] = useState("unknown");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOS(detectOS());
    }
  }, []);

  return os;
}


const DesktopButtons = () => {
  return (
    <GridFlexRow type={'start'}>
      <CTAButton
        href="/installation-getting-started/windows"
        label={"Get Pieces for Windows"}
        icon={'/assets/windows_logo_old.png'}
        type={'secondary'}
      />
      <CTAButton
        href="/installation-getting-started/macos"
        label={"Get Pieces for macOS"}
        icon={'/assets/mac_os.png'}
        iconDark={'/assets/mac_os_dark.png'}
        type={'secondary'}
      />
      <CTAButton
        href="/installation-getting-started/linux"
        label={"Get Pieces for Linux"}
        icon={'/assets/linux_logo.png'}
        type={'secondary'}
      />
    </GridFlexRow>
  )
}

// React component to render buttons based on OS
export const PiecesInstallOSBasedButtons: React.FC = () => {
  const os = useOS();

  return (
    <>
      {os === "Mobile" ? (
        <>
          <Admonition type="info">
            Pieces is only available on desktop. Please click below to request an email with download instructions for when you're back on a desktop computer.
          </Admonition>

          <CTAButton
            href="https://getpieces.typeform.com/to/aVQFTvpE?typeform-source=pieces.app"
            label={"Get Pieces Install Link"}
            icon={<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>}
            type={'secondary'}
          />
        </>
      ) : (
        <DesktopButtons />
      )}
    </>
  );
};

export const PiecesOSInstallOSBasedButtons: React.FC = () => {
  const os = useOS();

  return (
    <>
      {os === "Mobile" ? (
        <>
          <Admonition type="info">
            Pieces is only available on desktop. Please click below to request an email with download instructions for when you're back on a desktop computer.
          </Admonition>

          <CTAButton
            href="https://getpieces.typeform.com/to/aVQFTvpE?typeform-source=pieces.app"
            label={"Get Pieces Install Link"}
            icon={<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>}
            type={'secondary'}
          />
        </>
      ) : (
        <>
          <p>Whether you are on macOS, Windows, or Linux, find tailored instructions to get Pieces OS up and running on your machine.</p>

          <Tabs defaultValue={"macos"} values={[{label: 'macOS', value: 'macos'}, {label: 'Windows', value: 'windows'}, {label: 'Linux', value: 'linux'}]}>
            <TabItem value="macos">
              <p>Compatible with macOS 11.0 (Big Sur) and higher</p>
              <CTAButton
                href="/installation-getting-started/macos"
                label={"Get Pieces for macOS"}
                icon={'/assets/mac_os.png'}
                iconDark={'/assets/mac_os_dark.png'}
                type={'secondary'}
              />
            </TabItem>

            <TabItem value="windows">
              <p>Compatible with Windows 10 version 1809 and higher</p>
              <CTAButton
                href="/installation-getting-started/windows"
                label={"Get Pieces for Windows"}
                icon={'/assets/windows_logo_old.png'}
                type={'secondary'}
              />
            </TabItem>
            <TabItem value="linux">
              <p>Compatible with Ubuntu 18 or higher (Currently in Beta)</p>
              <CTAButton
                href="/installation-getting-started/linux"
                label={"Get Pieces for Linux"}
                icon={'/assets/linux_logo.png'}
                type={'secondary'}
              />
            </TabItem>
          </Tabs>
        </>
      )}
    </>
  )
}
