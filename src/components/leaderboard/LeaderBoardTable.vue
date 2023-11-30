<script setup>
    import { reactive } from 'vue'

    const props = defineProps({
        isHeader: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    const classes = reactive({
        'text-sm grid grid-cols-8 py-5 px-5 border-b-slate-100 border': true,
        'font-semibold bg-blue-100': props.isHeader,
    })
</script>

<template>
    <div :class="classes">
        <div class="col-span-4">
            <slot name="teamName"></slot>
        </div>
        
        <div class="col-span-1">
            <slot name="mp"></slot>
        </div>

        <div class="col-span-1">
            <slot name="gf"></slot>
        </div>

        <div class="col-span-1">
            <slot name="ga"></slot>
        </div>

        <div class="col-span-1">
            <slot name="points"></slot>
        </div>
    </div>
</template>