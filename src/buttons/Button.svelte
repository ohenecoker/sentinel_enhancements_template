<script>
  export let width = "300px";
</script>

<button {width}>view current issue</button>

<style>
  button {
    align-self: start;
    margin: 0 0 32px 0;
    background: transparent;
    border: 1px solid #2c1a6e;
    color: #2c1a6e;
    text-transform: uppercase;
    padding: 12px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 100ms ease-in-out;
  }
  button:hover {
    background-color: #2c1a6e;
    color: white;
  }
</style>
