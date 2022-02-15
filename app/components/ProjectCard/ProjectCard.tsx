import React from 'react';

import Divider from '../Divider/Divider';
import Text from '../Text/Text';

interface IProps {
  title: string;
  description: string;
  technologiesUrls: string[];
  demoUrl?: string;
  demoNotAvailable?: boolean;
}

const ProjectCard: React.FC<IProps> = ({
  title,
  description,
  technologiesUrls,
  demoUrl = '',
  demoNotAvailable = false,
}) => {
  return (
    <div className="project-card">
      <div className="project-card__head">
        <Text tag="h4" className="project-card__title">
          {title}
        </Text>
        <Text tag="p" className="project-card__description">
          {description}
        </Text>
      </div>
      <div className="project-card__divider">
        <Divider />
      </div>
      <div className="project-card__technologies">
        {technologiesUrls.map((url) => (
          <img src={url} alt="technology" key={url} />
        ))}
      </div>
      <div className="project-card__actions">
        {!demoNotAvailable && (
          <div className="project-card__action">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
            <i className="ion-ios-arrow-right" />
          </div>
        )}
        {demoNotAvailable && (
          <div className="project-card__action">
            <Text tag="span" className="project-card__message">
              Demo not available
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
