<script>
  import Hamburger from "../Icons/Hamburger.svelte";
  import IconButton from "../Buttons/IconButton.svelte";
  import Magnifier from "../Icons/Magnifier.svelte";
  import OutlineButton from "../Buttons/OutlineButton.svelte";

  let menuColor = "#653d00";
  let magnifierColor = "#653d00";
  let imageSrc = "./sentinel-header-full.svg";
  let position = "relative";
  let logoHeight = "72";
  let barPadding = "16px 32px";
  let buttonSize = "48px";
  let iconSize = "24";
  export let y;

  $: if (y >= 100) {
    imageSrc = "./sentinel-header-name.svg";
    position = "fixed";
    logoHeight = "20";
    barPadding = "0 32px";
    buttonSize = "32px";
  } else {
    imageSrc = "./sentinel-header-full.svg";
    position = "relative";
    logoHeight = "72";
    barPadding = "16px 32px";
    buttonSize = "48px";
  }
</script>

<div class="app-bar" style="position: {position}; padding: {barPadding};">
  <IconButton
    size={buttonSize}
    handleMouseEnter={(e) => (menuColor = "white")}
    handleMouseLeave={(e) => (menuColor = "#653d00")}
  >
    <Hamburger color={menuColor} size={iconSize} />
  </IconButton>
  <img src={imageSrc} height="{logoHeight}px" alt="" />
  <div class="right-side">
    <OutlineButton label="log in" {y} />
    <IconButton
      size={buttonSize}
      handleMouseEnter={(e) => (magnifierColor = "white")}
      handleMouseLeave={(e) => (magnifierColor = "#653d00")}
    >
      <Magnifier color={magnifierColor} size={iconSize} />
    </IconButton>
  </div>
</div>

<style>
  .right-side {
    display: flex;
    flex-flow: row nowrap;
  }
  .app-bar {
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: var(--primary-tint-80);
    box-sizing: border-box;
    transition: all 200ms ease-in-out;
  }
</style>
