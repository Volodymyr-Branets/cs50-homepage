class ProductService {
    constructor() {
        if (!ProductService._instance) ProductService._instance = this;
        return ProductService._instance;
    }

    async getProducts() {
        if (!this.products) {
            this.products = await(await fetch('api/products.json')).json();
        }
        return this.products;
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }
}