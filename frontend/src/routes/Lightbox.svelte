<script lang="ts">
    import {afterUpdate} from "svelte";

    export let img = ""
    export let alt = ""
    export let open = false
    export let setOpen: (open: boolean) => void

    afterUpdate(async () => {
        const close = await document.getElementById('close')
        if (close != null) {
            document.addEventListener('mousemove', function (ev) {
                close.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
                close.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
            }, false);
        }
    })

    function on_key_up(event) {
        switch (event.key) {
            case "Escape":
                setOpen(false)
                event.preventDefault();
                break;
        }
    }
</script>


<svelte:window
        on:keyup={on_key_up}
/>

{#if open}
    <div class="container">
        <div class="bg" on:click={() => {setOpen(false)}}>
            <div id="close">CLOSE</div>
        </div>
        <img src={img.replace(/size\/w\d+\//, "")} alt={alt}>
    </div>
{/if}

<style>
    .container {
        position: fixed;
        z-index: 12;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bg {
        background: #000000F0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: fixed;
        top: 0;
        left: 0;
    }

    #close {
        position: fixed;
        color: white;
        transition: transform 0.1s;
        z-index: 1;
    }

    img {
        max-width: 80%;
        max-height: 90%;
        z-index: 1;
        /*pointer-events: none;*/
    }
</style>
