<script setup>

const props = defineProps({
    item: {
        type: Object,
        default: {
            name: 'Place A',
            price: 100,
            seat: 10,
        }
    },
})

</script>


<template>
    <div class="flex align-items-center py-5 px-3">
        <i class="pi pi-fw pi-money-bill mr-2 text-2xl" />
        <p class="m-0 text-lg">Price: $ {{ props.item.price }}</p>

    </div>

    <div class="flex align-items-center py-5 px-3">
        <i class="pi pi-fw pi-ticket mr-2 text-2xl" />
        <p class="m-0 text-lg">Seat: {{ props.item.seat }}</p>
    </div>

</template>
