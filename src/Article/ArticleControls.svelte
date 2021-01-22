<script>
  import ControlButton from "../Buttons/ControlButton.svelte";
  import Arrow from "../Icons/Arrow.svelte";
  import Headphones from "../Icons/Headphones.svelte";
  import Icon from "../Icons/Icon.svelte";
  import Letters from "../Icons/Letters.svelte";
  import PageIcon from "../Icons/PageIcon.svelte";
  import Printer from "../Icons/Printer.svelte";
  import Share from "../Icons/Share.svelte";
  import SpeechBubblesLetters from "../Icons/SpeechBubblesLetters.svelte";
  import SpreadBlank from "../Icons/SpreadBlank.svelte";

  let y;
  let position = "fixed";
  let top = "110px";
  let dormantColor = "hsl(0deg 0% 20%)";
  let buttons = [
    { name: "Browse issues" },
    { name: "Listen" },
    { name: "Share" },
    { name: "Font size" },
    { name: "Print" },
    { name: "Issue viewer" },
    { name: "Translations" },
  ];

  $: if (y >= 100) {
    top = "110px";
  } else {
    top = "295px";
  }
</script>

<div class="article-controls" style="position: {position}; top: {top}">
  {#each buttons as item, i}
    <ControlButton label={item.name} labelColor="hsl(0deg 0% 20%)">
      <Icon>
        {#if i == 0}
          <Arrow color={dormantColor} />
        {:else if i == 1}
          <Headphones color={dormantColor} />
        {:else if i == 2}
          <Share color={dormantColor} />
        {:else if i == 3}
          <Letters color={dormantColor} />
        {:else if i == 4}
          <Printer color={dormantColor} />
        {:else if i == 5}
          <SpreadBlank color={dormantColor} />
        {:else if i == 6}
          <SpeechBubblesLetters color={dormantColor} />
        {:else}
          <PageIcon color={dormantColor} />
        {/if}
      </Icon>
    </ControlButton>
    <div
      class="bottom-divider"
      style="display: {i == buttons.length - 1 ? 'none' : 'block'}"
    />
  {/each}
</div>

<svelte:window bind:scrollY={y} />

<style>
  .bottom-divider {
    height: 1px;
    width: 100%;
    background: var(--secondary-tint-95);
  }
  .article-controls {
    left: 0;
    border: 1px solid var(--secondary-tint-95);
    transition: all 200ms ease-in-out;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
  }
</style>
