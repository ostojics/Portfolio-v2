import React from 'react';

import Divider from '../Divider/Divider';
import Text from '../Text/Text';

interface IProps {
  title: string;
  description: string;
  technologiesUrls: string[];
  sourceUrl: string;
  demoUrl: string;
}

const ProjectCard: React.FC<IProps> = ({title, description, technologiesUrls, sourceUrl, demoUrl}) => {
  return (
    <div className="project-card">
      <Text tag="h4" className="project-card__title">
        {title}
      </Text>
      <Text tag="p" className="project-card__description">
        {description}
      </Text>
      <div className="project-card__divider">
        <Divider />
      </div>
      <div className="project-card__technologies">
        {technologiesUrls.map((url) => (
          <img src={url} alt="technology" key={url} />
        ))}
      </div>
      <div className="project-card__actions">
        <div className="project-card__action">
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            Source code
          </a>
          <i className="ion-ios-arrow-right" />
        </div>
        <div className="project-card__action">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Live demo
          </a>
          <i className="ion-ios-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
