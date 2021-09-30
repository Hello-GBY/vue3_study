<template>
  <div>
    <input v-model="queryName"/>
    <!-- <div v-for="user in userList" :key="user.id">{{user.name}}</div> -->
  </div>
  <test2></test2>
</template>

<script lang="ts">
/**
 * 一个模拟用户仓库查询
 */
// 组合api 练习
import {onMounted, ref, toRefs, watch} from 'vue'
// import {getUserListApi} from '@/api/getUserListApi.ts'
import test2 from '@/views/test2.vue'
interface Data {
  [key:string]: unknown
}
export default {
  components: {
    test2
  },
  setup(props: Data): Data{
    console.log('props: ', props);
    // // user列表
    const userList = ref([]);
    const queryName = ref('');

    // // 请求数据
    // const getUserList = () => {
    //   // userList.value = await getuserListApi(props.user)
    //   userList.value = getUserListApi(props.user)
    // }

    // // 请求数据处理
    // const  filterUserList= () => {
    //   console.log('进');
    //   userList.value = userList.value.filter(res => res.name.indexOf(queryName.value) > -1)
    // }

    // // 初始化的时候请求数据
    // onMounted(getUserList);

    // // 用户名改变时触发
    // const queryNameChange = function () {
    //   let userArr = getUserList();
    // }

    // watch(queryName, filterUserList)

    // // 返回实例
    toRefs
    return {
      userList: userList,
      queryName
    }

    // 计算属性

  }
}
</script>

<style>

</style>
