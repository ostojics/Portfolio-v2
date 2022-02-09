import React from 'react';

import {TextTags} from '~/constants/TextTags';

interface Props {
  tag: string;
  children: React.ReactNode;
  uppercase?: boolean;
  italic?: boolean;
  className?: string;
}

const Text: React.FC<Props> = ({tag, children, uppercase, italic, className, ...rest}) => {
  const setUppercase = () => (uppercase ? 'text--uppercase' : '');
  const setItalic = () => (italic ? 'text--italic' : '');

  switch (tag) {
    case TextTags.H1:
      return (
        <h1 {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </h1>
      );
    case TextTags.H2:
      return (
        <h2 {...rest} className={` ${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </h2>
      );
    case TextTags.H3:
      return (
        <h3 {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </h3>
      );
    case TextTags.H4:
      return (
        <h4 {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </h4>
      );
    case TextTags.H5:
      return (
        <h5 {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </h5>
      );
    case TextTags.H6:
      return (
        <h6 {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </h6>
      );
    case TextTags.P:
      return (
        <p {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </p>
      );
    case TextTags.SPAN:
      return (
        <span {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </span>
      );
    case TextTags.SMALL:
      return (
        <small {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </small>
      );
    case TextTags.PRE:
      return (
        <pre {...rest} className={`${setUppercase()} ${setItalic()} ${className}`}>
          {children}
        </pre>
      );
    default:
      return <>{children}</>;
  }
};

Text.defaultProps = {
  uppercase: false,
  italic: false,
  className: '',
};

export default Text;
