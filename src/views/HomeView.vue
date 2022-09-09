<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <el-avatar :size="50" :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'" />
      </el-col>
      <el-col :span="24">
        <el-rate v-model="value" size="large" />
      </el-col>
    </el-row>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  },
  data() {
    return {
      value: 0
    }
  }
})
export default class HomeView extends Vue {}
</script>
