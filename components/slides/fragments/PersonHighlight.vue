<script lang="ts">
    export interface Person {
        name: string;
        image: string;
        title: string;
        org: string;
    }
</script>

<script setup lang="ts">
    import {cn, type ClassValue} from '../../../utils/cn';

    interface Props extends Person {
        class?: ClassValue;
    }

    const {image, name, title, org, class: classValue = ''} = defineProps<Props>();
</script>

<template>
    <div :class="cn('flex flex-col', classValue)">        
        <div class="w-56">
            <img :alt="name" :src="image" class="w-full h-full object-contain block"/>
        </div>
        <p>{{ name }}</p>
        <img alt="" src="/decorative-divider.png" aria-hidden="true"
            class="w-full h-full object-contain block"/>
        <p>{{ title }}/{{ org }}</p>
    </div>
</template>
