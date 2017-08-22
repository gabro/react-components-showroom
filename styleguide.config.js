const path = require('path');
const kebabCase = require('kebab-case');

function brc(name) {
  return path.resolve(__dirname, `node_modules/buildo-react-components/src/${name}/${name}.tsx`);
}

module.exports = {
  // build
  styleguideDir: 'build', // target of the `build` task

  // style customizations
  require: [
    path.resolve(__dirname, 'main.scss')
  ],
  styleguideComponents: {
    Logo: path.resolve(__dirname, 'components/Logo.jsx')
  },

  // content
  title: 'buildo react components',
  template: 'index.html',
  propsParser: require('react-docgen-typescript').parse, // detect docs using TS information
  sections: [
    {
      name: 'Getting started',
      content: 'guides/GettingStarted.md'
    },
    {
      name: 'Components',
      components: () => [
        brc('AsyncStatusIndicator'),
        brc('Badge')
      ],
    }
  ],
  showUsage: true, // show props by default
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import ${name} from @buildo/react${kebabCase(name)}`;
  },
  getExampleFilename(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return path.resolve(__dirname, `examples/${name}.md`);
  }
};
