<template>
  <div>
      <div ref="controller" class="controller">
        <birthdate/>
        <size/>
        <weight/>
        <foodKcal/>
      </div>

      <div class="container">
        {{ getInfo }}

        <div class="info">
          <info />
        </div>
        <div class="calculation">

        </div>
      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import birthdate from '../components/birthdate';
  import weight from '../components/weight';
  import foodKcal from '../components/foodKcal';
  import size from '../components/size';
  import info from '../components/info';
  import calculation from '../components/calculation';

  export default {
    name: 'Bulldogs',
    components: {
      birthdate,
      weight,
      foodKcal,
      size,
      info,
      calculation,
    },
    metaInfo: {
      title: 'Feed Bulldog as fat as possible',
    },
    computed: {
      ...mapGetters('dog', [
          'getInfo'
        ]),
    },
    mounted () {
      setTimeout(() => {
        this.$refs.controller.classList.add('show')
      }, 1000);
    }
  }
</script>

<style lang="scss">
.controller {
  position: absolute;
  overflow: hidden;
  text-align: center;
  z-index: 1;
  opacity: 0;
  margin-top: -160px;
  width: 100%;
  max-height: 0;
  background-color: rgba(4, 29, 51, 0.7);
  transition: opacity 300ms;

  &.show {
    opacity: 1;
    max-height: 3000px;
    overflow: visible;

    .control_item {
      opacity: 1;
    }
  }
}

.control_item {
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  cursor: pointer;
  opacity: 0;
  width: 200px;
  height: 160px;
  // transform: scale(0.85);

  @for $i from 0 through 5 {
    &:nth-child(#{$i + 1}) {
      transition: opacity 500ms 400ms*$i, transform 300ms;
    }
  }

  .item_icon,
  .item_text {
    position: absolute;
    left: 50%;
    color: #fff6da;
    transition: opacity 300ms;
  }

  .item_icon {
    top: 50%;
    margin-top: -15px;
    font-size: 50px;
    transform: translate(-50%, -50%);
  }

  .item_text {
    bottom: 30px;
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
    // font-size: 0;
    transform: translateX(-50%);
  }

  &:hover {
    // transform: scale(1);

    .item_icon, .item_text {
      color: #fbc99d;
    }
  }
}

</style>
