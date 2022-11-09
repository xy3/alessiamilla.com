<script lang="ts">
  import PostImage from "./PostImage.svelte";
  import Alessia from "./Alessia.svelte";

  export let data;
</script>

<section>
  <Alessia/>
  {#if data.data.data}
    {#each data.data.data as post}
      <PostImage
        slug={post.attributes.Slug}
        title={post.attributes.Title}
        image={post.attributes.HeaderImage.data?.attributes.url}
        color={post.attributes.Color}
      />
    {/each}
  {/if}
</section>
