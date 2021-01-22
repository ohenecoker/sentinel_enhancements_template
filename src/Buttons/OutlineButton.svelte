<script>
  export let label;
  export let y;
  let border = "1px solid #653d00";
  let borderRadius = "32px";
  let fontSize = "16px";

  $: if (y >= 100) {
    border = "none";
    borderRadius = "4px";
    fontSize = "12px";
  } else {
    border = "1px solid #653d00";
    borderRadius = "32px";
    fontSize = "16px";
  }
</script>

<button style="border: {border}; border-radius: {borderRadius}"
  ><p style="font-size: {fontSize}">{label}</p></button
>

<style>
  p {
    margin: 0;
    padding: 0;
    max-inline-size: 120px;
  }
  button {
    background: transparent;
    padding: 0 16px;
    text-transform: uppercase;
    color: var(--primary-shade-20);
    box-sizing: border-box;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
  button:hover {
    background: hsl(0deg 0% 0% / 0.2);
  }
</style>
