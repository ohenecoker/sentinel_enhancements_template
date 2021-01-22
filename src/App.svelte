<script>
  import DesktopMenu from "./menu/desktop_menu.svelte";
  import MobileMenu from "./menu/mobile_menu.svelte";

  let x;
</script>

<svelte:window bind:innerWidth={x} />
<main>
  {#if x > 700}
    <div>
      <DesktopMenu />
    </div>
  {/if}
  {#if x < 700}
    <div>
      <MobileMenu />
    </div>
  {/if}
</main>

<style>
  main {
    padding: 168px 56px 56px 56px;
  }
</style>
