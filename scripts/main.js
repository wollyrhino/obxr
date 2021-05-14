new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        car_name: '',
        products: '',
        productName: '',
        productPrice: '',
        dialogAdd: false,
        dialogEdit: false,
        dialogDelete: false,
        productIdEdit: '',
        productNameEdit: '',
        productPriceEdit: '',
        productIdDelete: '',
        productNameDelete: ''
    },
    created: function () {
        this.getProducts()
    },
    methods: {
 
        // Get Product
        getProducts: function () {
            axios.get('http://localhost/cockpit/api/collections/collection/cars?token=026cd6d6ecdc969afb56a88615205b')
                .then(res => {
                    this.products = res.data;
                })
                .catch(err => {
                    // handle error
                    console.log(err);
                })
        },
 
        // Create New product
        saveProduct: function () {
            axios.post('http://localhost/cockpit/api/collections/save/cars?token=026cd6d6ecdc969afb56a88615205b', {
                    car_name: this.car_name,
                    product_name: this.productName,
                    product_price: this.productPrice
                })
                .then(res => {
                    // handle success
                    this.getProducts();
                    this.car_name
                    this.productName = '';
                    this.productPrice = '';
                    this.dialogAdd = false;
                })
                .catch(err => {
                    // handle error
                    console.log(err);
                })
        },
 
        // Get Edit and Show data to Modal
        getEdit: function (product) {
            this.dialogEdit = true;
            this.productIdEdit = product.product_id;
            this.productNameEdit = product.product_name;
            this.productPriceEdit = product.product_price;
        },
 
        // Get Delete and Show Confirm Modal
        getDelete: function (product) {
            this.dialogDelete = true;
            this.productIdDelete = product.product_id;
            this.productNameDelete = product.product_name;
        },
 
        // Update Product
        updateProduct: function () {
            axios.put(`http://localhost/cockpit/api/forms/submit/driverRegistration?token=6126475c0a61354c7093f21e222e11/${this.productIdEdit}`, {
                    product_name: this.productNameEdit,
                    product_price: this.productPriceEdit
                })
                .then(res => {
                    // handle success
                    this.getProducts();
                    this.dialogEdit = false;
                })
                .catch(err => {
                    // handle error
                    console.log(err);
                })
        },
 
        // Delete Product
        deleteProduct: function () {
            axios.delete(`http://localhost/cockpit/api/forms/submit/driverRegistration?token=6126475c0a61354c7093f21e222e11/${this.productIdDelete}`)
                .then(res => {
                    // handle success
                    this.getProducts();
                    this.dialogDelete = false;
                })
                .catch(err => {
                    // handle error
                    console.log(err);
                })
        }
    }
})