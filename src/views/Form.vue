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
        当前类型 {{ item.type }}
        <a-input v-if="item.type === 'input'" placeholder="input search text" style="width: 200px" />
        <a-radio-group v-if="item.type === 'radio'" v-model:value="value">
          <a-radio :style="radioStyle" :value="1">Option A</a-radio>
          <a-radio :style="radioStyle" :value="2">Option B</a-radio>
          <a-radio :style="radioStyle" :value="3">Option C</a-radio>
        </a-radio-group>
        <a-select v-if="item.type === 'select'" ref="select" style="width: 120px">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
        <a-checkbox-group v-if="item.type === 'checkout'" :options="['Apple', 'Pear', 'Orange']" />
      </div>
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

const list1 = ref([
  {
    name: '单行输入',
    id: 'input'
  },
  {
    name: '下拉选择',
    id: 'select'
  },
  {
    name: '单选输入',
    id: 'radio'
  },
  {
    name: '多选输入',
    id: 'checkout'
  }
])
const list2 = ref(
  list1.value.map(item => ({
    name: `${item.name}`,
    id: `${item.id}`,
    type: `${item.id}`,
  }))
)

function clone(element: Record<'name' | 'id', string>) {
  const len = list2.value.length

  console.log('element', element.id)
  return {
    name: `${element.name}-clone-${len}`,
    id: `${element.id}-clone-${len}`,
    type: `${element.id}`
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
  background: #fff;
  margin: 2px 4px;
  padding: 10px 12px;
  border: 1px solid #ddd;
}
</style>
