<script>
  export let options = [];
  export let activeIndex = 0;
  export let instructions = "";
</script>

<div class="instructions">
  <p>{instructions}</p>
  <nav>
    {#each options as option, i}
      <button
        class={activeIndex == i ? "active" : "inactive"}
        on:click={() => option.tapHandler(i)}>{option.title}</button
      >
    {/each}
  </nav>
</div>

<style>
  nav {
    display: flex;
    flex-flow: row nowrap;
  }
  .instructions {
    position: fixed;
    background: rgb(211, 215, 219);
    width: 100vw;
    padding: 8px 16px;
    bottom: 0;
    box-sizing: border-box;
    height: 100px;
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: center;
    color: black;
    z-index: 20;
    box-shadow: 1px 4px 7px black;
  }
  .instructions > p {
    align-self: center;
  }
  button {
    border: 1px solid black;
    padding: 8px 16px;
    font-size: 16px;
    margin: 0 16px 0 0;
    cursor: pointer;
  }
  .active {
    background: black;
    color: white;
  }
  .inactive {
    background: transparent;
    color: black;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    background: rgb(37, 37, 28);
    color: white;
  }
</style>
