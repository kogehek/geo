<template>
    <q-drawer
      show-if-above
      bordered
      :width="400"
      :breakpoint="500"
    >
      <q-scroll-area class="fit" style="overflow: hidden;">
        <div class="q-pa-sm">
            <BtnAddField/>
        </div>
      </q-scroll-area>
    </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BtnAddField from './BtnAddField.vue';

export default defineComponent({
  name: 'MapMenu',
  components: { BtnAddField },
//   setup() {
    
//   },
});
</script>

<style lang="scss" scoped>

</style>
