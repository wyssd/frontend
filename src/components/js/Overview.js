import axios from 'axios';

export default {
    name: 'Overview',
    data() {
        return {
            products: null
        };
    },
    created: function () {
        axios
            .get('http://localhost:8080/wyss/product')
            .then(res => {
                this.products = res.data;
            })
    }
}