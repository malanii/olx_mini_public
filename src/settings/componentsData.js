import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const HomePageText = {
    title: 'Explore our stunning application',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
};
export const LinkButtons = {
    homepage: { text: 'Explore', path: '/products' },
    error404: { text: 'Go back home', path: '/' },
    fullCart: { text: 'Checkout', path: '/order' },
    createOrder: { text: 'Place order', path: '/orders' },
    logIn: { text: ' Log in', path: '/' },
    signUp: { text: '  Sign up', path: '/' }
};
export const Buttons = {
    productListingCard: { name: 'Add to card', size: 'small' },
    productPageCard: { name: 'Add to card', size: 'big' },
    addProduct: { name: 'Add Product', size: '' },
    filterPrice: { name: 'Find', size: '' },
    modal: { name: 'Submit', size: '' }
};
export const ProductsFilterTitles = {
    perPage: 'Results per Page',
    price: 'Price',
    origin: 'Origin'
};
export const productsFilterButtons = ['europe', 'asia', 'usa', 'africa'];
export const productsPerPageButtons = [
    { data: '10', value: '10' },
    { data: '25', value: '25' },
    { data: '50', value: '50' }
];
export const homePageIcons = [
    { id: '1', icon: faInstagram },
    { id: '2', icon: faFacebook },
    { id: '3', icon: faTwitter },
    { id: '4', icon: faYoutube }
];
export const navMenuData = [
    { key: '1', linkName: 'Home', path: '/' },
    { key: '2', linkName: 'Products', path: '/products' },
    { key: '3', linkName: 'My Products', path: '/my_products' },
    { key: '4', linkName: 'Orders', path: '/orders' }
];

export const Images = {
    editIcon: { alt: 'edit', src: '/images/edit.png' },
    emptyCart: { alt: 'emptyCart', src: '/images/emptyCart.png' },
    error: { alt: 'error', src: '/images/404.png' },
    modalError: { alt: 'errorModal', src: '/images/errorModal.jpg' },
    modalSuccess: { alt: 'successModal', src: '/images/successModal.jpg' },
    homepage: { alt: 'homepage', src: '/images/homepage_content.png' },
    cartIcon: { alt: 'cartIcon', src: '/images/cart.png' },
    cartIconActive: { alt: 'cartIcon', src: '/images/cartActive.png' },
    logo: { alt: 'logo', src: '/images/logo_n.png' },
    noResultsFound: { alt: 'noResultsFound', src: '/images/noResults.png' },
    productsPage: { alt: 'productsPage', src: '/images/products_page_el.png' },
    productsFilter: { alt: 'productsFilter', src: '/images/filterImg.png' },
    modal: { alt: 'modal', src: '/images/modal.png' },
    editImg: { alt: 'editImg', src: '/images/editContent.png' },
    cart: { alt: 'cart', src: '/images/cart.jpg' }
};
export const ModalTitles = {
    addProduct: 'Hello! We are glad to see you :)',
    editProduct: 'Do you really want something to change?',
    submit: 'Please confirm your action?',
    error: 'Ooops, try again later..',
    success: 'Congratulations! You have just added new product.'
};
export const ModalInputs = {
    name: 'Product name',
    price: 'Price',
    origin: 'Origin'
};
export const ComponentsTitles = {
    fullCart: 'Shopping Cart',
    order: 'Your Order:',
    emptyCart: 'Your Cart is empty'
};
export const ModalConfirmButtons = [
    { name: 'confirm', text: 'Confirm' },
    { name: 'cancel', text: 'Cancel' },
    { name: 'delete', text: 'Delete Changes' }
];
export const OrderListColors = ['#a3fcfc', '#d59cf3', '#fdd1bf', '#ffa0df', '#d59cf3', '#a3fcfc'];
export const CreateOrderTextContent = ['Ordered products:', 'To pay:'];
