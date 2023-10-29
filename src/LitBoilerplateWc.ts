import { html, LitElement } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LitScriptLazyLoaderController } from 'lit-script-lazy-loader';

export class LitBoilerplateWc extends LitElement {
  loader = new LitScriptLazyLoaderController(this, true);

  constructor() {
    super();
    this.loader.loadScript(
      'https://nishantbasu.github.io/single-file-wc/hello-world1.js',
      {
        exportedModuleFunction: {
          functionName: 'defineSuffix',
          args: ['test'],
        },
      }
    );
  }

  shouldUpdate(): boolean {
    return this.loader.fetchedScript;
  }

  render() {
    return html`
      <h2>Test Page</h2>
      <hello-world-test></hello-world-test>
    `;
  }
}
