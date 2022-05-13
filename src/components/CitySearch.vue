<template v-model="darkMode">
  <section class="main">
    <h1 class="main-title">WEATHER IN</h1>
    <div class="main-search">
      <div class="main-search__input">
        <input
          type="text"
          placeholder="WEATHER IN"
          v-model="valueInput"
          @keypress="fetchWeather"
        />
      </div>
      <button class="main-search__btn" @click="addTask">OK</button>
    </div>
  </section>
  <Weather
    :cityWeather="cityWeather"
    :dataCity="dataCity"
    :wind="wind"
    :imageTemp="imageTemp"
    v-if="cityWeather"
  />
</template>

<script>
import Weather from "./Weather.vue";
import { cityService } from "@/services/city.js";

export default {
  components: {
    Weather,
  },
  data() {
    return {
      darkMode: false,
      valueInput: "",
      dataCity: "",
      wind: [],
      cityWeather: [],
      name: null,
      temperature: null,
      imageTemp: "",
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        this.valueInput = event.target.value;
        localStorage.setItem("city", this.valueInput);
        this.name = this.valueInput;
        this.valueInput = "";
        console.log(this.name);
      }
    },
    addTask() {
      localStorage.setItem("city", this.valueInput);
      this.name = this.valueInput;
      console.log(this.name);
      this.valueInput = "";
    },
  },
  async created() {
    try {
      const response = await cityService().getCityByName(
        localStorage.getItem("city") ? localStorage.getItem("city") : "London"
      );
      this.cityWeather = response.main;
      this.temperature = response.main.temp;
      this.dataCity = response.name;
      this.wind = response.wind;
      this.imageTemp = response.weather[0].icon;
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    name: async function () {
      try {
        const response = await cityService().getCityByName(
          this.name
            ? this.name
            : localStorage.getItem("city")
            ? localStorage.getItem("city")
            : "London"
        );
        this.cityWeather = response.main;
        this.temperature = response.main.temp;
        this.dataCity = response.name;
        this.wind = response.wind;
        this.imageTemp = response.weather[0].icon;
      } catch (e) {
        console.log(e);
      }
    },
    temperature() {
      let htmlElement = document.documentElement;
      if (this.temperature <= 18) {
        htmlElement.setAttribute("theme", "cold");
        this.darkMode = true;
      } else {
        htmlElement.setAttribute("theme", "heat");
        this.darkMode = false;
      }
    },
  },
};
</script>

<style lang="scss">
.main {
  width: 430px;
  margin: 0 auto;
  &-title {
    width: 250px;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.1em;
    color: #ffffff;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  &-search {
    display: flex;
    margin-bottom: 35px;
    &__input {
      background: var(--app-background-color);
      box-sizing: border-box;
      width: 350px;
      height: 60px;
      padding: 4px;
      margin-right: 20px;
      & input {
        background-color: #3e3737;
        width: 100%;
        height: 100%;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.05em;
        padding: 19px 0px 20px 15px;
      }
    }
    &__btn {
      padding: 16px 14px;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #ffffff;
      background: var(--app-background-color);
      border-radius: 10px;
    }
  }
}
@media screen and (max-width: 576px) {
  .main {
    width: 376px;
  }
}
@media screen and (max-width: 414px) {
  .main {
    width: 100%;
    &-search {
      flex-direction: column;
      margin-bottom: 43px;
      &__input {
        width: 100%;
        padding: 4px;
        margin-right: 0px;
      }
      &__btn {
        padding: 13px 29px;
        width: 90px;
        height: 50px;
        margin: 0 auto;
        margin-top: 25px;
      }
    }
    &-title {
      width: 245px;
      font-size: 32px;
    }
    &-image {
      width: 260px;
      height: 260px;
    }
  }
}
</style>
