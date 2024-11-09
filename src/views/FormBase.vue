<template>
  <div class="flex flex-body">
    <VueDraggable v-model="list1" :animation="150" ghostClass="ghost"
      :group="{ name: 'people', pull: 'clone', put: false }" :clone="clone" :sort="false"
      class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded compList">
      <div v-for="item in list1" :key="item.id" class="cursor-move h-50px bg-gray-500/5 rounded p-3">
        {{ item.name }}
      </div>
    </VueDraggable>
    <VueDraggable v-model="list2" :animation="150" group="people" ghostClass="ghost"
      class="flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto form-body">
      <div v-for="item in list2" :key="item.id" class="cursor-move h-50px bg-gray-500/5 rounded p-3 form-item">
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

const list1 = ref([
  {
    name: 'Joao',
    id: '1'
  },
  {
    name: 'Jean',
    id: '2'
  },
  {
    name: 'Johanna',
    id: '3'
  },
  {
    name: 'Juan',
    id: '4'
  }
])
const list2 = ref(
  list1.value.map(item => ({
    name: `${item.name}-2`,
    id: `${item.id}-2`
  }))
)

function clone(element: Record<'name' | 'id', string>) {
  const len = list2.value.length
  return {
    name: `${element.name}-clone-${len}`,
    id: `${element.id}-clone-${len}`
  }
}
</script>
<style lang="scss">
.flex-body {
  display: flex;
  flex-direction: row;
  background: darkslategray;
  height: 1000px;
}

.compList {
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 20px;
  height: 100px;

  div {
    border-bottom: 1px solid #ccc;
    margin: 5px;
    background: #6b72800d;
  }
}

.form-body {
  width: 100%;
  background: #fff;
  color: #000;
}

.form-item {
  background: red;
  margin: 2px 4px;
  padding: 10px 12px;
}
</style>
