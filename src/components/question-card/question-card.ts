import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    template: require('./question-card.html')
})
export class QuestionCardComponent extends Vue {
    @Prop({ default: 'Judul' })
    title: string;

    @Prop({ default: 'Isi' })
    content: string;

    EventName: string = 'answered';

    sangatSetujuClicked($event) {
        this.$emit(this.EventName, 1.0);
    }

    setujuClicked($event) {
        this.$emit(this.EventName, 0.5);
    }

    netralClicked($event) {
        this.$emit(this.EventName, 0.0);
    }

    tidakSetujuClicked($event) {
        this.$emit(this.EventName, -0.5);
    }

    sangatTidakSetujuClicked($event) {
        this.$emit(this.EventName, -1.0);
    }
}
