<script>
  import Alessia from "../Alessia.svelte";
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app"/>
</svelte:head>

<div class="container">
  <video src="/bg.mp4" muted autoplay loop></video>
  <div class="content">
    <Alessia/>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum augue eu tincidunt pulvinar.
        Donec
        varius faucibus accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae;
        Aenean aliquet nec odio eget rhoncus. Curabitur quam erat, interdum ut nibh quis, dictum rhoncus sem.
        Pellentesque
        et tellus commodo, tristique arcu et, facilisis leo. Pellentesque in suscipit arcu, vel fermentum tellus. Donec
        convallis vehicula quam a consectetur. Suspendisse risus nisi, condimentum elementum auctor non, posuere in
        nisi.
        Nunc ipsum neque, molestie vel erat vitae, ornare faucibus felis. Nunc ac ligula fermentum, elementum metus a,
        lobortis felis. Ut ut mattis metus. Vestibulum faucibus quam ac nisl convallis, a iaculis velit hendrerit. Donec
        vitae sapien eget sapien ultrices tincidunt sit amet ac mi. Vivamus pharetra, eros eget viverra commodo, mauris
        quam
        mattis dui, non tristique ante magna et lectus.

        Duis a tellus sodales, luctus urna eget, tincidunt quam. Aliquam molestie pharetra ante, eu rutrum turpis
        pharetra
        non. Duis vulputate tellus ante, lobortis varius purus ullamcorper id. Nunc vel magna odio. Mauris et neque
        placerat, dapibus leo a, commodo nibh. Pellentesque feugiat dui eu nibh tincidunt dapibus. Cras aliquam
        vulputate
        pulvinar. In magna ipsum, congue ut est vitae, rhoncus elementum sapien. Donec finibus mattis mi, sodales
        euismod
        odio tincidunt ac. Donec ut laoreet est, et mattis dui. Nulla a magna sit amet purus posuere placerat vitae ut
        nulla.

        Nullam quis euismod urna. Sed non turpis ligula. Phasellus volutpat nec mauris nec ornare. Maecenas nisl mi,
        placerat vel commodo non, aliquam vitae ipsum. Donec egestas ex et arcu pulvinar, at ullamcorper lectus
        dignissim.
        Donec interdum, nunc eget venenatis sodales, sem felis dapibus augue, nec congue augue tellus quis sapien.
        Suspendisse blandit a felis id vulputate. Suspendisse potenti. Duis cursus mattis sapien.
      </p>
    </div>

  </div>
</div>

<style>
  .container {
    border: 3px solid white;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  video {
    flex: 1;
    object-fit: fill;
  }

  .content {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
  }

  .content > div {
    z-index: 100;
    background-color: #00000080;
    padding: 2em;
    width: 50%;
  }
</style>
