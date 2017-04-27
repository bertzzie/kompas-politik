import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    template: require('./appbar.html')
})
export class AppbarComponent extends Vue {
}
