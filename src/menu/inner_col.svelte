<script>
  export let header;
  export let content;
</script>

<div class="row">
  <h3>{header}</h3>
  {#each content as item}
    <div class="title-container">
      <a href="#C">{item.title}</a>
      <p>{item.byLine}</p>
    </div>
  {/each}
</div>

<style>
  .row > h3 {
    font-size: 16px;
    margin: 0 0 16px 0;
    font-weight: 700;
  }
  .title-container > p {
    font-size: 12px;
    text-align: left;
    margin: 4px 0 0 0;
    line-height: 1.5;
    width: 150px;
  }
  .title-container {
    display: flex;
    height: fit-content;
    display: flex;
    flex-flow: column;
    margin: 0 0 20px 0;
  }
  a,
  a:link {
    width: fit-content;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
    flex: none;
    order: 0;
    text-decoration: none;
    text-align: left;
    transition: all 100ms ease-in-out;
    color: #2c1a6e;
  }
  a:hover {
    text-decoration: underline;
    width: fit-content;
    color: #3511b8;
  }

  a:visited {
    color: #747083;
  }

  a:visited::before {
    content: "testing.....";
  }

  .row {
    height: fit-content;
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: flex-start;
    margin: 0 0 24px 0;
  }
</style>
