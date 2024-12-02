import React from 'react';
import BackButton from './BackButton';
import ArtworkRegistration from './ArtworkRegistration';
import './MainContainers.css';

function MainContainers({ userId }) {
  return (
    <div className="content-container">
      <div className="sec backbutton-section">
        <BackButton />
      </div>
      <div className="sections-container">
        <ArtworkRegistration userId={userId} />
      </div>
    </div>
  );
}

export default MainContainers;
