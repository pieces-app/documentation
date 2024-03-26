import React from 'react';
import clsx from 'clsx';
import CTAButton from "/src/components/CTAButton";
import GridFlexRow from "@site/src/components/GridFlexRow";
import {MiniSpacer} from "@site/src/components/Spacers";

export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--8 col--offset-2">
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

          <h1 className="hero__title">Oops! You found a dead end.</h1>
          <p>It seems like you've found a missing link. Don't worry, it happens to the best of us!</p>

          <hr />

          <h2>Get Started with Pieces for Developers</h2>
          <p>Here are some links to help you get started:</p>
          <ul>
            <li><a href={'/installation-getting-started/what-am-i-installing'}>What is Pieces for Developers?</a></li>
            <li><a href={''}>Getting Started Guide</a></li>
            <li><a href={'/docs/tutorials'}>Tutorials</a></li>you
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

          <MiniSpacer />

          <h2>Need more help?</h2>
          <ul>
            <li>
              <a href={'/suppport'}>Contact Support</a>
            </li>
          </ul>
          {/*<CTAButton*/}
          {/*  label={'Contact Support'}*/}
          {/*  href={'/support'}*/}
          {/*  type={'secondary'}*/}
          {/*/>*/}
        </div>
      </div>
    </main>
  );
}
