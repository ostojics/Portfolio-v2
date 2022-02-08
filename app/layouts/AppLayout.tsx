import React from 'react';

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
        <div className="app-layout__profile-content">content</div>
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
