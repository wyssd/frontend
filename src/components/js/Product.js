import {ThumbsUpIcon, ThumbsDownIcon} from 'vue-feather-icons'
import axios from "axios";

export default {
    name: 'Product',
    methods: {
        setRating: function (rating) {
            this.rating = rating;
        },
        countLikes: function () {
            this.like += 1;
        },
        countDislikes: function () {
            this.dislike += 1;
        },
        submit: function () {
            axios.post("http://localhost:8080/wyss/rating/", {
                stars: this.rating,
                title: document.querySelector("input[type=text]").value,
                text: document.querySelector("input[type=textarea]").value,
                thumbUp: 0,
                thumbDown: 0,
            })
        }
    },
    data: function () {
        return {
            rating: 0,
            product: [],
            like: 0,
            dislike: 0
        };
    },
    created: function () {
        axios
            .get('http://localhost:8080/wyss/product/' + this.$route.params.id)
            .then(res => {
                this.product = res.data;
            })
    },
    components: {ThumbsUpIcon, ThumbsDownIcon}
}