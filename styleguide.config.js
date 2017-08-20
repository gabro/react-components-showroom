const path = require('path');
const kebabCase = require('kebab-case');

function brc(name) {
  return path.resolve(__dirname, `node_modules/buildo-react-components/src/${name}/${name}.tsx`);
}

module.exports = {
  showUsage: true,
  template: 'index.html',
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    {
      name: 'Getting started',
      content: 'guides/GettingStarted.md'
    },
    {
      name: 'Components',
      components: () => [
        brc('AsyncStatusIndicator')
      ],
    }
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import ${name} from @buildo/react${kebabCase(name)}`;
  },
  getExampleFilename(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return path.resolve(__dirname, `examples/${name}.md`);
  }
};
