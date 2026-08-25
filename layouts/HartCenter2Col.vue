<script setup lang="ts">
import {cn} from '../utils/cn';

interface Props {
  class: string;
  layoutClass: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="smu flex flex-col h-full w-full p-0 m-0 relative bg-smu-light">

    <!-- GLOBAL HEADER: Top Area -->
    <header class="w-full h-14 shrink-0 relative bg-smu-primaryBlue">
      <!-- Red Bottom Border -->
      <div class="absolute bottom-0 left-0 w-full h-[2px] bg-smu-primaryRed z-20"></div>

      <!-- Header Content Overlay -->
      <div class="absolute inset-0 flex z-30">
        <!-- Left Side: Badge & Title -->
        <div class="flex-grow flex items-center pl-4">
          <img src="/hart.png" alt="Hart Logo" class="w-12 h-12 shrink-0 object-contain" />
          <span class="text-4xl font-normal leading-none text-smu-light font-have-heart tracking-wide mt-1">
            Engineering Leader With Hart
          </span>
        </div>

        <!-- Right Side: Course Text -->
        <div class="flex items-end justify-end pr-4 pb-2 h-2/3 w-72 bg-smu-primaryRed mt-auto" style="clip-path: polygon(3rem 0, 100% 0, 100% 100%, 0 100%);">
          <span class="text-xs tracking-wider font-bold font-tradegothic-bold text-white whitespace-nowrap">
            ENGR 2111 Engineering Leadership
          </span>
        </div>
      </div>
    </header>

    <img src="/building-with-pillars.webp" 
           alt=""
           class="absolute inset-0 h-auto max-w-[200%] translate-y-[9%] translate-x-[9%] opacity-10 pointer-events-none z-0"
           aria-hidden="true" />
    
    <div class="relative text-smu-dark px-8 pt-4">
      <div class="">  
        <slot />
      </div>
      <main class="slidev-layout two-columns relative w-full h-full grid grid-cols-[40fr_60fr] gap-8 overflow-hidden p-0" :class="props.layoutClass">
        <div class="col-left" :class="props.class">
          <slot name="left" />
        </div>
        <div class="col-right" :class="props.class">
          <slot name="right" />
        </div>
      </main>
    </div>

    <!-- GLOBAL FOOTER: Bottom Area -->
    <footer class="w-full shrink-0 relative">
      <!-- Thinner Blue Top Border Line -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-smu-primaryBlue" />

      <div class="flex justify-between items-center px-4 py-4 h-12">
        <!-- Footer Left: Hart Center Logo -->
        <img src="/Hart_Center_logo.webp" alt="SMU Hart Center for Engineering Leadership" class="h-5 object-contain" />

        <!-- Footer Right: Lyle School Logo -->
        <img src="/Lyle_FormalHrz_digitalonly_BR.webp" alt="SMU Lyle School of Engineering" class="h-5 object-contain" />
      </div>
    </footer>

  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Have Heart One';
  src: url('/Have%20Heart%20One.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TradeGothic Bold';
  src: url('/TradeGothic%20Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.font-have-heart {
  font-family: 'Have Heart One', cursive, sans-serif;
}

.font-tradegothic-bold {
    font-family: 'TradeGothic Bold', sans-serif;
}

.smu {
  --slidev-padding: 0;
}
</style>