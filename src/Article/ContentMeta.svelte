<script>
  import ContentTypeIcon from "../Icons/ContentTypeIcon.svelte";
  import Icon from "../Icons/Icon.svelte";
  import PageIcon from "../Icons/PageIcon.svelte";
</script>

<div class="content-meta">
  <ContentTypeIcon>
    <Icon>
      <PageIcon color="#cb7b00" />
    </Icon>
  </ContentTypeIcon>
  <p>Article | september 16, 1967 issue</p>
</div>

<style>
  .content-meta {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 0 32px 0;
  }
  p {
    text-transform: uppercase;
    color: var(--primary);
    margin: 0 0 0 16px;
    letter-spacing: 0.5px;
    font-size: 16px;
  }
</style>
