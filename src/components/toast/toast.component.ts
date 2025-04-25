import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './toast.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Toasts are transient messages that appear to notify users of something.
 * @documentation https://shoelace.style/components/toast
 * @status experimental
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 *
 * @slot - The toast message content.
 *
 * @cssproperty --background-color - The background color of the toast.
 * @cssproperty --color - The text color of the toast.
 * @cssproperty --box-shadow - The toast shadow.
 */
export default class SlToast extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  /** The variant of the toast: default, success, warning, or error. */
  @property() variant: 'default' | 'success' | 'warning' | 'error' = 'default';

  /** Duration before auto-dismiss (in milliseconds). Set to 0 to disable. */
  @property({ type: Number }) duration = 3000;

  /** Whether the toast is visible. */
  @state() private isVisible = false;

  private timeoutId: number | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.isVisible = true;

    if (this.duration > 0) {
      this.timeoutId = window.setTimeout(() => this.dismiss(), this.duration);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  dismiss() {
    this.isVisible = false;
    this.timeoutId && clearTimeout(this.timeoutId);
    this.remove();
  }

  render() {
    return html`
      <div class="toast-stack toast-stack--top-center">
        <div
          part="base"
          class=${classMap({
            toast: true,
            'toast--visible': this.isVisible,
            [`toast--${this.variant}`]: true
          })}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}
