import SlToast from './toast.component.js';

export * from './toast.component.js';
export default SlToast;

SlToast.define('sl-toast');

declare global {
  interface HTMLElementTagNameMap {
    'sl-toast': SlToast;
  }
}
