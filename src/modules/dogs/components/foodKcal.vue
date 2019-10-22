<template>
  <div @click="handleFoodKcalClick" class="control_item food_kcal">
    <i class="item_icon fas fa-bone"></i>
    <p class="item_text">{{ $t("message.dog.foodKcal")}}</p>

    <div class="options2" ref="optionFoodKcal">
      <span class="description">{{ $t("message.dog.inputFoodKcal") }}</span>
      <input v-model="inputFoodKcal" class="input-FoodKcal"></input>
    </div>

  </div>
</template>

<script>

  import { mapMutations } from 'vuex';

  export default {
    name: 'foodKcal',
    data () {
      return {
        inputFoodKcal: '2.5'
      };
    },
    mounted() {
      const $optionFoodKcal = this.$refs.optionFoodKcal;
      document.addEventListener('click', (e) => {
        console.log('e.target2: ', e.target);
        if (
          !e.target.classList.contains('control_item') || !e.target.classList.contains('food_kcal')
        ) {
          if (!e.target.classList.contains('input-FoodKcal')) {
            e.preventDefault();
            if ($optionFoodKcal.classList.contains('show')) {
              $optionFoodKcal.classList.remove('show');
            }
          }
        }
      });

      this.inputFoodKcal = this.$store.state.dog.kcal;
    },
    watch: {
      inputFoodKcal() {
        this.setKcal(this.inputFoodKcal);
      }
    },
    methods: {
      handleFoodKcalClick(e) {
        console.log('handleFoodKcalClick: ', );
        if (e.target.classList.contains('input-FoodKcal')) {

        } else {
          if (this.$refs.optionFoodKcal.classList.contains('show')) {
            this.$refs.optionFoodKcal.classList.remove('show');
          } else {
            this.$refs.optionFoodKcal.classList.add('show');
          }
        }
      },
      ...mapMutations('dog', [
          'setKcal'
        ])
    }
  }
</script>

<style lang="scss">

.options2 {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  top: 100%;
  left: 50%;
  margin-left: -225px;
  width: 440px;
  height: 270px;
  background-color: #fff;
  box-shadow: 3px 3px 6px #eee, -3px 3px 6px #eee;
  // border: 2px solid #eee;
  transform: translateY(-10px);
  transition: all 300ms;

  &:after {
    position: absolute;
    display: block;
    content: '';
    top: -10px;
    left: 50%;
    margin-left: -5px;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
  }

  &.show {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  }

  .description {
    position: absolute;
    text-align: center;
    top: 55px;
    left: 0;
    width: 100%;

    font-size: 20px;
  }

  .input-FoodKcal {
    position: absolute;
    text-align: center;
    top: 120px;
    left: 50%;
    right: 0;
    margin-left: -112px;
    padding: 12px;
    width: 200px;
    font-size: 30px;
  }
}

</style>
