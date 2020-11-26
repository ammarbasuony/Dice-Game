import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// Components
import oneDice from '../components/oneDice/oneDice.vue'
import twoDice from '../components/twoDice/twoDice.vue'

const routes = [
    {
        path: '/',
        name: 'oneDice',
        component: oneDice
    },
    {
        path: '/two-dices',
        name: 'twoDice',
        component: twoDice

    }
];

const router = new VueRouter({
    mode: 'history',
    base: '/All/Practice/Dice/',
    routes
})

export default router;