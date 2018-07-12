import React from 'react';

import Button from 'wix-style-react/Button';

import * as Icons from 'wix-style-react/new-icons';

const icons = Object.values(Icons).map(icon => React.createElement(icon));

export default {
  category: '5. Buttons',
  storyName: '5.4 Error',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    withNewIcons: true,
    theme: 'fullred',
    children: 'Click Me'
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons
  }
};
