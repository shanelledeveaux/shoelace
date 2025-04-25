---
meta:
  title: Toast
  description: 'Toasts are brief, non-blocking notifications used to convey status or feedback messages.'
layout: component
---

## Basic Usage

```html:preview
<sl-button id="show-toast">Show Toast</sl-button>

<script type="module">
  const button = document.getElementById('show-toast');
  button.addEventListener('click', () => {
    const toast = document.createElement('sl-toast');
    toast.variant = 'success';
    toast.duration = 3000;
    toast.textContent = 'Your changes were saved!';
    document.body.appendChild(toast);
  });
</script>
```

## Variants

```html:preview
<sl-button id="show-toast-success">Success</sl-button>
<sl-button id="show-toast-warning">Warning</sl-button>
<sl-button id="show-toast-error">Error</sl-button>

<script type="module">
  function showToast(message, variant = 'default') {
    const toast = document.createElement('sl-toast');
    toast.variant = variant;
    toast.textContent = message;
    document.body.appendChild(toast);
  }

  document.getElementById('show-toast-success').addEventListener('click', () => showToast('Success!', 'success'));
  document.getElementById('show-toast-warning').addEventListener('click', () => showToast('Warning!', 'warning'));
  document.getElementById('show-toast-error').addEventListener('click', () => showToast('Something went wrong.', 'error'));
</script>
```

## Controlling Duration

```html:preview
<sl-button id="show-toast-duration">Long Toast</sl-button>

<script type="module">
  document.getElementById('show-toast-duration').addEventListener('click', () => {
    const toast = document.createElement('sl-toast');
    toast.textContent = 'This toast lasts 6 seconds.';
    toast.variant = 'default';
    toast.duration = 6000;
    document.body.appendChild(toast);
  });
</script>
```

## Manual Dismissal

```html:preview
<sl-button id="show-toast-manual">Manual Dismiss</sl-button>

<script type="module">
  document.getElementById('show-toast-manual').addEventListener('click', () => {
    const toast = document.createElement('sl-toast');
    toast.textContent = 'Click to dismiss me.';
    toast.variant = 'default';
    toast.duration = 0;
    toast.addEventListener('click', () => toast.remove());
    document.body.appendChild(toast);
  });
</script>
```
