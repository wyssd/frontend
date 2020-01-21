<template>
    <div id="app">
        <ul>
            <li><a>
                <router-link to="/">Home</router-link>
            </a></li>
            <li><a>
                <router-link to="/warenkorb">Warenkorb</router-link>
            </a></li>
            <li><a>
                <router-link to="/suche">Suche</router-link>
            </a></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style src="./components/css/Navbar.css">
</style>
