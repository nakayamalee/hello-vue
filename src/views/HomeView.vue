<script>
  import ButtonA from '@/components/ButtonTypeA.vue';
  import ButtonB from '@/components/ButtonTypeB.vue';
  import ButtonC from '@/components/ButtonTypeC.vue';
  export default{
    components: {
      ButtonA,
      ButtonB,
      ButtonC,
    },
    data() {
      return {
        // serviceBtn:{
        //   left:'中止',
        //   right: '服務',
        //   state: false,
        // },
        btnBData: [
          {
            left:'中止',
            right: '服務',
            state: false,
            toggle: true,
          },
          {
            left:'市話',
            right: '手機',
            state: false,
            toggle: false,
          },
          {
            left:'中止',
            right: '服務',
            state: true,
            toggle: true,
          },
          {
            left:'市話',
            right: '手機',
            state: true,
            toggle: false,
          },
        ],
      };
    },
  };
</script>

<template>
  <main>
    <div class="btns">
      <ButtonA type="record">修改紀錄</ButtonA>
      <ButtonA type="save">儲存</ButtonA>
      <ButtonA type="add">新增</ButtonA>
      <ButtonA type="export">匯出</ButtonA>
      <ButtonA type="prev">上一步</ButtonA>
      <ButtonA type="next">下一步</ButtonA>
    </div>
    <div class="btns">
      <ButtonB v-for="(item,key) in btnBData" :key="key" :type="item" @click="item.state = !item.state"/>
      <ButtonC>
        <template #left>
          左
        </template>
        <template #right>
          右
        </template>
      </ButtonC>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .btns{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }
</style>