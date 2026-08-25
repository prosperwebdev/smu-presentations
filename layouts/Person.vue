<script lang="ts">
export interface Person {
  name: string;
  image: string;
  title: string;
  org: string;
}
</script>

<script setup lang="ts">
import {useSlideContext} from '@slidev/client'

interface Props {
  class: string;
  title: string;
  layoutClass: string;
  person: Person;
}

const props = defineProps<Props>();
const { $slidev } = useSlideContext();

const baseURL = import.meta.env.BASE_URL;
</script>

<template>
  <div
    class="slidev-layout bg-smu-primaryRed two-columns w-full h-full grid grid-cols-[35%_1fr] gap-x-[9%] justify-center relative overflow-hidden"
    :class="props.layoutClass"
  >
    <div
      class="absolute top-0 -left-8 h-full w-[60%] bg-smu-primaryBlue z-1 [clip-path:ellipse(75%_125%_at_0%_50%)]"
    ></div>

    <div
      class="col-left z-2 flex flex-col items-center text-center text-balance"
      :class="props.class"
    >
      <slot name="headlineLeft">
        <h2 class="mb-4 text-bold text-4xl" v-if="$slidev.nav.currentFrontmatter.title">{{ $slidev.nav.currentFrontmatter.title }}</h2>
        <h2 class="mb-4 text-bold text-4xl" v-else>About</h2>
      </slot>
      <div class="flex flex-col items-center">
        <div class="w-48">
          <img
            :alt="props.person.name"
            :src="baseURL + props.person.image"
            class="w-full h-full object-cover block rounded-xl shadow-lg"
          />
        </div>
        <p class="text-2xl">{{ props.person.name }}</p>
        <img
          alt=""
          src="/decorative-divider.png"
          aria-hidden="true"
          class="w-full h-full object-contain block"
        />
        <p class="">{{ props.person.title }} / {{ props.person.org }}</p>
      </div>
    </div>
    <div class="col-right z-2" :class="props.class">      
      <slot />
      <slot name="right" />
    </div>
  </div>
</template>
