<script>
    import Alessia from "../Alessia.svelte";

    import {PUBLIC_API_URL} from "$env/static/public";
    import {onMount} from "svelte";
    import rallax from 'rallax.js'


    onMount(() => {
        rallax(".top.left > figure", {speed: 0.2})
        rallax(".top.right > figure", {speed: 0.2})
        rallax(".bottom.left > figure", {speed: 0.2})
        rallax(".bottom.right > figure", {speed: 0.2})
    })


    export let data;
</script>

<svelte:head>
    <title>About | Alessia Milla - Creative Director</title>
    <meta name="description" content="About this app"/>
</svelte:head>

{#if data}
    <div class="container" data-scene>
        <div class="video-container">
            <video src="/bg.mp4" muted autoplay loop></video>
        </div>
        <div class="content">
            <Alessia/>
            <div class="inner-content">
                <div class="floating top left">
                    <figure data-speed="0.2">
                        <img src={PUBLIC_API_URL + data.data.data.attributes.TopLeftMedia.data.attributes.url}
                             alt={data.data.data.attributes.TopLeftCaption + " image"}>
                        <figcaption>{data.data.data.attributes.TopLeftCaption}</figcaption>
                    </figure>
                </div>
                <div class="floating top right">
                    <figure>
                        <img src={PUBLIC_API_URL + data.data.data.attributes.TopRightMedia.data.attributes.url}
                             alt={data.data.data.attributes.TopRightCaption + " image"}>
                        <figcaption>{data.data.data.attributes.TopRightCaption}</figcaption>
                    </figure>
                </div>
                {#if data.data.data.attributes.BottomLeftMedia.data}
                    <div class="floating bottom left">
                        <figure>
                            <img src={PUBLIC_API_URL + data.data.data.attributes.BottomLeftMedia.data.attributes.url}
                                 alt={data.data.data.attributes.BottomLeftCaption + " image"}>
                            <figcaption>{data.data.data.attributes.BottomLeftCaption}</figcaption>
                        </figure>
                    </div>
                {/if}
                {#if data.data.data.attributes.BottomRightMedia.data}
                    <div class="floating bottom right">
                        <figure>
                            <img src={PUBLIC_API_URL + data.data.data.attributes.BottomRightMedia.data.attributes.url}
                                 alt={data.data.data.attributes.BottomRightCaption + " image"}>
                            <figcaption>{data.data.data.attributes.BottomRightCaption}</figcaption>
                        </figure>
                    </div>
                {/if}
                <p>
                    {@html data.data.data.attributes.Content}
                </p>
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        border: 3px solid white;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    video {
        object-fit: cover;
        position: absolute;
        min-width: 100%;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        z-index: 1;
        padding-bottom: 7em;
        background: #00000060;
    }

    .content > .inner-content {
        position: relative;
        background-color: #00000080;
        padding: 2em;
        width: 50%;
    }

    .floating {
        position: absolute;
        width: 300px;
    }

    .floating img, .floating figure {
        width: 100%;
        margin: 0;
    }

    .top {
        top: 4em;
    }

    .left {
        left: -350px;
    }

    .bottom {
        top: 550px;
    }

    .right {
        right: -350px;
    }

    .top.left {
        transform: rotate(-6deg);
    }

    .top.right {
        transform: rotate(6deg);
    }

    .bottom.left {
        transform: rotate(6deg);
    }

    .bottom.right {
        transform: rotate(-6deg);
    }

    figcaption {
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        color: white;
        margin: 1em;
    }

    .video-container {
        flex: 1;
    }

    /*.top-right {*/
    /*  right: -300px;*/
    /*  top: 4em;*/
    /*  transform: rotate(10deg);*/
    /*}*/

    /*.bottom-left {*/
    /*  left: -300px;*/
    /*  top: 4em;*/
    /*  transform: rotate(-10deg);*/
    /*}*/

    /*.bottom-right {*/

    /*}*/


</style>
