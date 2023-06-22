<script setup>
import { ref, onMounted } from 'vue';
import { PhotoService } from '@/service/PhotoService';
import { ProductService } from '@/service/ProductService';
import { useLayout } from '@/layouts/composables/layout';
const { layoutConfig, layoutState, isSidebarActive } = useLayout();

// layoutState.overlayMenuActive.value = false;
// layoutState.staticMenuDesktopInactive.value = true;

const breadcrumbHome = ref({ icon: 'pi pi-home', to: '/' });
const breadcrumbItems = ref([{ label: 'List', to: '/portal/list' }, { label: 'Detail' }]);
const nestedRouteItems = ref([
    {
        label: 'Top',
        to: '/portal/detail',
    },

    {
        label: 'Plan',
        to: '/portal/detail/plan'
    },

    {
        label: 'Review',
        to: '/portal/detail/review'
    },
    {
        label: 'Access',
        to: '/portal/detail/access'
    },
]);


const images = ref([]);
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

onMounted(() => {
    // ProductService.getProductsSmall().then((data) => (products.value = data));
    PhotoService.getImages().then((data) => (images.value = data));
});


</script>

<template>
    <div class="grid p-fluid">

        <div class="col-12 d-flex m-auto" >
            <div class="" style="border: 0px !important;">
                <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />

                <div class="mt-5">
                    <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="7" :circular="true" containerStyle="max-width: 1000px; margin: auto; height: 420px; ">
                        <template #item="slotProps">
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block; height: 300px; object-position: left; object-fit: cover;" />
                        </template>
                        <template #thumbnail="slotProps">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                        </template>
                    </Galleria>
                </div>
            </div>

            <div >
                <TabMenu :model="nestedRouteItems" />
                <router-view />
            </div>

        </div>


    </div>
</template>
