<template>
  <div class="flex bg-white shadow-md m-4 p-6 rounded">
    <div>
      <img :src="require(`~/assets/${logo}`)" :alt="company" srcset="" />
    </div>
    <div class="flex flex-col justify-between ml-4">
      <h3 class="font-bold text-base text-teal-500">{{ company }}</h3>
      <h2 class="font-bold text-xl">{{ pos }}</h2>
      <p class="text-gray-600">{{ due }} * {{ contract }} * {{ loc }}</p>
    </div>
    <div class="flex items-center ml-auto">
      <div v-for="lang in language" v-bind:key="lang.id" :la="lang">
        <span class="text-teal-400 bg-teal-100 font-bold m-2 p-2 rounded">{{
          lang
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "company",
    "contract",
    "logo",
    "due",
    "loc",
    "level",
    "pos",
    "role",
    "lan",
    "featured",
    "tools",
  ],
  data() {
    return {
      language: this.$props.lan,
      tool: this.$props.tools,
    };
  },
};
</script>
<style scoped>
</style>