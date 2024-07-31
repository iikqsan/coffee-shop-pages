<template>
    <nav class="navbar flex-col bg-neutral text-neutral-content fixed z-10">
        <div class="container justify-between">
            <a href="/" class="btn btn-ghost text-xl">Coffee SHOP</a>
            <ul class="menu menu-vertical lg:menu-horizontal rounded-box">
                <li><a @click="goToCoffeePage">Coffee</a></li>
                <li><a @click="goToTeaPage">Tea</a></li>
                <li><a @click="goToCocoaPage">Cocoa & Milk</a></li>
                <li><a @click="goToBakeryPage">Bakery</a></li>
            </ul>
            <button class="btn btn-ghost dropdown dropdown-end" @click="showCart">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span v-show="$store.state.isVisible" class="badge badge-sm indicator-item">{{ $store.state.count }}</span>
                </div>
                <ul v-show="CartItem" class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <button class="btn btn-secondary text-white ">Checkout ({{ $store.state.count }} item)</button>
                </ul>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            CartItem: false
        }
    },
    methods: {
        showCart() {
            this.CartItem = !this.CartItem
        },
        goToCoffeePage() {
            this.$router.push("/coffee");
        },
        goToTeaPage() {
            this.$router.push("/tea");
        },
        goToCocoaPage() {
            this.$router.push("/cocoa&milk");
        },
        goToBakeryPage() {
            this.$router.push("/bakery");
        }
    }
}
</script>

<style scoped></style>