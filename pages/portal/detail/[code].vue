<script setup>
import { ref, onMounted, computed } from 'vue';
import { PhotoService } from '@/service/PhotoService';
import { getItemByCode } from '@/composables/useFirebase.js';
import { useToast } from 'primevue/usetoast';

const route = await useRoute()

const item = ref({});

const code = route.params.code;

async function loadItem () {

    let code = route.params.code;

    item.value = await getItemByCode(code);
}

const breadcrumbHome = ref({ icon: 'pi pi-home', to: '/' });
const breadcrumbItems = ref([{ label: 'List', to: '/portal/list' }, { label: 'Detail' }]);
const nestedRouteItems = ref([
    {
        label: 'Top',
        to: `/portal/detail/${code}`,
    },

    {
        label: 'Plan',
        to: `/portal/detail/${code}/plan`
    },

    {
        label: 'Review',
        to: `/portal/detail/${code}/review`
    },
    {
        label: 'Access',
        to: `/portal/detail/${code}/access`
    },
]);

const galleriaResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);


const images = ref([]);
await PhotoService.getImages().then((data) => (images.value = data));

onMounted(async () => {
    await loadItem();
    let imagesData = [];

    let topImageObj = {
        itemImageSrc: item.value.image,
        thumbnailImageSrc: item.value.image,
        alt: 'Description for Image 13',
        title: 'Title 13'
    };

    imagesData = [topImageObj, ...images.value];

    images.value = imagesData;
});



</script>

<template>
    <div class="grid p-fluid">

        <div class="col-12 d-flex m-auto" >
            <div class="" style="border: 0px !important;">
                <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />

                <div class="mt-5">
                    <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="7" :circular="true"
                        containerStyle="max-width: 1000px; margin: auto; height: 420px; overflow: hidden; object-fit: cover; ">
                        <template #item="slotProps">
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                style="width: 100%; display: block; height: 300px; object-position: left; object-fit: cover; overflow: hidden;" />
                        </template>
                        <template #thumbnail="slotProps">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="  display: block;  overflow: hidden; object-fit: cover; width: 80px; " />
                        </template>
                    </Galleria>
                </div>
            </div>

            <div >
                <TabMenu :model="nestedRouteItems" />
                <router-view :item="item" />
            </div>

        </div>


    </div>
</template>
