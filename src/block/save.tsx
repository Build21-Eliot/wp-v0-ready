import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';

const Save: React.FC = () => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      {/* Static placeholder for React component */}
      <div id="neon-runner-placeholder"></div>
    </div>
  );
};

export default Save;
