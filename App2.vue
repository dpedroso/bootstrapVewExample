<template>
  <div style="width: 400px">
    <b-button size="sm" @click="toggle">
      {{ show ? "Hide" : "Show" }} Alert
    </b-button>
    <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">
      Hello {{ name }}!
    </b-alert>

    <div>
      <b-form-select v-model="selected2" :options="options" class="mb-3">
      </b-form-select>
      <div>
        Selected: <strong>{{ selected2 }}</strong>
      </div>
    </div>

    <div>
      <b-form-input
        v-model="text2"
        type="text"
        id="test2"
        placeholder="Enter your name"
      ></b-form-input>
      <p>Value: {{ text2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "BootstrapVue",
      show: true,

      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "eeeThis is First option" },
        { value: "b", text: "eeeDefault Selected Option" },
        { value: "c", text: "eeeThis is another option" },
        { value: "d", text: "eeeThis one is disabled", disabled: true },
      ],

      text2: "eeetest",
    };
  },
  watch: {
    show(newVal) {
      console.log("Alert is now " + (newVal ? "visible" : "hidden"));
    },
  },
  methods: {
    toggle() {
      console.log("Toggle button clicked");
      this.show = !this.show;
    },
    dismissed() {
      console.log("Alert dismissed");
    },
  },
};
</script>

<style>
body {
  padding: 1rem;
}
</style>
