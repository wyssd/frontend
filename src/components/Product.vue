<template>
    <div>
        <title>Product</title>

        <div id="app">
            <div id="site">
                <div id="img">
                    <img
                            src="https://images.pexels.com/photos/616808/pexels-photo-616808.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            width="250px"/>
                </div>
                <div id="product">
                    <div id="price">
                        {{product.price}}
                    </div>
                    <div id="title">
                        {{product.name}}
                    </div>
                    <div id="info">
                        {{product.shortDescription}}
                    </div>
                    <div id="stars">
                        <star-rating class="starRatings" active-color="black" inactive-color="white"
                                     :show-rating="false" :star-size="35"
                                     @rating-selected="setRating" v-bind:read-only="true"
                                     v-bind:rating=product.stars></star-rating>
                    </div>
                </div>
            </div>
            <div id="description">
                <div class="word">
                    Beschreibung
                </div>
                <div class="text">
                    {{product.description}}
                </div>
            </div>
            <div id="specification">
                <div class="word">
                    Spezifikation
                </div>
                <div class="text">
                    {{product.specification}}
                </div>
            </div>


            <div id="formular">
                <div class="word">
                    Bewertung
                </div>
                <div class="text">
                    <div id="rating">
                        <star-rating class="starRatings" active-color="black" inactive-color="white"
                                     :show-rating="false"
                                     @rating-selected="setRating"></star-rating>
                    </div>
                    <p>Titel</p>
                    <input type="text" name="title">
                    <p>Text</p>
                    <input id="textarea" type="textarea" cols="num" rows="num"/>
                    <div id="button">
                        <button v-on:click="submit">Send</button>
                    </div>
                </div>
            </div>


            <div id="starRating">
                <div class="word">
                    Sterne
                </div>
                <div class="text">
                    <div id="ratedvalue">
                        <star-rating class="starRatings" active-color="black" inactive-color="white"
                                     :show-rating="false"
                                     @rating-selected="setRating" v-bind:read-only="true"
                                     v-bind:rating=product.stars></star-rating>
                    </div>
                </div>
            </div>
            <div id="allratings">
                <h1>Alle Bewertungen</h1>

                <div class="eintrag" v-for="vote in product.votes" v-bind:key="vote.id">
                    <h2 id="ratingTitle">{{vote.title}}</h2>
                    <div id="ratingText">
                        {{vote.text}}
                    </div>
                    <div class="thumbs">
                        <!-- Thumbs up -->
                        <div class="like grow" v-on:click="countLikes">
                            <ThumbsUpIcon/>
                            <span class="likecount">{{like}}</span>
                        </div>
                        <!-- Thumbs down -->
                        <div class="dislike grow" v-on:click="countDislikes">
                            <ThumbsDownIcon/>
                            <span class="dislikecount">{{dislike}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./js/Product.js">
</script>

<style scoped src="./css/Product.css">
</style>