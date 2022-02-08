import React from 'react';

const AppLayout: React.FC = ({children}) => {
  return (
    <div className="app-layout">
      <div className="app-layout__profile">profile</div>
      <div className="app-layout__content">{children}</div>
    </div>
  );
};

export default AppLayout;
