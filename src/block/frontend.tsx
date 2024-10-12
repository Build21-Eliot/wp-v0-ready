import React from 'react';
import { NeonRunnerComponent } from '@/components/neon-runner';
import '@/styles.css';

const Frontend: React.FC = () => {
  return (
    <div>
       <NeonRunnerComponent />
    </div>
  );
};

import { createRoot } from 'react-dom/client';

// Function to mount the component
const mountComponent = () => {
  const placeholderElement = document.getElementById('neon-runner-placeholder');
  if (placeholderElement) {
    const root = createRoot(placeholderElement);
    root.render(<Frontend />);
  }
};

// Execute the mounting function when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountComponent);
} else {
  mountComponent();
}

export default Frontend;

