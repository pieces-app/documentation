import React from 'react';
import clsx from 'clsx';
import CTAButton from "/src/components/CTAButton";
import GridFlexRow from "@site/src/components/GridFlexRow";
import {MiniSpacer} from "@site/src/components/Spacers";

export default function NotFoundContent({className}) {
  return (
    <main style={{
      margin: '0 auto',
      padding: '0 20px',
      maxWidth: '1200px'
    }}>
      <div className={'hero-container'}>
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <h1 style={{color: 'var(--ifm-color-primary-darkest)', fontSize: '2.5rem', textAlign: 'center'}}>
              You found a dead end!
            </h1>
            <p>It seems like you've found a missing link. Don't worry, it happens to the best of us!</p>
            <GridFlexRow type={'evenly'}>
              <CTAButton
                href={'/'}
                label={'← Back to Docs'}
                type={'secondary'}
              />
            </GridFlexRow>
          </div>
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
      </div>

      <hr />

      <div className={'error-footer'}>
        <div>
          <h2>Get Started with Pieces for Developers</h2>
          <ul>
            <li><a href={'/installation-getting-started/what-am-i-installing'}>What is Pieces for Developers?</a></li>
            <li><a href={'https://youtube.com/@getpieces'}>Video Tutorials</a></li>
            <li><a href={'/faq'}>FAQs</a></li>
          </ul>
        </div>

        <div>
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
        </div>

        <div>
          <h2>Need more help?</h2>
          <ul>
            <li>
              <a href={'/support'}>Contact Support</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
