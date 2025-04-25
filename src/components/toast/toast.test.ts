import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type SlToast from './toast.js';

describe('<sl-toast>', () => {
  it('should render a component', async () => {
    const el = await fixture<SlToast>(html` <sl-toast></sl-toast> `);
    expect(el).to.exist;
  });

  it('should be visible when connected', async () => {
    const el = await fixture<SlToast>(html`<sl-toast>Visible toast</sl-toast>`);

    const base = el.shadowRoot?.querySelector('.toast');
    expect(base?.classList.contains('toast--visible')).to.be.true;
  });

  it('should apply the correct variant class', async () => {
    const el = await fixture<SlToast>(html`<sl-toast variant="success">Success toast</sl-toast>`);

    const base = el.shadowRoot?.querySelector('.toast');
    expect(base?.classList.contains('toast--success')).to.be.true;
  });

  it('should auto-dismiss after the given duration', async () => {
    const el = await fixture<SlToast>(html`<sl-toast duration="100">Auto dismiss</sl-toast>`);

    expect(el.shadowRoot?.querySelector('.toast')?.classList.contains('toast--visible')).to.be.true;

    await new Promise(resolve => setTimeout(resolve, 200));

    expect(el.isConnected).to.be.false;
  });

  it('should stay visible if duration is set to 0', async () => {
    const el = await fixture<SlToast>(html`<sl-toast duration="0">Persistent toast</sl-toast>`);

    await new Promise(resolve => setTimeout(resolve, 300));

    expect(el.isConnected).to.be.true;
  });

  it('should dismiss itself when dismiss() is called', async () => {
    const el = await fixture<SlToast>(html`<sl-toast>Dismiss me</sl-toast>`);

    el.dismiss();
    await el.updateComplete;

    expect(el.isConnected).to.be.false;
  });
});
