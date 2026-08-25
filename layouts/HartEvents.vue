<script setup lang="ts">
interface Props {
  class: string;
  layoutClass: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="slidev-layout bg-smu-primaryRed two-columns w-full h-full grid grid-cols-[40%_1fr] gap-x-[9%] justify-center relative overflow-hidden"
    :class="props.layoutClass"
  >    
    <div
      class="absolute top-0 -left-20 h-full w-[60%] bg-smu-primaryBlue z-1 [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]"
    ></div>

    <div
      class="col-left z-2 flex flex-col justify-between items-center text-center text-balance"
      :class="props.class"
    >
        <div class="relative w-full h-24 flex items-center">
            <div class="absolute top-0 left-0 z-0 w-full h-full">
                <img src="/tape.png" alt="" class="w-3/4 object-fit">
            </div>
            <div class="relative z-10 flex items-center -mt-4 pl-8 gap-2">
                <img src="/pin.webp" alt="pin" class="w-8" />
                <p class="text-gray-900 pt-3 text-2xl font-more-sugar">Becoming an...</p>
            </div>
        </div>
        <img
          src="/engineering-leader-with-hart.png"
          alt="Engineering Leader with Heart"
          class="w-full scale-160 ml-18"
        />
    </div>
    <div class="col-right z-2 flex flex-col items-center justify-between text-center" :class="props.class">
        <h2 class="font-bold text-balance text-trade-gothic-bold italic font-bold">Grow Your Professional Network!</h2>
        <div class="flex flex-col items-center w-full">
            <p class="text-sm !mb-0 text-trade-gothic-bold">Mark your calendar for Hartr to Heart Industry Seminars:</p>
            <div class="font-bold [&_ul]:list-none font-['Arial',_sans-serif]">
                <slot />
            </div>
        </div>
        <div class="w-full flex flex-col items-center">
        <p class="w-5/8 !m-0 text-balance">Have you checked in and engaged on LinkedIn Today?</p>
        <img src="/qr-hart.png" alt="QR Code for Hart Center on LinkedIn" class="aspect-square w-38" />
        <img src="/smu-hart-center-for-engineering-leadership.png" alt="SMU Hart Center for Engineering Leadership" class="w-1/2" />
        </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'More Sugar';
  src: url('/MoreSugar-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.font-more-sugar {
  font-family: 'More Sugar', sans-serif;
}

@font-face {
  font-family: 'Trade Gothic Bold';
  src: url('/TradeGothic%20Bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.font-trade-gothic-bold {
  font-family: 'Trade Gothic Bold', sans-serif;
}
</style>