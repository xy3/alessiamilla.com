<script lang="ts">
  import {API_URL} from "../../../lib/api/strapi";
  import {onMount} from "svelte";

  export let data;
  let content: string;

  onMount(async () => {
    const post = await data.data.data[0]
    content = post.attributes.Content as string
    content = content.replaceAll("/uploads", API_URL + "/uploads")
    // content = snarkdown(content)
  })
</script>

{#if data.data.data}
  {#each data.data.data as post}
    <div class="container" style="background-color:{post.attributes.Color};">
      <div class="content">
        <h1>
          {post.attributes.Title}
        </h1>
        <div class="inner-content">
          {@html content}
        </div>
      </div>
    </div>
  {/each}
{/if}

<style>
  .container {
    border: 3px solid white;
  }

  h1 {
    font-family: 'Vegawanty', serif;
    text-align: center;
    font-size: 11vw;
    margin: 2rem 0;
    text-transform: uppercase;
    font-weight: lighter;
  }

  .container :global(table) {
    margin: 1em 0;
    width: auto !important;
    margin-left: -4em;
    margin-right: -4em;
  }

  .container :global(tr) {
    display: flex;
    gap: 1em;
  }

  .container :global(td) {
    flex: 1;
  }

  .container :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    margin: 5em 20em;
  }

  .inner-content {
    margin: 0 12rem;
    display: flex;
    flex-direction: column;
    /*gap: 0.5em;*/
  }
</style>
