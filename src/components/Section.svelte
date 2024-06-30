<script lang="ts">
  export let title: string = "Title";
  export let subtitle: string = "Subtitle";
  export let id: string = "section";
</script>

<div class="container mx-auto max-w-7xl" {id}>
  <header class="flex flex-col">
    <h1 class="text-3xl my-2 font-semibold text-black dark:text-white">
      {title}
    </h1>
    <h2 class="text-xl text-black dark:text-white">
      {subtitle}
    </h2>
  </header>

  <slot name="body" />

  <div>
    <slot />
  </div>
</div>
