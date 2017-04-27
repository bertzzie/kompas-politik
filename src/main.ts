import * as Vue from 'vue';
import * as VueMaterial from 'vue-material';

import { AppbarComponent } from './components/appbar';
import { QuestionCardComponent } from './components/question-card';

import questions from './data/questions';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  components: {
    'appbar': AppbarComponent,
    'question-card': QuestionCardComponent,
  },
  computed: {
    cardTitle: function () {
      return `Pertanyaan ${(this as any).currentQuestion + 1} / ${(this as any).totalQuestions}`;
    },
    cardContent: function () {
      return questions[(this as any).currentQuestion].question;
    },
  },
  data: {
    totalQuestions: questions.length,
    currentQuestion: 0,
  },
  methods: {
    nextQuestion: function (multiplier) {
      (this as any).currentQuestion += 1;
    },
  },
});
