import React from 'react';

import Divider from '~/components/Divider/Divider';
import Text from '~/components/Text/Text';

const AppLayout: React.FC = ({children}) => {
  return (
    <div className="app-layout">
      <div className="app-layout__profile">
        <div className="app-layout__profile-head">
          <div className="app-layout__profile-head-text">
            <img src="/assets/maturska.jpg" alt="profile" />
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
