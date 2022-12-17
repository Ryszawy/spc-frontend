<template>
   <div class="text-input">
      <header>
        <h2>Service Name</h2>
      </header>
      <input
        placeholder="serviceName"
        type="text"
        id="serviceName"
      />
    </div>
  <div class="wrapper">
      <header>
        <h2>Price Range</h2>
        <p>Use slider or enter min and max price</p>
      </header>
      <div class="price-input">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" v-model="selectedMin">
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" v-model="selectedMax">
        </div>
      </div>
      <div class="slider">
        <div class="progress" :style="{ left: percentageValueMin, right: percentageValueMax }"></div>
      </div>
      <div class="range-input">
        <input type="range" class="range-min" :min="minValue" :max="maxValue" step="10" v-model.number="selectedMin" />
        <input type="range" class="range-max" :min="minValue" :max="maxValue" step="10" v-model.number="selectedMax" />
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMin: 200,
      selectedMax: 400,
      minValue: 0,
      maxValue: 1000,
      priceGap: 50,
      inputText: '',
    };
  },
  computed: {
    percentageValueMin() {
      return (this.selectedMin / this.maxValue) * 100 + '%';  
    },
    percentageValueMax() {
      return 100 - (this.selectedMax / this.maxValue) * 100 + '%';
    },
  }
}
</script>

<style scoped>
.text-input {
  margin-top: 30px;
}
.text-input input,
.text-input textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}
input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}
header h2{
  font-size: 24px;
  font-weight: 600;
}
header p{
  margin-top: 5px;
  font-size: 16px;
}
.price-input{
  width: 100%;
  display: flex;
  margin: 30px 0 35px;
}
.price-input .field{
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input{
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 19px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #999;
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.price-input .separator{
  width: 130px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider{
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress{
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #bc00dd;
}
.range-input{
  position: relative;
}
.range-input input{
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb{
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #bc00dd;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
input[type="range"]::-moz-range-thumb{
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #bc00dd;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
</style>