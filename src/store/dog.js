import i18n from '../locale/i18n';

const dog = {
  namespaced: true,
  state: {
    birthdate: '2019-2-14',
    weight: 9.5,
    size: 's',
    kcal: '3980',
  },
  mutations: {
    // synchronize
    setBirth(state, birthdate) {
      state.birthdate = birthdate;
    },
    setWeight(state, weight) {
      state.weight = weight;
    },
    setSize(state, size) {
      state.size = size;
    },
    setKcal(state, kcal) {
      state.kcal = kcal;
    },
  },
  getters: {
    getInfo: (state) => {
      return {
        birthdate: state.birthdate,
        weight: state.weight,
        size: state.size,
        kcal: state.kcal
      }
    },
    getDays: (state) => {
      const aDate = state.birthdate.split("-")
      const oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
      const oDate2 = new Date()
      const iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
      console.log('iDays: ', iDays);
      return iDays;
    },
    getMonths: (state) => {
      const aDate = state.birthdate.split("-")
      const oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
      const oDate2 = new Date()
      const iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
      console.log('iDays: ', iDays);
      let years = 0;
      let month = Math.floor(iDays / 30.5);
      let result;

      if (month > 11) {
        years = Math.floor(month / 12);
        month = month - (years * 12)
        const floorMonth = Math.floor(month/12*10);

        if (floorMonth === 0) {
          result = years + ' ' + i18n.t("message.dog.years")
        } else {
          result = years + ' ' + i18n.t("message.dog.years") + floorMonth + i18n.t("message.dog.months");
        }
      } else {
        result = month + ' ' + i18n.t("message.dog.months");
      }


      return result;
    }
  }
};

export default dog;
