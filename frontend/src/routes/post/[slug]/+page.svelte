<script lang="ts">
  import {PUBLIC_API_URL} from "$env/static/public";
  import {afterUpdate, onMount} from "svelte";
  import rallax from "rallax.js";
  import Lightbox from "../../Lightbox.svelte";
  let img = ""
  let open = false

  export let data: {
    data: {
      data: {
        attributes: {
          Title: string
          Content: string
          HeaderImage: object[]
          Color: string
          Slug: string
          Overlays: object[]
        }
      }
    }
  };
  let content: string;

  onMount(async () => {
    const post = await data.data.data[0]

    content = post.attributes.Content as string
    content = content.replaceAll("/uploads", PUBLIC_API_URL + "/uploads")
    rallax(".overlays-container", {speed: 0.2})
  })

  afterUpdate(() => {
    document.querySelectorAll('img').forEach((item) => {
      item.addEventListener('click', () => {
        img = item.src
        open = true
      })
    });
  })
</script>

<svelte:head>
  {#if data.data.data}
    <title>{data.data.data[0].attributes.Title} | Alessia Milla</title>
  {:else}
    <title>Alessia Milla | Creative Director</title>
  {/if}
</svelte:head>

{#if data.data.data}
  {#each data.data.data as post}
    <div class="container" style="background-color:{post.attributes.Color};">
      <div class="content">
        <h1>
          {post.attributes.Title}
        </h1>
        <div class="inner-content">
          {#if post.attributes.Tags.length > 0}
            <h2 class="tags">
              {#each post.attributes.Tags as tag, index}
                <span>{tag.Tag}</span>
                {#if index < post.attributes.Tags.length - 1}
                  <i>&#x2022;</i>
                {/if}
              {/each}
            </h2>
          {/if}
          {@html content}
        </div>
      </div>
      {#if post.attributes.Overlays.data && post.attributes.Overlays.data.length > 0}
        <div class="overlays-container">
          <div class="overlays">
            {#each post.attributes.Overlays.data as overlay}
              <img src={PUBLIC_API_URL + overlay.attributes.url} alt="">
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/each}
{/if}
<Lightbox img={img} open={open} setOpen={(isOpen) => {open = isOpen}}/>


<style>
  :global(.inner-content img) {
    cursor: pointer!important;
  }

  .container {
    border: 3px solid white;
    color: white;
    position: relative;
  }

  h2.tags {
    text-transform: uppercase;
    font-size: 2.5em;
    line-height: 0.2em;
    display: flex;
    gap: 0.25em;
    font-weight: 500;
  }

  h2.tags i {
    font-style: normal;
    font-size: 0.5em;
  }

  .overlays-container {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    top: 0;
  }

  .overlays {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .overlays img {
    display: block;
    flex: 1;
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
    width: auto !important;
    margin: 1em -4.9em;
  }

  .container :global(tr) {
    display: flex;
    gap: 1em;
  }

  .container :global(td) {
    flex: 1;
  }

  .container :global(table img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /*aspect-ratio: 16/9;*/
  }

  .container :global(p > img) {
    width: calc(100% + 8em);
    height: 100%;
    object-fit: cover;
    /*aspect-ratio: 16/9;*/
    margin: 0 -4em;
  }

  .content {
    margin: 5em 20em;
    position: relative;
    z-index: 1;
  }

  .inner-content {
    margin: 0 12rem;
    display: flex;
    flex-direction: column;
    /*gap: 0.5em;*/
  }
</style>
