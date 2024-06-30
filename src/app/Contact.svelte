<script>
  import Section from "@/components/Section.svelte";
  import { ContactData } from "@/data/index";
</script>

<Section
  title={ContactData.sectionData.title}
  subtitle={ContactData.sectionData.subtitle}
  id="contact"
>
  <div slot="body" class="mt-4 flex justify-center mb-16 sm:mb-32">
    <a href={ContactData.ctaLink} target="_blank" rel="noopener noreferrer">
      <button
        class="dark:bg-black bg-gray-900/50 dark:text-white text-black px-4 py-2 rounded-md flex flex-row justify-center h-16 w-40 gap-1 items-center"
      >
        <h1 class="text-xl">{ContactData.ctaText}</h1>
      </button>
    </a>
  </div>
</Section>
