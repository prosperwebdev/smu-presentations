<script setup lang="ts">
import Callout3Part from "../Callout3Part.vue";
import CalloutGrid3 from "../CalloutGrid3.vue";
import ExternalLink from "../ExternalLink.vue";
</script>

<template>
  <div class="grid grid-cols-[1fr_3fr] gap-x-8 items-center">
    <h2>Various Types of Frameworks for Leadership Mindset</h2>

    <CalloutGrid3 class="max-w-2xl">
      <Callout3Part color="var(--smu-secondary-yellow)">
        <template #icon>
          <div class="i-streamline-flex-critical-thinking-2 text-6xl" />
        </template>
        <template #headline>
          <h3 class="font-sm font-bold">
            <ExternalLink href="https://tll.mit.edu/teaching-resources/inclusive-classroom/growth-mindset/"
              >Growth Mindset</ExternalLink
            >
          </h3>
        </template>
        <template #description>
          <p>Skills grow through learning. Use with setbacks and feedback.</p>
        </template>
      </Callout3Part>

      <Callout3Part color="var(--smu-secondary-red)">
        <template #icon>
          <div class="i-fluent-people-team-24-filled text-6xl" />
        </template>
        <template #headline>
          <h3 class="font-bold">
            <ExternalLink href="https://www.6sigma.us/project-management/stakeholder-mapping/"
              >Stakeholder Mapping</ExternalLink
            >
          </h3>
        </template>
        <template #description>
          <p>Mapping stakeholders. Use in early planning.</p>
        </template>
      </Callout3Part>

      <Callout3Part color="var(--smu-secondary-blue)">
        <template #icon>
          <div class="i-ri-target-fill text-6xl" />
        </template>
        <template #headline>
          <h3 class="font-bold">
            <ExternalLink href="https://www.forbes.com/advisor/business/smart-goals/"
              >SMART Goals</ExternalLink
            >
          </h3>
        </template>
        <template #description>
          <p>Structured goal settings. Use for clear action goals.</p>
        </template>
      </Callout3Part>
    </CalloutGrid3>
  </div>
</template>
