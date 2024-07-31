<template>
    <div class="tea">
        <section>
            <div class="hero min-h-screen"
                style="background-image: url(https://images.unsplash.com/photo-1577016029703-cc22a7c0c28c?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-neutral-content text-center">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">TEA</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="menu bg-neutral-200">
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1609670438772-9cf3afc5052b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1pbGslMjB0ZWF8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Thai Tea</h2>
                    <p>Price : Hot 35.- / Ice 45.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1627769124375-8f797bb17140?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk2fHxncmVlbiUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Green Tea</h2>
                    <p>Price : Hot 35.- / Ice 45.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://plus.unsplash.com/premium_photo-1694540110932-0c03eaae840c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxncmVlbiUyMG1pbGslMjB0ZWF8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Matcha green Tea</h2>
                    <p>Price : Hot 40.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1654169614907-01f893a226d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwdGVhfGVufDB8fDB8fHww" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Black Tea</h2>
                    <p>Price : Hot 40.- / Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1637216789852-d2c6d5de6f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxlbW9uJTIwdGVhfGVufDB8fDB8fHww" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Lemon Tea</h2>
                    <p>Price : Hot 40.- / Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1555211652-5c6222f971bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXklMjB0ZWF8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Honey Lemon Tea</h2>
                    <p>Price : Hot 45.- / Ice 55.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        addToCart(){
            this.$store.state.count++
            this.$store.state.isVisible = true
        }
    }
}
</script>

<style scoped>
.menu {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
}

.card {
    justify-content: center;
    align-items: center;
    margin: 3rem;
}

img {
    max-width: 384px;
    height: 576px;
}
</style>
