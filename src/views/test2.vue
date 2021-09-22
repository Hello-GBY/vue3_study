<template>
  <h2> reative 的使用</h2>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: 'test2',
    setup(){
        // reactive 把复杂数据变成响应式数据
        const user = reactive({
            name: '小明'
        });
        return {};
    }
})
</script>

<style>

</style>