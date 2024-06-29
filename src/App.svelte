<script lang="ts">
  import Navbar from "@/app/Navbar.svelte";
  import Intro from "@/app/Intro.svelte";
  import Projects from "@/app/Projects.svelte";
  import Blogs from "@/app/Blogs.svelte";
  import Podcast from "@/app/Podcast.svelte";
  import Contact from "@/app/Contact.svelte";
</script>

<div
  class="bg-white dark:bg-neutral-950 h-fitI min-h-screen max-h-full w-full min-w-full max-w-screen px-4 p-2 space-y-6"
>
  <Navbar />
  <Intro />
  <Projects />
  <Blogs />
  <Podcast />
  <Contact />
</div>
