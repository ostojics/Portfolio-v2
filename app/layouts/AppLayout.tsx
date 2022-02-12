import React from 'react';

import Divider from '~/components/Divider/Divider';
import Text from '~/components/Text/Text';

const AppLayout: React.FC = ({children}) => {
  return (
    <div className="app-layout">
      <div className="app-layout__profile">
        <div className="app-layout__profile-head">
          <div className="app-layout__profile-head-text">
            <img src="/assets/images/maturska.jpg" alt="profile" />
            <Text tag="h3">Slobodan Ostojić</Text>
            <Text tag="span">Web Developer</Text>
          </div>
        </div>
        <div className="app-layout__profile-content">
          <div className="app-layout__profile-languages">
            <Text tag="h3">Spoken languages</Text>
            <div className="app-layout__languages-container">
              <div className="app-layout__profile-language">
                <Text tag="h5">Serbian</Text>
              </div>
              <div className="app-layout__profile-language">
                <Text tag="h5">English</Text>
              </div>
            </div>
          </div>
          <Divider />
          <div className="app-layout__profile-skills">
            <Text tag="h3">Some of the tools I use</Text>
            <div className="app-layout__skills-container">
              <img src="/assets/icons/html5.svg" alt="html5" />
              <img src="/assets/icons/css3.svg" alt="css3" />
              <img src="/assets/icons/sass.svg" alt="sass" />
              <img src="/assets/icons/javascript.svg" alt="javascript" />
              <img src="/assets/icons/typescript.svg" alt="typescript" />
              <img src="/assets/icons/react-icon.svg" alt="react-icon" />
              <img src="/assets/icons/redux.svg" alt="redux" />
              <img src="/assets/icons/figma-icon.svg" alt="figma" />
              <img src="/assets/icons/git-icon.svg" alt="git" />
              <img src="/assets/icons/mongodb.svg" alt="mongodb" />
              <img src="/assets/icons/postgresql.svg" alt="postgresql" />
              <img src="/assets/icons/prisma.svg" alt="prisma" />
              <img src="/assets/icons/nodejs.svg" alt="nodejs" />
              <img src="/assets/icons/expressjs.svg" alt="express" />
              <img src="/assets/icons/jest.svg" alt="jest" />
            </div>
          </div>
        </div>
        <div className="app-layout__profile-footer">
          <a href="https://github.com/ostojics" target="_blank" rel="noopener noreferrer">
            <i className="ion-social-github" />
          </a>
          <a href="https://github.com/ostojics" target="_blank" rel="noopener noreferrer">
            <i className="ion-android-mail" />
          </a>
          <a href="https://www.linkedin.com/in/slobodan-ostojić-7006101b4/" target="_blank" rel="noopener noreferrer">
            <i className="ion-social-linkedin" />
          </a>
        </div>
      </div>
      <div className="app-layout__content">{children}</div>
    </div>
  );
};

export default AppLayout;
