<!-- components/CalloutGrid.vue -->
<script setup lang="ts">
    import {cn, type ClassValue} from '../utils/cn';

    interface Props {
        class: ClassValue,
    }

    const {class: className = ''} = defineProps<Props>();

</script>

<template>
    <div :class="cn('grid grid-cols-[min-content_min-content_minmax(auto,220px)_min-content_1fr] gap-x-2 gap-y-5', className)">        
        <slot/>
    </div>
</template>