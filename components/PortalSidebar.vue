<script setup>

const radioValue = ref(null);
const checkboxValue = ref([]);
const switchValue = ref(false);

const calendarValue = ref(null);
const dropdownValues = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const dropdownValue = ref(null);


</script>

<template>
    <!-- <portal-search-menu></portal-search-menu> -->

    <ul class="layout-menu">

      <li class="layout-root-menuitem" >
        <div class="layout-menuitem-root-text">Search</div>
        <div class="p-inputgroup">
            <InputText placeholder="Keyword" />
            <Button label="Search">
                <i class="pi pi-search" />
            </Button>
        </div>
      </li>

      <li class="layout-root-menuitem" >
          <div class="layout-menuitem-root-text">Calendar</div>
          <Calendar
              v-model="calendarValue"
              :showIcon="true"
              dateFormat="yy/mm/dd"
              :showButtonBar="true">
          </Calendar>
      </li>

      <li class="layout-root-menuitem" >
          <div class="layout-menuitem-root-text">Dropdown</div>
          <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
      </li>

      <li class="layout-root-menuitem" >
          <div class="layout-menuitem-root-text">Radio Button</div>
          <div class="d-flex flex-column grid">
              <div class="col-12" v-for="(l, i) in ['Chicago', 'Los Angeles', 'New York']">
                  <div class="field-radiobutton mb-0">
                      <RadioButton :id="'option' + i" v-model="radioValue" name="option" :value="l" />
                      <label :for="'option' + i">{{ l }}</label>
                  </div>
              </div>
          </div>
      </li>

      <li class="layout-root-menuitem" >
          <div class="layout-menuitem-root-text">Checkbox</div>
          <div class="d-flex flex-column grid">
              <div class="col-12" v-for="(l, i) in ['Chicago', 'Los Angeles', 'New York']">
                  <div class="field-radiobutton mb-0">
                      <Checkbox :id="'checkOption' + i" v-model="checkboxValue" name="option" :value="l" />
                      <label :for="'checkOption' + i">{{ l }}</label>
                  </div>
              </div>
          </div>
      </li>

      <li class="layout-root-menuitem" >
          <div class="layout-menuitem-root-text">Input Switch</div>
          <div class="d-flex flex-column grid">
              <div class="col-12" >
                  <InputSwitch v-model="switchValue" />
              </div>
          </div>
      </li>


    </ul>

</template>

<style lang="scss" scoped></style>
