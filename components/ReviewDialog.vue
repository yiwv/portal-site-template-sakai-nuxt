<script setup>

import Rating from 'primevue/rating';
import { postReview, fetchCurrentUserRef } from '@/composables/useFirebase.js';

const currentUser = ref();

if (process.client) {
    fetchCurrentUserRef(currentUser);
}

const props = defineProps({
    visible: Boolean,
    itemCode: String,
});

const emit = defineEmits(['close', 'submitted']);

const submitted = ref(false);

const reviewDefaultValue = () => ( {rating: 0, comment: '' } );

const review = ref(reviewDefaultValue())


const hideDialog = () => {
    submitted.value = false;
    emit('close');
};

const saveReview = async () => {
    submitted.value = true;

    if (review.value.rating) {
          await postReview(review.value, props.itemCode, currentUser.value);

          emit('submitted');

          review.value = reviewDefaultValue();

          hideDialog();
      }

};



</script>


<template>

<Dialog
    v-model:visible="props.visible"
    :style="{ width: '650px' }"
    header="Send Review"
    :modal="true"
    class="p-fluid">

    <div class="field">
        <label for="rating">Rating</label>
        <Rating v-model="review.rating" :cancel="false" :readonly="false" />
        <small v-if="submitted && review.rating == 0" class="p-invalid" style="color: red;">Rating is required.</small>

    </div>
    <div class="field">
        <label for="comment">Comment</label>
        <Textarea id="comment" v-model="review.comment" required="true" rows="3" cols="20" />
    </div>

    <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveReview" />
    </template>
</Dialog>


</template>

