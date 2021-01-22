<script>
  import Row from "./inner_col.svelte";
  import { categorizedData } from "../data.js";
  import { simplified } from "../data.js";
  let d = [];
  let t = new Array(categorizedData);
  Object.assign(d, simplified);

  // let columns = groupItems(d, 3);
  // let nCol = groupItems(categorizedData, 4);
  let cols = groupItems(simplified, 2);
  let cols2 = groupItems(d, 3);

  let x;
  function groupItems(items, rowCount) {
    const result = new Array(Math.ceil(items.length / rowCount))
      .fill()
      .map((_) => items.splice(0, rowCount));
    return result;
  }
</script>

<svelte:window bind:outerWidth={x} />
<div class="toc-body">
  {#each x <= 970 ? cols2 : cols as column}
    <div class="unit">
      {#each column as item}
        <Row header={item.header} content={item.content} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .toc-body {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    height: max-content;
    width: 100%;
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
    width: 200px;
  }
</style>
