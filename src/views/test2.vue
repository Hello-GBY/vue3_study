<template>
  <h2> reative 的使用</h2>
  <div>
      {{user.name}}
      <div>
        {{user.property.stuta}}
      </div>
      <div>
        {{user.property.learning}}
      </div>
  </div>
  <button @click="updateUser">快去玩</button>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: 'test2',
    setup(){
        // reactive 把复杂数据变成响应式数据
        const user = reactive({
            name: '小郭',
            property: {
                stuta: 'codeing',
                learning: 'vue3'
            }
        });
        // 方法
        const updateUser = () => {
            user.property.stuta = 'playing'
        }
        return {
            user,
            updateUser
        };
    }
})
</script>

<style>

</style>