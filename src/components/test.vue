<template>
    <div>
        <h1>子组件</h1>
        <h2>子组件的值：{{a1}}</h2>
    </div>
</template>

<script>
export default {
  components:{},
  props:['a1'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>