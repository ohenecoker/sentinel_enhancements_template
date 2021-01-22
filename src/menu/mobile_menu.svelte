<script>
  import { simplified } from "../data.js";
  import Button from "../buttons/Button.svelte";
  export let shouldDisplay = true;
  let thing = [];
  Object.assign(thing, simplified);
</script>

<div class="mobile-menu" style="display: {shouldDisplay ? 'block' : 'none'}">
  <div class="header" />
  <div class="toc">
    <div class="internal">
      <div class="toc-header">
        <p>
          This week’s issue
          <span class="pipe">&nbsp;|&nbsp;</span><span class="date"
            >January 4 2020</span
          >
        </p>
      </div>
      <!-- <Button /> -->
      <div class="toc-body">
        {#each thing as item}
          <div class="unit">
            <div class="col-header">
              <h3>{item.header}</h3>
            </div>
            <div class="col-body">
              {#each item.content as el}
                <a href="#C">{el.title}</a>
                <p>{el.byLine}</p>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;1,500&display=swap");

  .mobile-menu {
    text-align: center;
    width: 375px;
    margin: 0 auto;
    position: relative;
    height: fit-content;
  }

  @media (min-width: 1024px) {
    .mobile-menu {
      max-width: none;
    }
    .toc {
      top: 15%;
    }
  }
  @media (min-width: 1440px) {
    .toc {
      top: 21%;
    }
  }
  .header {
    width: 100vw;
    height: fit-content;
    position: relative;
    top: 0;
    background: rgba(0, 0, 0, 0.111);
  }
  .toc {
    width: 100%;
    height: 100rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 100;
    position: absolute;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.31);
    overflow: hidden;
    border-radius: 16px;
  }
  .internal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    flex-grow: 0;
  }
  .toc-header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: static;
    left: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 2rem;
  }

  .toc-header > p {
    position: static;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    color: #2c1a6e;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
  }

  .toc-header > p,
  .toc-header > p > span {
    font-size: 22px;
    line-height: 36px;
    width: 100%;
    text-align: left;
  }
  .toc-body {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 0px;
    width: 100%;
    height: max-content;
    order: 1;
    align-self: start;
  }
  .unit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    padding: 0px;
    position: static;
    height: fit-content;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    width: 100%;
    flex-grow: 0;
  }

  .col-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0 0 16px 0;
  }

  .col-body {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    left: 0px;
    top: 30px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0 0 8px 0;
  }
  .col-body > p {
    font-size: 12px;
    margin: 8px 0 32px 0;
    text-align: left;
    line-height: 1.5;
  }
  a,
  a:link {
    position: static;
    width: 100%;
    left: 0px;
    top: 0px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #2c1a6e;
    flex: none;
    order: 0;
    text-decoration: none;
    text-align: left;
  }
  a:hover {
    text-decoration: underline;
    font-weight: 600;
  }
  .date {
    font-weight: bold;
  }
  h3 {
    font-weight: 700;
    margin: 0;
    font-size: 16px;
  }
</style>
