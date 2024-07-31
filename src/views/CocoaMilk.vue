<template>
    <div class="cocoa&milk">
        <section>
            <div class="hero min-h-screen"
                style="background-image: url(https://images.unsplash.com/photo-1523529733369-8c9cf7593bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jb2ElMjBhbmQlMjBtaWxrfGVufDB8fDB8fHww);">
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-neutral-content text-center">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">COCOA & MILK</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="menu bg-neutral-200">
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://plus.unsplash.com/premium_photo-1695750678153-e7148811673e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGljZSUyMGNvY29hfGVufDB8fDB8fHww" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Cocoa</h2>
                    <p>Price : Hot 35.- / Ice 45.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1523529733369-8c9cf7593bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhcmslMjBjb2NvYXxlbnwwfHwwfHx8MA%3D%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Dark Cocoa</h2>
                    <p>Price : Hot 40.- / Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://plus.unsplash.com/premium_photo-1694481100261-ab16523c4093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdCUyMG1pbGt8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Sweet Milk</h2>
                    <p>Price : Hot 35.- / Ice 45.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1686638745403-d21193f16b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluayUyMG1pbGt8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Pink Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://plus.unsplash.com/premium_photo-1663853491017-272589744638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JlZW4lMjBtaWxrfGVufDB8fDB8fHww" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Green Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1641893754790-99d96ac55745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWl4ZWQlMjBmcnVpdCUyMG1pbGt8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Cherry Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1685967836529-b0e8d6938227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZWQlMjBmcnVpdCUyMG1pbGt8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Banana Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1648178628415-b410fc1d58bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeSUyMG1pbGt8ZW58MHx8MHx8fDA%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Strawberry Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbmdvJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Mango Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1596392301391-e8622b210bd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGVybWVsb24lMjBtaWxrfGVufDB8fDB8fHww" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Pineapple Milk</h2>
                    <p>Price : Ice 50.-</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1586917049334-0f99406d8a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbmdvJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D" />
                </figure>
                <div class="card-body w-96">
                    <h2 class="card-title">Oreo Milk</h2>
                    <p>Price : Ice 55.-</p>
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
