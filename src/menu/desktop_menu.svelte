<script>
  import CloseBtn from "../buttons/close_btn.svelte";
  import DataCol from "./data_col.svelte";
  let headerLayout = "row";
  export let shouldDisplay = true;
</script>

<!-- <svelte:window bind:outerWidth={x} /> -->
<div class="desktop-menu" style="display: {shouldDisplay ? 'block' : 'none'}">
  <div class="header" />
  <div class="toc">
    <div class="internal">
      <div class="toc-header">
        <div class="left-side" style="flex-direction: {headerLayout}">
          <p>
            This week’s issue
            <span class="pipe">&nbsp;|&nbsp;</span><span class="date"
              >January 4 2020</span
            >
          </p>
        </div>
        <CloseBtn />
      </div>
      <DataCol />
      <!-- <div class="toc-body">
        {#each columns as column}
          <div class="unit">
            {#each column as item}
              <Row
                header={item.header}
                title={item.title}
                byLine={item.byLine}
              />
            {/each}
          </div>
        {/each}
      </div> -->
      <!-- {#if x < 1204}{/if} -->
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;1,500&display=swap");

  .desktop-menu {
    text-align: center;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    .toc {
      top: 15%;
    }
  }
  @media (min-width: 1440px) {
    .toc {
      top: 21%;
    }
  }
  .unit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    padding: 0px;
    height: fit-content;
    flex: none;
    align-self: stretch;
    width: 210px;
  }
  .header {
    width: 100vw;
    height: fit-content;
    position: relative;
    top: 0;
    background: rgba(0, 0, 0, 0.111);
  }
  .toc {
    height: 100rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 100;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.111);
    overflow: hidden;
    padding: 0 40px;
    box-sizing: border-box;
    border-radius: 16px;
  }
  .internal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 16px 0 16px;
    width: 100%;
  }
  .toc-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    align-content: flex-start;
    width: 100%;
    padding: 0px;
    left: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 0 32px 0;
  }

  .left-side {
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    margin: 0 16px 0 0;
  }

  .left-side > p {
    position: static;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 32px 10px 0px;
    text-align: left;
    align-self: start;
  }

  .left-side > p,
  .left-side > p > span {
    font-size: 22px;
    line-height: 36px;
  }
  .toc-body {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    height: max-content;
    width: 100%;
  }

  .date {
    font-weight: bold;
  }
  @media (max-width: 1024px) {
  }
</style>
