const app = Vue.createApp({
    template: '#my-app',
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '算法导论',
                    date: '2006-09',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: 'javascript权威指南',
                    date: '2013-09',
                    price: 139.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '流畅的python',
                    date: '2023-04',
                    price: 199.80,
                    count: 1
                },
                {
                    id: 4,
                    name: '代码大全',
                    date: '2006-03',
                    price: 128.00,
                    count: 1
                },
            ]
        };
    },
    computed: {
        totalPrice() {
            let finalPrice = 0;
            for (let book of this.books) {
                finalPrice += book.price * book.count;
            }
            return finalPrice;
        },
        formatPrice() {
            return (price) => {
                return "￥" + price;
            };
        }
    },
    methods: {
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            if (this.books[index].count > 1) {
                this.books[index].count--;
            }
        },
        removeBook(index) {
            this.books.splice(index, 1);
        }
    }
});

app.mount('#app');
    