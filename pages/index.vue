<template>
  <div>
    <div class="bg-teal-500 mb-10">
      <img :src="require(`~/assets/bg-header-desktop.svg`)" class="bg-cover" alt="" srcset="">
    </div>
      <div>
        <Jobboard
          v-for="job in jobs"
          v-bind:key="job.id"
          :company="job.company"
          :contract="job.contract"
          :logo="job.logo"
          :due="job.postedAt"
          :loc="job.location"
          :level="job.level"
          :pos="job.position"
          :role="job.role"
          :lan="job.languages"
          :featured="job.featured"
          :tools="job.tools"
        />
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/api/data.json";

export default {
  components: {
    Jobboard: () => import("@/components/Jobboard"),
  },
  data() {
    return {
      jobs: data,
    };
  },
  created() {
    console.log(this.jobs);
  },
};
</script>

<style>
</style>
