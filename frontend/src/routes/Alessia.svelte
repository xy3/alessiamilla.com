<script>
    import PostContainer from "./PostContainer.svelte";

    export let bordered = true
</script>

<div class="header">
    <PostContainer bordered={bordered}>
        <div class="inner-content">
            <div class="images">
                <img class="am" src="/am.svg" alt="Alessia Milla">
                <img class="creative" src="/creative.svg" alt="Creative Director and consultancy">
            </div>
        </div>
    </PostContainer>
</div>

<style>
    .header {
        padding: 0;
    }

    .inner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 4vw;
    }

    .images {
        gap: 3vw;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .creative {
        width: 30vw;
    }

    @media only screen and (max-width: 600px) {
        .creative {
            width: 60vw;
        }
    }

    @media only screen and (max-width: 425px) {
        .creative {
            width: 70vw;
        }
    }

    @media only screen and (min-width: 600px) {
        .creative {
            width: 50vw;
        }
    }

    @media only screen and (min-width: 768px) {
        .creative {
            width: 40vw;
        }
    }

    @media only screen and (min-width: 1024px) {
        .creative {
            width: 35vw;
        }

        .images {
            gap: 2vw;
        }
    }

</style>
