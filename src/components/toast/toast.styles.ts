import { css } from 'lit';

export default css`
  :host {
    .toast {
      position: fixed;
      display: flex;
      justify-content: center;
      top: var(--core-spacing-4, 1rem);
      transform: translate(-50%, -10px);
      background-color: var(--color-brand-subtle, #333);
      color: var(--color-text-on-primary, white);
      box-shadow: var(--core-shadow-md);
      border-radius: var(--core-radius-md);
      padding: var(--core-spacing-4) var(--core-spacing-5);
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;
      z-index: 9999;
      pointer-events: auto;
    }

    .toast-stack {
      position: fixed;
      display: flex;
      flex-direction: column;
      gap: var(--core-spacing-3, 0.75rem);
      z-index: 9999;
      width: 100%;
    }

    .toast-stack--top-center {
      top: var(--core-spacing-4, 1rem);
      left: 0;
      right: 0;
      align-items: center;
    }

    .toast--visible {
      opacity: 1;
      transform: translateY(0);
    }

    .toast--success {
      background-color: var(--core-color-success);
    }

    .toast--warning {
      background-color: var(--core-color-warning);
      color: var(--color-text-primary, white);
    }

    .toast--error {
      background-color: var(--core-color-error);
    }

    .toast--default {
      background-color: var(--color-brand-primary);
    }
  }
`;
