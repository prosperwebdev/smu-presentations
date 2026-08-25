<script setup lang="ts">
    import type { AnchorHTMLAttributes } from 'vue';
    
    interface Props extends /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'target' | 'rel'> {};

    const {...attrs} = defineProps<Props>();
</script>

<template>
    <a v-bind="attrs" target="_blank" rel="noopener noreferrer"><slot /></a>
</template>


