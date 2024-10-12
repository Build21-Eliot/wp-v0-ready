import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { NeonRunnerComponent } from '@/components/neon-runner';
import '@/styles.css';

const Edit: React.FC = () => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
       <NeonRunnerComponent />
    </div>
  );
};

export default Edit;
