<template>
  <div class="control_item birthdate">
    <i class="item_icon fas fa-birthday-cake"></i>
    <p class="item_text">{{ $t("message.dog.birthday")}}</p>
    <date-pick v-model="inputDate" ></date-pick>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';

  import DatePick from 'vue-date-pick';
  import 'vue-date-pick/dist/vueDatePick.css';

  export default {
    name: 'birthdate',
    components: {DatePick},
    data () {
      return {
        inputDate: '2019-10-15'
      };
    },
    watch: {
      inputDate() {
        console.log(this.inputDate);
        this.setBirth(this.inputDate);
      }
    },
    methods: {
      ...mapMutations('dog', [
          'setBirth'
        ])
    }
  }
</script>

<style lang="scss" >
.birthdate {
  input {
    cursor: pointer;
    padding: 0 !important;
    width: 200px;
    height: 200px;
    color: transparent;
    background-color: transparent;
    border: 0;
  }

  .vdpClearInput {
    display: none;
  }

}
</style>
