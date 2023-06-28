<script setup>

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

</script>


<template>
    <div class="flex align-items-center py-5 px-3">
        <i class="pi pi-fw pi-map mr-2 text-2xl" />
        <p class="m-0 text-lg">Access: {{ props.item.address }}</p>
    </div>
</template>

