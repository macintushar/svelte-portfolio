<script lang="ts">
  import { Intro } from "@/data/index";
</script>

<div
  id="#intro"
  class="container mx-auto flex md:flex-row flex-col-reverse mt-20 max-w-7xl"
>
  <div
    class="md:w-2/3 items-center text-center sm:text-left p-2 text-black dark:text-white"
  >
    <div class="flex flex-col gap-6">
      <h2 class="text-lg sm:text-xl">👋 Hi, I'm</h2>
      <h1 class="text-4xl sm:text-6xl font-bold">Tushar <br />Selvakumar,</h1>
      <h2 class="text-lg sm:text-xl">
        a Glorified Construction Worker for the Internet (front-end developer),
        currently working at <b>{Intro.company || "Somewhere"}</b> as a
        <b>{Intro.role || "Something"}</b>.
      </h2>
      <div class="flex gap-3 justify-center sm:justify-start">
        {#each Intro.socials as social}
          <a href={social.link}>
            <img src={social.icon} class="h-8" alt={social.name} />
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div class="md:w-1/3 flex justify-center items-center p-2">
    <img
      src={Intro.image}
      alt="Tushar Selvakumar"
      class="rounded-full h-[280px] w-[280px] mx-auto"
    />
  </div>
</div>
