import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PracticaSpring from "./views/PracticaSpring";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/practica",
      name: "practica",
      component: PracticaSpring
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: '/',
      redirect: { name: 'practica' }
    },
    {
      path: "/eventos",
      name: "eventos",
      component: () => import("@/views/Eventos.vue")
    },
    {
      path: '/formulario',
      name: 'formulario',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Formulario.vue")
    }
  ]
});
