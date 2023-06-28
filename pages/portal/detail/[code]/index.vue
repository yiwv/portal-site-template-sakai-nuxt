<script setup>
import { ref } from "vue";

const calendarExampleDate = ref();

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});


</script>


<template>

<div class="grid p-fluid p-5">
    <div class="col-12 md:col-6">

        <div class="flex align-items-center px-3">
            <!-- <i class="pi pi-fw pi-user mr-2 text-2xl" /> -->
            <!-- <p class="m-0 text-lg">Personal Component Content via Child Route</p> -->
            <h2>{{ props.item.name }}</h2>
        </div>

        <div class="flex align-items-center px-3">
            <h3>{{ props.item.description }}</h3>
        </div>

    </div>

    <div class="col-12 md:col-6 p-5">
        <Calendar v-model="calendarExampleDate" inline showWeek />
    </div>

</div>
</template>
