<script>
  import Headphones from "../Icons/Headphones.svelte";

  import Icon from "../Icons/Icon.svelte";
  import SpreadFilled from "../Icons/SpreadFilled.svelte";
  import Stacks from "../Icons/Stacks.svelte";
  import TabButton from "../Buttons/TabButton.svelte";
  import WebPageWithPlayer from "../Icons/WebPageWithPlayer.svelte";

  let spreadFilledColor = "#653d00";
  let exclusivesColor = "#653d00";
  let audioColor = "#653d00";
  let issuesColor = "#653d00";
  let positionBarPosition = "relative";
  let topPosition = 0;
  let barPadding = "8px 0 0 0";
  export let y;

  $: if (y >= 100) {
    positionBarPosition = "fixed";
    topPosition = "32px";
    barPadding = 0;
  } else {
    positionBarPosition = "relative";
    topPosition = 0;
    barPadding = "4px 0 0 0";
  }
</script>

<div
  class="tab-bar"
  style="position: {positionBarPosition}; top: {topPosition}; padding: {barPadding}"
>
  <TabButton label="This Week" {y}>
    <Icon>
      <SpreadFilled color={spreadFilledColor} />
    </Icon>
  </TabButton>
  <TabButton label="Exclusives" {y}>
    <Icon>
      <WebPageWithPlayer color={exclusivesColor} />
    </Icon>
  </TabButton>
  <TabButton label="Audio" {y}>
    <Icon>
      <Headphones color={audioColor} />
    </Icon>
  </TabButton>
  <TabButton label="Issues" {y}>
    <Icon>
      <Stacks color={issuesColor} />
    </Icon>
  </TabButton>
</div>

<style>
  .tab-bar {
    width: 100%;
    background: var(--primary-tint-95);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    /* padding: 8px 0 0 0; */
  }
</style>
