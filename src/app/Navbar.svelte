<script>
  import { NavData } from "@/data";
</script>

<div
  class="bg-white dark:bg-neutral-950 min-h-12 text-black dark:text-white flex justify-around align-bottom sm:flex-row flex-col py-0 sm:py-2 space-y-4 sm:space-y-0"
>
  <div class="flex justify-center">
    <a href="#intro">
      <h1
        class="text-2xl font-bold text-center sm:text-start py-2 sm:py-0 w-fit border-b sm:border-0"
      >
        {NavData.title}
      </h1>
    </a>
  </div>
  <div
    class="flex sm:flex-row flex-row justify-around sm:gap-3 px-4 sm:px-0 pb-2 border-b sm:border-0"
  >
    {#each NavData.navItems as NavItem}
      <div>
        <a href={NavItem.ref} class="flex flex-row gap-1">
          <h1 class="text-xl hover:font-semibold">{NavItem.icon}</h1>
          <h1 class="text-xl hover:font-semibold hidden sm:block">
            {NavItem.text}
          </h1>
        </a>
      </div>
    {/each}
  </div>
</div>
