<script>
  export let label = "label";
  export let labelColor = "black";
</script>

<button>
  <slot />
  <p style="color: {labelColor}">{label}</p>
</button>

<style>
  button {
    border: 0;
    background: transparent;
    font-size: 12px;
    padding: 16px 0;
    box-sizing: border-box;
    display: flex;
    transition: all 200ms ease-in-out;
    flex-flow: column;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  button:hover {
    background: var(--secondary-tint-95);
  }
  p {
    text-align: center;
    margin: 0;
    padding: 0 8px;
    width: 100%;
    max-inline-size: 8ch;
    hyphens: auto;
  }
</style>
