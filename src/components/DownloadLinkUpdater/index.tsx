import React, { useEffect } from 'react';

// Define the type for gaGlobal
interface GaGlobal {
  vid: string;
  from_cookie: boolean;
}

// Check if gaGlobal exists in the global scope
declare const gaGlobal: GaGlobal | undefined;

const DownloadLinkUpdater: React.FC = () => {
  useEffect(() => {
    // Ensure the window object is available, indicating we're in the browser
    if (typeof window !== 'undefined' && typeof gaGlobal !== 'undefined') {
      const vid = gaGlobal.vid; // Extract the visitor ID from the global gaGlobal object

      // Get all anchor (<a>) elements on the page
      const links = document.querySelectorAll('a[href^="https://builds.pieces.app/stages/production"]');

      // Loop through each link and update its href
      links.forEach(link => {
        const currentHref = link.getAttribute('href');

        if (currentHref) {
          // Construct the new href with the required query parameters
          const newHref = `${currentHref}?download=true&product=DOCUMENTATION_WEBSITE${vid && `&visitor=${vid}`}`;

          // Update the href attribute on the link
          link.setAttribute('href', newHref);
        }
      });
    } else {
      if (typeof window && typeof gaGlobal === 'undefined') {
        console.warn('gaGlobal is not defined in local development');
      }
    }
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return null; // This component doesn’t need to render anything
};

export default DownloadLinkUpdater;
