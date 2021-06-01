<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false
    };
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;

      const baseUrl = process.env.VUE_APP_FIREBASE_URL;

      axios.get(baseUrl + '/surveys.json').then(response => {
        this.isLoading = false;
        const results = [];
        for (const id in response.data) {
          results.push({
            id: id,
            name: response.data[id].name,
            rating: response.data[id].rating
          });
        }
        this.results = results;
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
