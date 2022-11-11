<script lang="ts">
  import {API_URL} from "../lib/api/strapi";

  export let slug
  export let title
  export let image
  export let color = "#000000"
  $: vid = image && image.endsWith('mp4')
</script>

<a href="/post/{slug}">
  <div class="container">
    {#if image && !vid}
      <img src={API_URL + image} alt={title + " image"}>
    {/if}
    {#if vid}
      <video src={API_URL + image} autoplay muted loop></video>
    {/if}
    <div class="title" style="background-color:{color+'80'};">
      <h3>{title}</h3>
    </div>
  </div>
</a>

<style>
  .container {
    display: flex;
    position: relative;
    height: 400px;
    overflow: hidden;
    border: 3px solid white;
    margin: -3px 0 0 0;
  }

  video {
    object-fit: cover;
    object-position: center;
    flex: 1;
    width: 100%;
  }

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  h3 {
    text-transform: uppercase;
    font-size: 4em;
    margin: 0;
  }

  .title:hover {
    opacity: 1;
  }

  .title:hover h3 {
    animation-name: fontChange;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
  }

  @keyframes fontChange {
    0% {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: bold;
    }
    33% {
      font-family: 'Vegawanty', serif;
      font-style: normal;
      margin-bottom: -15px;
    }
    66% {
      font-family: 'Lato', sans-serif;
      font-weight: lighter;
      font-style: italic;
      margin-bottom: 0;
    }
  }

  img {
    object-fit: cover;
    object-position: center;
    flex: 1;
    width: 100%;
  }
</style>
