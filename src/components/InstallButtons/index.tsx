import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CTAButton from "@site/src/components/CTAButton";

import React, { useEffect, useState } from "react";

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
  )
}

// React component to render buttons based on OS
const OSBasedButtons: React.FC = () => {
  const os = useOS();

  return (
    <div>
      {os === "Mobile" ? (
        <button>Mobile Button</button>
      ) : (
        <DesktopButtons />
      )}
    </div>
  );
};

export default OSBasedButtons
