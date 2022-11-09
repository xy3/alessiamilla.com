<div class="marquee">
  <div class="">
    <p class="">
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
      <span aria-hidden="true">alessia.milla@gmail.com</span>
    </p>
  </div>
</div>

<style>
  .marquee {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(-180deg);
  }

  .marquee p {
    overflow: hidden;
    line-height: var(--marquee-width);
    margin: 0;
    white-space: nowrap;
    height: 100%;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }

  .marquee span {
    animation: marquee 3s linear infinite;
    display: inline-flex;
    padding-bottom: 10px;
  }

  @keyframes marquee {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-100%);
    }
  }
</style>
