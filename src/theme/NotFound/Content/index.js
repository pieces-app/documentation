import React from 'react';
import clsx from 'clsx';
import CTAButton from "/src/components/CTAButton";
import GridFlexRow from "@site/src/components/GridFlexRow";
import {MiniSpacer} from "@site/src/components/Spacers";

export default function NotFoundContent({className}) {
  return (
    <main className={'hero-container'}>
      <div>
        <h1 className="hero__title">You found a dead end!</h1>
        <p>It seems like you've found a missing link. Don't worry, it happens to the best of us!</p>

        <hr/>

        <h2>Get Started with Pieces for Developers</h2>
        <ul>
          <li><a href={'/installation-getting-started/what-am-i-installing'}>What is Pieces for Developers?</a></li>
          <li><a href={'https://youtube.com/@getpieces'}>Video Tutorials</a></li>
          <li><a href={'/faq'}>FAQs</a></li>
        </ul>

        <h2>Explore Plugins</h2>
        <GridFlexRow type={'start'}>
          <CTAButton
            href={'/extensions-plugins/vscode'}
            label={'VS Code Extension'}
            icon={'/assets/vscode_logo.png'}
            type={'secondary'}
          />
          <CTAButton
            href={'/extensions-plugins/jetbrains'}
            label={'JetBrains Plugin'}
            icon={'/assets/jetbrains_logo.png'}
            type={'secondary'}
          />
          <CTAButton
            href={'/extensions-plugins/chrome'}
            label={'Chrome Extension'}
            icon={'/assets/chrome_logo.png'}
            type={'secondary'}
          />
        </GridFlexRow>

        <MiniSpacer/>

        <h2>Need more help?</h2>
        <ul>
          <li>
            <a href={'/support'}>Contact Support</a>
          </li>
        </ul>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src={'/assets/404_image.webp'}
          width={500}
          alt={'404 - Page Not Found'}
        />
      </div>
    </main>
  );
}
