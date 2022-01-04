<template>
  <Survey :survey="survey" />
</template>

<script>
import "survey-vue/modern.min.css";
import { Survey, StylesManager, Model } from "survey-vue";
import data from "@/components/quiz/data.js";
StylesManager.applyTheme("modern");

const surveyJson = data;

export default {
  name: "Quiz",
  components: {
    Survey,
  },
  data() {
    const survey = new Model(surveyJson);
    return {
      survey,
    };
  },
};
</script>
