// 0 - Si vous utilisez un systeme modulaire (Par la CLI) appellez 
// Vue.Use(VueRouter) après avoir installé Vue-router


// 1 - Définition des composants à router
const Home = {template: "<div>Welcome to Home Component</div>"};
const Foo = {template: "<div><div>Welcome to Foo Component</div><div><router-link to='Bar' append>Go To FooBar</router-link></div></div>"};
const Bar = {template: "<div>Welcome to Bar Component</div>"};
const FooBar = {template: "<div><h2>I'm FooBar component</h2></div>"}

// 2 - Définition des routes
// Chaque route doit relier un composant.

const routes = [
    {path: "/", component: Home},
    {path: "/foo", component: Foo},
    {path: "/bar", component: Bar},
    {path: "/foo/bar", component: FooBar},
];

// 3 - Créez l'instance du router et passez l'option "routes"
const router = new VueRouter({
    routes,
});

// 4 - Créez et monter l'instance de Vue. Ne pas oublier d'y injecter
// le router avec l'option "router" pour permetre à l'application toute
// entiere d'être à l'ecoute du router

const app = new Vue({
    router,
}).$mount("#app");

// 5 - L'application est routée :)