<script>
  export let handleMouseEnter;
  export let handleMouseLeave;
  export let size = "48px";
</script>

<button
  style="height: {size}; width: {size};"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}>
  <slot />
</button>

<style>
  button {
    display: block;
    /* height: 48px;
    width: 48px; */
    border: none;
    cursor: pointer;
    background: transparent;
    transition: all 200ms ease-in-out;
    border-radius: 8px;
  }
  button:hover {
    background: hsl(0deg 0% 0% / 30%);
    border-radius: 8px;
  }
</style>
