<script>
  import Button from "@/components/Button.svelte";
  import Section from "@/components/Section.svelte";
  import { PodcastData } from "@/data/index";
</script>

<Section
  title={PodcastData.sectionData.title}
  subtitle={PodcastData.sectionData.subtitle}
  id="pod"
>
  <div slot="body" class="flex flex-col items-center gap-5 mt-4">
    <iframe
      title="Bored Kid Podcast"
      src="https://podcasters.spotify.com/pod/show/boredkid/embed"
      class="max-w-[600px] w-full min-w-[250px] h-[100px]"
      frameborder="0"
      scrolling="no"
    />
    <Button
      props={{
        buttonText: PodcastData.ctaText,
        buttonImage: PodcastData.ctaImage,
        buttonLink: PodcastData.ctaLink,
        buttonHasImage: true,
      }}
    />
  </div>
</Section>
