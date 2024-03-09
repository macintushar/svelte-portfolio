<script lang="ts">
  import { Intro } from "@/data/index";
</script>

<div
  class="container mx-auto flex md:flex-row flex-col-reverse mt-20 max-w-7xl"
>
  <div
    class="md:w-2/3 items-center text-center sm:text-left p-2 text-black dark:text-white"
  >
    <div class="flex flex-col gap-6">
      <h2 class="text-xl">👋 Hi, I'm</h2>
      <h1 class="text-6xl font-bold">Tushar <br />Selvakumar,</h1>
      <h2 class="text-xl">
        a Glorified Construction Worker for the Internet (front-end developer),
        currently working at <b>{Intro.company || "Somewhere"}</b> as a
        <b>{Intro.role || "Something"}</b>.
      </h2>
    </div>
  </div>
  <div class="md:w-1/3 flex justify-center items-center p-2">
    <img
      src="https://avatars.githubusercontent.com/u/54372016?v=4"
      alt="Tushar Selvakumar"
      class="rounded-full h-[280px] w-[280px] mx-auto"
    />
  </div>
</div>
