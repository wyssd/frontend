<template>
    <div class="box">
        <div class="box" v-for="p in products" v-bind:key="p.id">
            <router-link class="site" v-bind:to="'/product/'+p.id" tag="div" style="cursor: pointer;">
                <div class="img">
                    <img
                            src="https://images.pexels.com/photos/616808/pexels-photo-616808.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
                </div>
                <div class="product">
                    <div id="price">
                        {{p.price}}
                    </div>
                    <div id="title">
                        {{p.name}}
                    </div>
                    <div id="info">
                        {{p.shortDescription}}
                    </div>
                    <div id="stars">
                        <star-rating class="starRatings" active-color="black" inactive-color="white"
                                     :show-rating="false" :star-size="20"
                                     @rating-selected="setRating" v-bind:read-only="true"
                                     v-bind:rating=p.stars></star-rating>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script src="./js/Overview.js">
</script>

<style scoped src="./css/Overview.css">
</style>