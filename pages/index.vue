<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { ProductService } from '@/service/ProductService';
import { onMounted, reactive, ref, watch } from 'vue';

import PortalList from '@/pages/portal/List.vue';

</script>

<template>
    <PortalList></PortalList>
</template>
