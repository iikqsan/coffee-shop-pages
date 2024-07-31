<template>
    <div class="bekery">
        <section>
            <div class="hero min-h-screen" style="background-image: url(https://plus.unsplash.com/premium_photo-1687886026544-a07433c0ee2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D);">
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-neutral-content text-center">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">BAKERY</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="menu bg-neutral-200">
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1715015440855-7d95cf92608a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Chocolate Cake</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1551879400-111a9087cd86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZhbmlsYSUyMGNha2V8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Cranberry Cake</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1609501967126-1a43c02f655c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhc3BiZXJyeSUyMGNha2V8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Raspberry Cake</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1673337265958-720aaa08d4ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxjYWtlfGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Strawberry Cake</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1607974379235-7c6452d72baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwZG9udXR8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Donut</h2>
                <p>Price : 45.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvaXNzYW50fGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Croissant</h2>
                <p>Price : 50.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1663840344827-ee2d5d5cafb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGllfGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Pumpkin Pie</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpZXxlbnwwfHwwfHx8MA%3D%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Cherry Pie</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1599034595903-386abd9730ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkzfHxwaWV8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Strawberry Pie</h2>
                <p>Price : 60.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1697961533176-53cbe07cbf4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNvb2tpZXxlbnwwfHwwfHx8MA%3D%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Cookie</h2>
                <p>Price : 40.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1528945522327-7032b0774637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRvYXN0fGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Banana Toast</h2>
                <p>Price : 55.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1672639601612-4fcf7dab1ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9hc3R8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Egg Toast</h2>
                <p>Price : 60.-</p>
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

img{
    max-width: 384px;
    height: 576px;
}
</style>
