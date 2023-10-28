import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LitBoilerplateWc } from '../src/LitBoilerplateWc.js';
import '../src/lit-boilerplate-wc.js';

describe('LitBoilerplateWc', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LitBoilerplateWc>(
      html`<lit-boilerplate-wc></lit-boilerplate-wc>`
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LitBoilerplateWc>(
      html`<lit-boilerplate-wc></lit-boilerplate-wc>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LitBoilerplateWc>(
      html`<lit-boilerplate-wc header="attribute header"></lit-boilerplate-wc>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LitBoilerplateWc>(
      html`<lit-boilerplate-wc></lit-boilerplate-wc>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
