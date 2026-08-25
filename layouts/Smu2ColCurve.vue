<!-- <template>
  <div class="relative w-full h-full overflow-hidden bg-[#e01f3d]">
    
    <div class="absolute 
    top-0 -left-8 
    h-full w-[60%] 
    bg-smu-primaryBlue 
    z-1 
    [clip-path:ellipse(75%_125%_at_0%_50%)]"></div>

    <div class="flex w-full h-full z-2 relative">
      <div class="basis-[40%] shrink-0 text-white p-8">
        <slot name="left" />
      </div>
      <div class="flex-1 text-white p-8">
        <slot name="right" />
      </div>
    </div>
  </div>
</template> -->

<script setup lang="ts">
    interface Props {
        class: string;
        layoutClass: string;
    }

    const props = defineProps<Props>();
</script>

<template>
  <div class="slidev-layout 
    bg-smu-primaryRed two-columns 
    w-full h-full 
    grid grid-cols-[35%_1fr] gap-x-[9%] justify-center
    relative 
    overflow-hidden" 
    :class="props.layoutClass">

    <div class="absolute 
      top-0 -left-8 
      h-full w-[60%] 
      bg-smu-primaryBlue 
      z-1 
      [clip-path:ellipse(75%_125%_at_0%_50%)]"></div>

    <div class="col-left z-2 flex flex-col items-center text-center text-balance" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-right z-2" :class="props.class">      
      <slot name="right" />
    </div>
  </div>
</template>