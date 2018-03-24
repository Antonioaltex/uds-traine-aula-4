import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Antonio from '@/components/Antonio';
import teste1 from '@/components/teste1';
import contador from '@/components/contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sobre',
      name: 'Antonio',
      component: Antonio,
    },
    {
      path: '/contato',
      name: 'teste1',
      component: teste1,
    },
    {
      path: '/contador',
      name: 'teste2',
      component: contador,
    },
  ],
});
