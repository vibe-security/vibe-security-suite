/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: ['cli', 'action', 'docker'],
    },
    'contributing',
    'security',
  ],
};

module.exports = sidebars;
