<script>
  export let label = "test";
  export let isInFocus = false;
  export let handleMouseEnter = null;
  export let handleMouseLeave = null;
  export let y;
  let padding = "8px 16px 0 16px";
  let borderMargin = "8px 0 0 0";

  $: if (y >= 100) {
    padding = "8px 0 0 0";
    borderMargin = 0;
  } else {
    padding = "8px 16px 0 16px";
    borderMargin = "8px 0 0 0";
  }
</script>

<div
  class="tab-button"
  on:mouseover={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <div class="content" style="padding: {padding}">
    <p>{label}</p>
    <slot />
  </div>
  <div
    class="bottom-border"
    style="background: {isInFocus ? '#653d00' : 'transparent'}"
  />
</div>

<style>
  p {
    margin: 0 16px 0 0;
  }
  .bottom-border {
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 8px 8px 0 0;
    background: #653d00;
    margin: 8px 0 0 0;
    transition: all 200ms ease-in-out;
  }
  .content {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .tab-button {
    justify-content: space-between;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 16px 0 0;
    /* padding: 8px 16px 0 16px; */
    color: #653d00;
    font-size: 16px;
    box-sizing: border-box;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
</style>
