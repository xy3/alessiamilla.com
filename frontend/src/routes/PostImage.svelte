<script lang="ts">
    import {PUBLIC_API_URL} from "$env/static/public";
    import PostContainer from "./PostContainer.svelte";

    export let slug
    export let title
    export let image
    export let color = "#000000"
    $: vid = image && image.endsWith('mp4')

    export let poster
    export let smallPoster

</script>

<a href="/post/{slug}" on:click>
    <PostContainer>
        {#if image && !vid}
            <img src={PUBLIC_API_URL + image} alt={title + " image"}>
        {/if}
        {#if vid}
            <video
                    class="lazy"
                    data-src={PUBLIC_API_URL + image}
                    poster={smallPoster ? PUBLIC_API_URL + smallPoster : ""}
                    data-poster={poster ? PUBLIC_API_URL + poster : ""}
                    preload="metadata"
                    playsinline
                    autoplay
                    muted
                    loop
                    style={"background:"+color}>
                <source data-src={PUBLIC_API_URL + image} type="video/mp4">
            </video>

        {/if}
        <div class="title" style="background-color:{color+'80'};">
            <h3>{title}</h3>
        </div>
    </PostContainer>
</a>

<style>
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
        font-size: 4vw;
        margin: 0;
    }

    .title:hover {
        opacity: 1;
    }

    .title h3 {
                    font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: bold;
            letter-spacing: 0.0em;
            font-size: 4.15vw;
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
            letter-spacing: 0.0em;
            font-size: 4.15vw;
        }
        33% {
            font-family: 'Vegawanty', serif;
            font-style: normal;
            margin-bottom: -7px;
            letter-spacing: 0.3vw;
            font-size: 4.1vw;
        }
        66% {
            font-family: 'Lato', sans-serif;
            font-weight: lighter;
            font-style: italic;
            margin-bottom: -3px;
            letter-spacing: 0.2vw;
            font-size: 4.2vw;
        }
    }


    img {
        object-fit: cover;
        object-position: center;
        flex: 1;
        width: 100%;
    }

</style>
