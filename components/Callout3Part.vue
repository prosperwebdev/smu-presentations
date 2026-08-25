<script setup lang="ts">
    import {computed} from 'vue';
    import {cn, type ClassValue} from '../utils/cn';

    interface CalloutProps {
        color?: string;
        class?: ClassValue;
    }

    const {color: c = "#ffffff", class: className = ''} = defineProps<CalloutProps>();

    const cssColorVar = computed(() => `--calloutColor: ${c};`)
</script>

<template>
    <div :class="cn('col-span-5 grid grid-cols-subgrid items-center bg-[color-mix(in_srgb,var(--calloutColor)_25%,transparent)] rounded-2xl px-4', className)" :style="cssColorVar">
        
        <div class="text-[var(--calloutColor)]">
            <slot name="icon"/>
        </div>

        <div class="w-[2px] h-[75%] rounded-2xl bg-[var(--calloutColor)]"/>

        <div class="h-full px-4 flex flex-col justify-center">
            <slot name="headline"/>
        </div>

        <div class="w-[2px] h-[75%] rounded-2xl bg-[var(--calloutColor)]"/>

        <div class="h-full px-4 flex flex-col justify-center text-smu-dark">
            <slot name="description"/>
        </div>
    </div>    
</template>
