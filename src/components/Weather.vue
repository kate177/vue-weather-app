<template v-model="coldMode">
  <section class="weather">
    <div class="weather-data">
      <div class="weather-data__degree">
        <div class="weather-city">
          <div class="weather-city__location">
            <img src="../assets/img/location.png" alt="" />
          </div>
          <h2 class="weather-city__title">{{ dataCity }}</h2>
        </div>
        <div class="weather-data__bottom">
          <h3 class="weather-data__title">
            {{ Math.round(cityWeather.temp) }}°
          </h3>
          <div class="weather-data__image">
            <img
              :src="
                'http://openweathermap.org/img/wn/' +
                (imageTemp || '04d') +
                '@2x.png'
              "
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="weather-data__detail">
        <div class="detail-left">
          <div class="detail-left__block">
            <div class="detail-left__image">
              <img src="../assets/img/temp.png" alt="" />
            </div>
            <ul class="detail-left__infa">
              <li>{{ Math.round(cityWeather.feels_like) }}°</li>
              <li>FEELS LIKE</li>
            </ul>
          </div>
          <div class="detail-left__block">
            <div class="detail-left__image">
              <img src="../assets/img/speedometer.png" alt="" />
            </div>
            <ul class="detail-left__infa">
              <li>{{ cityWeather.pressure }}mb</li>
              <li>PRESSURE</li>
            </ul>
          </div>
          <div class="detail-left__block">
            <div class="detail-left__image">
              <img src="../assets/img/max.png" alt="" />
            </div>
            <ul class="detail-left__infa">
              <li>{{ Math.round(cityWeather.temp_max) }}°</li>
              <li>MAX DEGREES</li>
            </ul>
          </div>
        </div>
        <div class="detail-left detail-right">
          <div class="detail-left__block">
            <div class="detail-left__image">
              <img src="../assets/img/water.png" alt="" />
            </div>
            <ul class="detail-left__infa">
              <li>{{ cityWeather.humidity }}%</li>
              <li>HUMIDITY</li>
            </ul>
          </div>
          <div class="detail-left__block">
            <div class="detail-left__image">
              <img src="../assets/img/wind.png" alt="" />
            </div>
            <ul class="detail-left__infa">
              <li>{{ Math.round(wind.speed) }}km/h</li>
              <li>WIND SPEED</li>
            </ul>
          </div>
          <div class="detail-left__block">
            <div class="detail-left__image">
              <img src="../assets/img/min.png" alt="" />
            </div>
            <ul class="detail-left__infa">
              <li>{{ Math.round(cityWeather.temp_min) }}°</li>
              <li>MIN DEGREES</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coldMode: false,
    };
  },
  props: {
    cityWeather: { type: Object, require: true },
    dataCity: { type: String, require: true },
    wind: { type: Object, require: true },
    imageTemp: { type: String, require: true },
  },
};
</script>

<style lang="scss">
.weather {
  width: 500px;
  margin: 0 auto;

  &-city {
    width: 100%;
    display: flex;
    margin-bottom: 17px;
    &__location {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #ffffff;
    }
  }
  &-data {
    height: 545px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &__degree {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 2;
      width: 290px;
      height: 230px;
      padding: 0px 15px;
      background: var(--app-background-color);
      border-radius: 10px;
    }
    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &__title {
      width: 104px;
      font-weight: 700;
      font-size: 68px;
      line-height: 80px;
      color: #ffffff;
      margin: 0 auto;
    }
    &__image {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &__detail {
      position: absolute;
      z-index: 1;
      width: 500px;
      height: 360px;
      background: rgba(196, 196, 196, 0.2);
      backdrop-filter: blur(15px);
      border-radius: 10px;
      margin-top: 145px;
      padding: 0px 40px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.detail-left {
  margin: 115px 0px 35px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__block {
    display: flex;
    align-items: center;
  }
  &__image {
    width: 50px;
    height: 50px;
    background: var(--app-background-color);
    border-radius: 10px;
    margin-right: 10px;
    padding: 2px 2px 3px 3px;
    & img {
      width: 45px;
      height: 45px;
    }
  }
  &__infa {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & li {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }
}
@media screen and (max-width: 576px) {
  .weather {
    width: 100%;
    &-data {
      &__detail {
        width: 361px;
        padding: 0px 12px;
      }
    }
  }
}
.detail-left {
  flex-basis: 50%;
}
.detail-left__infa {
  & li {
    font-size: 14px;
  }
}
@media screen and (max-width: 414px) {
  .weather {
    height: 865px;
    &-data {
      &__degree {
        width: 80%;
        height: auto;
        flex-direction: column;
        padding: 15px;
      }
      &__bottom {
        flex-direction: column;
      }
      &__detail {
        width: 100%;
        height: auto;
        padding: 0px 12px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 165px;
      }
    }
  }
  .detail-left {
    flex-basis: auto;
  }
  .detail-left__infa {
    & li {
      font-size: 18px;
    }
  }
  .detail-right {
    margin-top: 0px;
  }
}
</style>
