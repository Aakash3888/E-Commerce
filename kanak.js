/* ============================================
   Kanak Shopping - Premium E-Commerce JS
   ============================================ */

// ============ PRODUCT DATABASE ============
const PRODUCTS = [
    { id:1, name:"Women's Silk Saree with Blouse", emoji:"🧵", price:399, mrp:1999, discount:80, rating:4.5, reviews:2341, category:"women", subcategory:"sarees", seller:"FashionKart", delivery:"Free", sizes:["Free Size"], highlights:["Pure silk material","With matching blouse","Suitable for occasions","Wash care: Dry clean"], description:"Beautiful women's silk saree with intricate border work. Perfect for festivals and special occasions. Comes with matching blouse piece.", badge:"Trending" },
    { id:2, name:"Men's Cotton Kurta Pyjama Set", emoji:"👔", price:449, mrp:1499, discount:70, rating:4.3, reviews:1876, category:"men", subcategory:"kurtas", seller:"EthnicWear", delivery:"Free", sizes:["S","M","L","XL","XXL"], highlights:["100% cotton","Breathable fabric","Festival wear","Easy returns"], description:"Premium cotton kurta pyjama set for men. Comfortable and stylish ethnic wear for festivals and celebrations.", badge:"Bestseller" },
    { id:3, name:"Gold Plated Necklace Set", emoji:"💍", price:299, mrp:1299, discount:77, rating:4.2, reviews:3421, category:"jewellery", subcategory:"necklace", seller:"JewelBox", delivery:"Free", sizes:["Free Size"], highlights:["Gold plated","Hypoallergenic","Trendy design","Gift packaging"], description:"Elegant gold plated necklace set with matching earrings. Perfect for traditional and modern outfits.", badge:"New" },
    { id:4, name:"Women's Anarkali Suit Set", emoji:"👗", price:599, mrp:2499, discount:76, rating:4.6, reviews:1234, category:"women", subcategory:"suits", seller:"EthnicVogue", delivery:"Free", sizes:["S","M","L","XL"], highlights:["Georgette fabric","Fully stitched","With dupatta","Party wear"], description:"Stunning Anarkali suit set with beautiful prints and work. Includes kurta, palazzo and dupatta.", badge:"Premium" },
    { id:5, name:"Wireless Bluetooth Earbuds", emoji:"🎧", price:349, mrp:1999, discount:82, rating:4.1, reviews:5678, category:"electronics", subcategory:"audio", seller:"TechDeal", delivery:"Free", sizes:["Free Size"], highlights:["Bluetooth 5.0","30hr battery","Noise cancelling","IPX5 waterproof"], description:"Premium wireless earbuds with active noise cancellation. 30 hours total playback time with charging case.", badge:"Hot Deal" },
    { id:6, name:"Stainless Steel Kitchen Set", emoji:"🍳", price:699, mrp:2499, discount:72, rating:4.4, reviews:987, category:"home", subcategory:"kitchen", seller:"HomeEssentials", delivery:"Free", sizes:["Free Size"], highlights:["304 steel","5-piece set","Dishwasher safe","10 year warranty"], description:"Premium stainless steel kitchen utensils set. Includes spatula, ladle, turner, spoon and serving spoon.", badge:"Top Rated" },
    { id:7, name:"Running Shoes for Men", emoji:"👟", price:499, mrp:1999, discount:75, rating:4.3, reviews:4321, category:"shoes", subcategory:"sports", seller:"FootWear Pro", delivery:"Free", sizes:["7","8","9","10","11"], highlights:["Mesh upper","Cushioned sole","Lightweight","Anti-skid"], description:"Comfortable running shoes with breathable mesh upper and cushioned sole for maximum comfort.", badge:"Bestseller" },
    { id:8, name:"Women's Kurta Palazzo Set", emoji:"👚", price:349, mrp:1299, discount:73, rating:4.4, reviews:2876, category:"women", subcategory:"kurtis", seller:"TrendyFashion", delivery:"Free", sizes:["S","M","L","XL","XXL"], highlights:["Rayon fabric","Printed design","With palazzo","Casual wear"], description:"Comfortable and stylish kurta palazzo set for women. Perfect for everyday wear.", badge:"Value Buy" },
    { id:9, name:"Men's Denim Jeans", emoji:"👖", price:399, mrp:1499, discount:73, rating:4.2, reviews:3456, category:"men", subcategory:"jeans", seller:"DenimWorld", delivery:"Free", sizes:["28","30","32","34","36"], highlights:["Stretchable denim","Slim fit","5-pocket design","Fade resistant"], description:"Premium quality denim jeans with stretchable fabric for comfortable fit.", badge:"Popular" },
    { id:10, name:"Floral Print Lehenga Set", emoji:"💃", price:899, mrp:3999, discount:77, rating:4.7, reviews:876, category:"women", subcategory:"lehenga", seller:"BridalCollection", delivery:"Free", sizes:["S","M","L","XL"], highlights:["Semi-stitched","Heavy flare","With blouse","Wedding wear"], description:"Beautiful floral print lehenga set with matching blouse. Perfect for weddings and festivals.", badge:"Premium" },
    { id:11, name:"Smart Watch with AMOLED", emoji:"⌚", price:799, mrp:4999, discount:84, rating:4.0, reviews:6789, category:"electronics", subcategory:"watches", seller:"GadgetHub", delivery:"Free", sizes:["Free Size"], highlights:["1.78 AMOLED","Heart rate","SpO2 monitor","7 day battery"], description:"Feature-packed smartwatch with AMOLED display, health monitoring, and 7-day battery life.", badge:"Flash Deal" },
    { id:12, name:"Artificial Jewellery Set", emoji:"✨", price:199, mrp:899, discount:78, rating:4.1, reviews:4567, category:"jewellery", subcategory:"sets", seller:"FashionJewels", delivery:"Free", sizes:["Free Size"], highlights:["German silver","Oxidised finish","Traditional look","Lightweight"], description:"Beautiful oxidised jewellery set with necklace, earrings and bangles. Perfect for ethnic wear.", badge:"Budget Buy" },
    { id:13, name:"Phone Case Premium Guard", emoji:"📱", price:149, mrp:599, discount:75, rating:4.0, reviews:2345, category:"electronics", subcategory:"accessories", seller:"PhoneGear", delivery:"Free", sizes:["Free Size"], highlights:["Military grade","Shock proof","Slim design","Wireless charging"], description:"Military grade phone case with air cushion technology for ultimate protection.", badge:"Best Seller" },
    { id:14, name:"Cotton Bedsheet Set", emoji:"🛏️", price:349, mrp:1299, discount:73, rating:4.5, reviews:1890, category:"home", subcategory:"bedding", seller:"HomeComfort", delivery:"Free", sizes:["King","Queen"], highlights:["200TC cotton","2 pillow covers","Machine washable","Colorfast"], description:"Premium cotton bedsheet set with 2 pillow covers. Soft and comfortable for a good night's sleep.", badge:"Top Pick" },
    { id:15, name:"Women's Block Heels", emoji:"👠", price:399, mrp:1599, discount:75, rating:4.3, reviews:1567, category:"shoes", subcategory:"heels", seller:"ShoeStyle", delivery:"Free", sizes:["36","37","38","39","40"], highlights:["Block heel","Cushioned insole","Slip resistant","Party wear"], description:"Stylish block heels with cushioned insole for comfortable all-day wear.", badge:"Trending" },
    { id:16, name:"Men's Casual Shirt", emoji:"👔", price:299, mrp:999, discount:70, rating:4.1, reviews:2134, category:"men", subcategory:"shirts", seller:"StyleMen", delivery:"Free", sizes:["S","M","L","XL","XXL"], highlights:["Cotton blend","Regular fit","Printed design","Casual wear"], description:"Comfortable casual shirt for men with modern prints. Perfect for everyday wear.", badge:"New" },
    { id:17, name:"Vitamin C Face Serum", emoji:"🧴", price:249, mrp:799, discount:69, rating:4.6, reviews:3456, category:"beauty", subcategory:"skincare", seller:"GlowBeauty", delivery:"Free", sizes:["30ml"], highlights:["Vitamin C + E","Paraben free","Suitable all skin","Cruelty free"], description:"Brightening face serum with Vitamin C and E for radiant and glowing skin.", badge:"Bestseller" },
    { id:18, name:"Kids Toy Building Set", emoji:"🧱", price:349, mrp:1299, discount:73, rating:4.4, reviews:876, category:"kids", subcategory:"toys", seller:"KidsWorld", delivery:"Free", sizes:["Free Size"], highlights:["200+ pieces","Non-toxic","Educational","Age 6+"], description:"Creative building block set with 200+ pieces for endless fun and learning.", badge:"Popular" },
    { id:19, name:"Handbag Shoulder Tote", emoji:"👜", price:399, mrp:1499, discount:73, rating:4.2, reviews:1890, category:"bags", subcategory:"handbags", seller:"BagWorld", delivery:"Free", sizes:["Free Size"], highlights:["PU leather","Multiple compartments","Zip closure","Trendy design"], description:"Stylish shoulder tote bag with multiple compartments. Perfect for daily use.", badge:"Trending" },
    { id:20, name:"Men's Sports T-Shirt", emoji:"🎽", price:249, mrp:799, discount:69, rating:4.3, reviews:2345, category:"sports", subcategory:"apparel", seller:"SportFit", delivery:"Free", sizes:["S","M","L","XL","XXL"], highlights:["Dry-fit fabric","Breathable","Anti-odor","Gym wear"], description:"Performance sports t-shirt with dry-fit technology for comfortable workouts.", badge:"Value Buy" },
    { id:21, name:"Silk Dupatta Set", emoji:"🧣", price:199, mrp:799, discount:75, rating:4.3, reviews:1234, category:"women", subcategory:"dupattas", seller:"EthnicWeaves", delivery:"Free", sizes:["Free Size"], highlights:["Art silk","Printed design","Light weight","Versatile"], description:"Beautiful art silk dupatta set with traditional prints. Adds elegance to any outfit.", badge:"New" },
    { id:22, name:"Smart LED Bulb WiFi", emoji:"💡", price:299, mrp:999, discount:70, rating:4.2, reviews:1567, category:"electronics", subcategory:"smart-home", seller:"SmartHome", delivery:"Free", sizes:["Free Size"], highlights:["16 million colors","Voice control","App control","9W LED"], description:"WiFi-enabled smart LED bulb with 16 million colors. Works with Alexa and Google Home.", badge:"Smart" },
    { id:23, name:"Bamboo Watch Men", emoji:"⌚", price:349, mrp:1299, discount:73, rating:4.4, reviews:890, category:"men", subcategory:"watches", seller:"NatureCraft", delivery:"Free", sizes:["Free Size"], highlights:["Bamboo case","Quartz movement","Leather strap","Eco-friendly"], description:"Premium bamboo watch with genuine leather strap. Eco-friendly and stylish.", badge:"Unique" },
    { id:24, name:"Abstract Painting Wall Art", emoji:"🖼️", price:449, mrp:1999, discount:77, rating:4.5, reviews:654, category:"home", subcategory:"decor", seller:"ArtGallery", delivery:"Free", sizes:["12x18","18x24"], highlights:["Canvas print","Vibrant colors","Ready to hang","HD quality"], description:"Beautiful abstract wall art canvas print. Adds a touch of elegance to any room.", badge:"Premium" },
];

// ============ STATE ============
let cart = JSON.parse(localStorage.getItem('kanak-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('kanak-wishlist')) || [];
let pageHistory = ['home'];
let currentPage = 'home';
let currentBanner = 0;
let isLoggedIn = false;

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        initApp();
    }, 2500);
});

function initApp() {
    initBanner();
    initFlashSale();
    initDeals();
    initPopular();
    initHeaderScroll();
    startFlashTimer();
}

// ============ BANNER ============
function initBanner() {
    const slider = document.getElementById('bannerSlider');
    const dotsContainer = document.getElementById('bannerDots');
    const slides = slider.querySelectorAll('.banner-slide');
    
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'banner-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToBanner(i);
        dotsContainer.appendChild(dot);
    });

    let startX = 0;
    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    slider.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            goToBanner(diff > 0 ? (currentBanner + 1) % slides.length : (currentBanner - 1 + slides.length) % slides.length);
        }
    }, {passive:true});

    setInterval(() => goToBanner((currentBanner + 1) % slides.length), 4000);
}

function goToBanner(index) {
    currentBanner = index;
    document.getElementById('bannerSlider').style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.banner-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

// ============ FLASH SALE ============
function initFlashSale() {
    const container = document.getElementById('flashScroll');
    const flashProducts = PRODUCTS.filter(p => p.discount >= 73).slice(0, 8);
    container.innerHTML = flashProducts.map(p => `
        <div class="flash-card" onclick="openProduct(${p.id})">
            <div class="fc-img">${p.emoji}<div class="fc-discount">${p.discount}% OFF</div></div>
            <div class="fc-body">
                <div class="fc-price">₹${p.price}</div>
                <div class="fc-original">₹${p.mrp}</div>
                <div class="fc-name">${p.name}</div>
            </div>
        </div>
    `).join('');
}

function startFlashTimer() {
    let total = 5*3600 + 23*60 + 47;
    setInterval(() => {
        if (total <= 0) total = 8*3600;
        total--;
        const h = Math.floor(total/3600);
        const m = Math.floor((total%3600)/60);
        const s = total%60;
        const boxes = document.querySelectorAll('.timer-box');
        if (boxes.length === 3) {
            boxes[0].textContent = String(h).padStart(2,'0');
            boxes[1].textContent = String(m).padStart(2,'0');
            boxes[2].textContent = String(s).padStart(2,'0');
        }
    }, 1000);
}

// ============ DEALS GRID ============
function initDeals() {
    const container = document.getElementById('dealsGrid');
    const deals = PRODUCTS.slice(0, 6);
    container.innerHTML = deals.map(p => createProductCard(p)).join('');
}

// ============ POPULAR ============
function initPopular() {
    const container = document.getElementById('popularGrid');
    const popular = PRODUCTS.sort(() => Math.random() - 0.5).slice(0, 8);
    container.innerHTML = popular.map(p => createProductCard(p)).join('');
}

// ============ PRODUCT CARD ============
function createProductCard(p) {
    const isWished = wishlist.includes(p.id);
    return `
    <div class="product-card" onclick="openProduct(${p.id})">
        <div class="pc-img">
            ${p.emoji}
            ${p.badge ? `<div class="pc-badge">${p.badge}</div>` : ''}
            <button class="pc-wishlist ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWish(${p.id})">
                <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
            </button>
        </div>
        <div class="pc-body">
            <div class="pc-name">${p.name}</div>
            <div class="pc-rating">
                <span>${p.rating} <i class="fas fa-star"></i></span>
                <span class="pc-reviews">(${formatNum(p.reviews)})</span>
            </div>
            <div class="pc-price-row">
                <span class="pc-price">₹${p.price}</span>
                <span class="pc-mrp">₹${p.mrp}</span>
                <span class="pc-off">${p.discount}% off</span>
            </div>
            <div class="pc-delivery">🚚 ${p.delivery === 'Free' ? 'Free Delivery' : p.delivery}</div>
        </div>
    </div>`;
}

// ============ NAVIGATION ============
function navigateTo(page, data) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    if (currentPage !== page) pageHistory.push(currentPage);
    currentPage = page;

    // Update bottom nav
    document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.bnav[data-page="${page}"]`);
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Page-specific logic
    switch(page) {
        case 'category':
            renderCategoryPage(data || 'women');
            break;
        case 'allProducts':
            renderAllProducts();
            break;
        case 'flash':
            renderFlashPage();
            break;
        case 'cart':
            renderCart();
            break;
        case 'wishlist':
            renderWishlist();
            break;
        case 'orders':
            break;
        case 'login':
            break;
    }
}

function goBack() {
    const prev = pageHistory.pop() || 'home';
    currentPage = prev;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + prev);
    if (target) target.classList.add('active');
    document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.bnav[data-page="${prev}"]`);
    if (activeNav) activeNav.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    pageHistory = ['home'];
    currentPage = 'home';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-home').classList.add('active');
    document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
    document.querySelector('.bnav[data-page="home"]').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ CATEGORY PAGE ============
function renderCategoryPage(category) {
    const title = document.getElementById('categoryTitle');
    const catNames = {
        women:"Women's Fashion", men:"Men's Fashion", jewellery:"Jewellery", 
        electronics:"Electronics", home:"Home & Kitchen", beauty:"Beauty & Health",
        shoes:"Footwear", kids:"Kids", bags:"Bags & Luggage", sports:"Sports",
        books:"Books", pets:"Pet Supplies", fashion:"Fashion"
    };
    title.textContent = catNames[category] || 'Products';
    
    let products = PRODUCTS.filter(p => p.category === category);
    if (products.length === 0) products = PRODUCTS.slice(0, 12);
    
    document.getElementById('categoryGrid').innerHTML = products.map(p => createProductCard(p)).join('');
}

function renderAllProducts() {
    document.getElementById('allProductsGrid').innerHTML = PRODUCTS.map(p => createProductCard(p)).join('');
}

function renderFlashPage() {
    const flash = PRODUCTS.filter(p => p.discount >= 73);
    document.getElementById('flashGrid').innerHTML = flash.map(p => createProductCard(p)).join('');
}

// ============ SORT ============
function sortProducts(sort, btn) {
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    
    let products = [...PRODUCTS];
    const categoryTitle = document.getElementById('categoryTitle').textContent.toLowerCase();
    
    switch(sort) {
        case 'priceLow': products.sort((a,b) => a.price - b.price); break;
        case 'priceHigh': products.sort((a,b) => b.price - a.price); break;
        case 'newest': products.sort((a,b) => b.id - a.id); break;
        case 'rating': products.sort((a,b) => b.rating - a.rating); break;
        case 'discount': products.sort((a,b) => b.discount - a.discount); break;
        default: products.sort((a,b) => b.reviews - a.reviews);
    }
    
    document.getElementById('categoryGrid').innerHTML = products.map(p => createProductCard(p)).join('');
}

// ============ PRODUCT DETAIL ============
function openProduct(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    
    const isWished = wishlist.includes(p.id);
    const isSizes = p.sizes.length > 1 && p.sizes[0] !== 'Free Size';
    
    const detail = document.getElementById('productDetail');
    detail.innerHTML = `
        <div class="pd-images">
            ${p.emoji}
            <div class="pd-badge">${p.discount}% OFF</div>
        </div>
        <div class="pd-section">
            <div class="pd-info">
                <div class="pd-title">${p.name}</div>
                <div class="pd-rating-row">
                    <div class="pd-rating-badge">${p.rating} <i class="fas fa-star"></i></div>
                    <span class="pd-reviews-count">${formatNum(p.reviews)} reviews</span>
                </div>
                <div class="pd-price-section">
                    <span class="pd-price">₹${p.price}</span>
                    <span class="pd-mrp">₹${p.mrp}</span>
                    <span class="pd-off">${p.discount}% off</span>
                </div>
                <div class="pd-delivery-info">🚚 ${p.delivery === 'Free' ? 'Free delivery on this product' : p.delivery}</div>
                <div class="pd-seller-info">Sold by: <strong>${p.seller}</strong></div>
                ${isSizes ? `
                    <div class="pd-size-label">Select Size</div>
                    <div class="pd-sizes">
                        ${p.sizes.map((s,i) => `<div class="pd-size ${i===0?'active':''}" onclick="selectSize(this)">${s}</div>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
        <div class="pd-highlights">
            <h3>Highlights</h3>
            <ul class="pd-highlight-list">
                ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
        <div class="pd-description">
            <h3>Description</h3>
            <p>${p.description}</p>
        </div>
        <div style="padding:14px">
            <button class="pc-wishlist ${isWished?'active':''}" style="width:100%;height:44px;border-radius:8px;font-size:14px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;gap:8px;background:white" onclick="toggleWish(${p.id});openProduct(${p.id})">
                <i class="${isWished?'fas':'far'} fa-heart"></i> ${isWished?'Added to Wishlist':'Add to Wishlist'}
            </button>
        </div>
        <div class="pd-bottom-bar">
            <button class="btn-add-cart" onclick="addToCart(${p.id})">
                <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
            <button class="btn-buy-now" onclick="addToCart(${p.id});openCart()">
                Buy Now
            </button>
        </div>
    `;
    
    pageHistory.push(currentPage);
    currentPage = 'product';
    document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
    document.getElementById('page-product').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectSize(el) {
    el.parentElement.querySelectorAll('.pd-size').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
}

// ============ CART ============
function addToCart(id) {
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id, qty: 1 });
    }
    saveCart();
    updateBadges();
    showToast('Added to cart!');
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateBadges();
    renderCart();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
            return;
        }
    }
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('kanak-cart', JSON.stringify(cart));
}

function renderCart() {
    const container = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add items to your cart and they will appear here</p>
                <button class="btn-primary" onclick="goHome()">Start Shopping</button>
            </div>
        `;
        return;
    }
    
    let subtotal = 0, totalMrp = 0;
    
    const items = cart.map(c => {
        const p = PRODUCTS.find(x => x.id === c.id);
        if (!p) return '';
        const total = p.price * c.qty;
        const mrpTotal = p.mrp * c.qty;
        subtotal += total;
        totalMrp += mrpTotal;
        return `
        <div class="cart-item">
            <div class="ci-img">${p.emoji}</div>
            <div class="ci-info">
                <div class="ci-name">${p.name}</div>
                <div class="ci-price">₹${total}</div>
                <div class="ci-actions">
                    <div class="ci-qty">
                        <button onclick="changeQty(${p.id},-1)"><i class="fas fa-minus"></i></button>
                        <span>${c.qty}</span>
                        <button onclick="changeQty(${p.id},1)"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="ci-remove" onclick="removeFromCart(${p.id})">Remove</button>
                    <button class="ci-wishlist-btn" onclick="toggleWish(${p.id})">♡ Wishlist</button>
                </div>
            </div>
        </div>`;
    }).join('');
    
    const discount = totalMrp - subtotal;
    const total = subtotal;
    
    container.innerHTML = `
        ${items}
        <div class="cart-savings">🎉 You're saving ₹${discount} on this order!</div>
        <div class="cart-summary">
            <div class="cart-row"><span>Subtotal (${cart.reduce((a,c)=>a+c.qty,0)} items)</span><span>₹${totalMrp}</span></div>
            <div class="cart-row"><span>Discount</span><span class="green">-₹${discount}</span></div>
            <div class="cart-row"><span>Delivery</span><span class="green">FREE</span></div>
            <div class="cart-row total"><span>Total Amount</span><span>₹${total}</span></div>
        </div>
        <div class="cart-checkout">
            <button class="btn-checkout" onclick="showToast('Order placed successfully! 🎉')">
                Place Order - ₹${total}
            </button>
        </div>
    `;
}

function openCart() {
    navigateTo('cart');
}

// ============ WISHLIST ============
function toggleWish(id) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(id);
        showToast('Added to wishlist! ❤️');
    }
    localStorage.setItem('kanak-wishlist', JSON.stringify(wishlist));
    updateBadges();
    refreshCurrentView();
}

function toggleWishlist() {
    navigateTo('wishlist');
}

function renderWishlist() {
    const container = document.getElementById('wishlistContent');
    
    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="wishlist-empty">
                <div class="wishlist-empty-icon">💝</div>
                <h3>Your wishlist is empty</h3>
                <p>Save items you love to your wishlist</p>
                <button class="btn-primary" onclick="goHome()">Explore Products</button>
            </div>
        `;
        return;
    }
    
    const products = wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    container.innerHTML = `<div class="products-grid" style="padding-top:14px">${products.map(p => createProductCard(p)).join('')}</div>`;
}

// ============ BADGES ============
function updateBadges() {
    const cartBadge = document.getElementById('cartBadge');
    const wishlistBadge = document.getElementById('wishlistBadge');
    
    if (cart.length > 0) {
        cartBadge.style.display = 'flex';
        cartBadge.textContent = cart.reduce((a,c) => a + c.qty, 0);
    } else {
        cartBadge.style.display = 'none';
    }
    
    if (wishlist.length > 0) {
        wishlistBadge.style.display = 'flex';
        wishlistBadge.textContent = wishlist.length;
    } else {
        wishlistBadge.style.display = 'none';
    }
}

// ============ SEARCH ============
function openSearch() {
    document.getElementById('searchOverlay').classList.add('open');
    setTimeout(() => document.getElementById('searchInput').focus(), 300);
    document.body.style.overflow = 'hidden';
}

function closeSearch() {
    document.getElementById('searchOverlay').classList.remove('open');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchBody').querySelector('.search-trending').style.display = 'block';
    document.getElementById('searchClear').style.display = 'none';
    document.body.style.overflow = '';
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchBody').querySelector('.search-trending').style.display = 'block';
    document.getElementById('searchClear').style.display = 'none';
}

function searchFor(term) {
    document.getElementById('searchInput').value = term;
    handleSearch(term);
}

function handleSearch(term) {
    const clear = document.getElementById('searchClear');
    const trending = document.getElementById('searchBody').querySelector('.search-trending');
    const results = document.getElementById('searchResults');
    
    if (term.length > 0) {
        clear.style.display = 'block';
        trending.style.display = 'none';
        results.style.display = 'block';
        
        const found = PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(term.toLowerCase()) ||
            p.category.toLowerCase().includes(term.toLowerCase()) ||
            p.subcategory.toLowerCase().includes(term.toLowerCase())
        );
        
        if (found.length === 0) {
            results.innerHTML = '<p style="text-align:center;color:#999;padding:40px">No products found</p>';
        } else {
            results.innerHTML = found.map(p => createProductCard(p)).join('');
        }
    } else {
        clear.style.display = 'none';
        trending.style.display = 'block';
        results.style.display = 'none';
    }
}

// ============ LOGIN ============
function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// Login form handler
document.getElementById('modalLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('modalPhone').value;
    if (phone.length === 10) {
        isLoggedIn = true;
        document.getElementById('accountName').textContent = 'Welcome, User!';
        document.getElementById('accountPhone').textContent = '+91 ' + phone;
        document.getElementById('loginLogout').textContent = 'Logout';
        document.getElementById('accountAvatar').innerHTML = '<i class="fas fa-user-check"></i>';
        closeLogin();
        showToast('Logged in successfully! 🎉');
    }
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value;
    if (phone.length === 10) {
        isLoggedIn = true;
        document.getElementById('accountName').textContent = 'Welcome, User!';
        document.getElementById('accountPhone').textContent = '+91 ' + phone;
        showToast('Logged in successfully! 🎉');
        goHome();
    }
});

// ============ HEADER SCROLL ============
function initHeaderScroll() {
    let lastScroll = 0;
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        const y = window.pageYOffset;
        if (y > lastScroll && y > 150) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = y;
    }, {passive: true});
}

// ============ HELPERS ============
function formatNum(n) {
    if (n >= 100000) return (n/100000).toFixed(1) + 'L';
    if (n >= 1000) return (n/1000).toFixed(1) + 'K';
    return n;
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function shareProduct() {
    if (navigator.share) {
        navigator.share({ title: 'Kanak Shopping', text: 'Check out this product!', url: window.location.href });
    } else {
        showToast('Link copied! 📋');
    }
}

function refreshCurrentView() {
    // Re-render current product cards to update wishlist icons
    document.querySelectorAll('.pc-wishlist').forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        const match = onclick?.match(/toggleWish\((\d+)\)/);
        if (match) {
            const id = parseInt(match[1]);
            const isWished = wishlist.includes(id);
            btn.classList.toggle('active', isWished);
            btn.innerHTML = `<i class="${isWished ? 'fas' : 'far'} fa-heart"></i>`;
        }
    });
}

// Haptic feedback
document.addEventListener('click', e => {
    if (e.target.closest('button, .product-card, .deal-card, .flash-card, .category-item')) {
        if (navigator.vibrate) navigator.vibrate(8);
    }
});
