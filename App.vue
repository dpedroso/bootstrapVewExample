<template>
  <div style="width: 400px">
    <b-button size="sm" @click="toggle">
      {{ show ? "Hide" : "Show" }} Alert
    </b-button>
    <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">
      Hello {{ name }}!
    </b-alert>

    <div>
      <b-form-select v-model="selected" :options="options" class="mb-3">
      </b-form-select>
      <div>
        Selected: <strong>{{ selected2 }}</strong>
      </div>
    </div>

    <div>
      <b-form-input
        v-model="text1"
        type="text"
        id="test"
        placeholder="Enter your name"
      ></b-form-input>
      <p>Value: {{ text1 }}</p>
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
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],

      text1: "test",
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
