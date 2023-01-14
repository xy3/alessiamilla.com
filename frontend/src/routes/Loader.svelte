<script>

    // Wrap every letter in a span
    import anime from "animejs";
    import {onMount} from "svelte";

    onMount(() => {

        const textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
            .add({
                targets: '.ml12 .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 900,
                delay: (el, i) => 500 + 30 * i
            }).add({
            targets: '.ml12 .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 900,
            delay: (el, i) => 100 + 30 * i
        });
    })
</script>

<div>
    <h1 class="ml12">Loading</h1>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ml12 {
        font-weight: 200;
        font-size: 1.8em;
        text-transform: uppercase;
        letter-spacing: 0.2em;
    }

    .ml12 :global(.letter) {
        display: inline-block;
        line-height: 1em;
    }
</style>