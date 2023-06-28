
<script setup>

const props = defineProps({
    reviews: {
        type: Array,
        default: [],
    }
});


const ratingAverage = computed(() => {
    if (props.reviews?.length >= 0) {
        const total = props.reviews?.reduce((acc, review) => acc + review.rating, 0);
        let avg = total / props.reviews.length;
        // 小数点第一位まで表示する
        return avg.toFixed(1);
    } else {
        return 0;
    }
});


</script>

<template>

    <div class="flex flex-column md:flex-row">
        <div class="w-full md:w-6">
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">5</span>
                    <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                    <div class="h-full bg-yellow-500 w-9 border-round"></div>
                </div>
            </li>
            <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">4</span>
                <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                    <div class="h-full bg-yellow-500 w-6 border-round"></div>
                </div>
            </li>
            <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">3</span>
                <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                    <div class="h-full bg-yellow-500 w-2 border-round"></div>
                </div>
            </li>
            <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">2</span>
                <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                    <div class="h-full bg-yellow-500 w-4 border-round"></div>
                </div>
            </li>
            <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">1</span>
                <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                    <div class="h-full bg-yellow-500 w-3 border-round"></div>
                </div>
            </li>
        </ul>
    </div>
    <div class="w-full md:w-6 flex flex-column align-items-center justify-content-center mt-4 md:mt-0">
        <span class="text-5xl font-medium text-900 mb-3">
            {{ ratingAverage }}
        </span>
        <span class="mb-2">
            <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
            <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
            <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
            <i class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
            <i class="pi pi-star-fill text-300 text-2xl"></i>
        </span>
        <a tabindex="0" class="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium">
            {{ props.reviews.length }} Reviews
        </a>
    </div>
</div>

</template>
