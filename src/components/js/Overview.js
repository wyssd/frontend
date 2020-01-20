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
/*
    const htmlSite = `

`;

    window.onload = function () {
        console.log('Dokument geladen');
        fetch('http://localhost:8080/wyss/product', {
            method: 'GET',

        }).then((result) => {
            console.log(result, 'result geladen');

            const box = document.getElementsByClassName('box')[0];

            for (let item of result) {
                //getElemntByID

                box.appendChild()
            }
        })
    }*/