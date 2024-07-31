<template>
    <section>
        <div class="hero min-h-screen"
            style="background-image: url(https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
            <div class="hero-overlay bg-opacity-70"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">COFFEE</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="menu bg-neutral-200">
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1681026859292-58c3b2041bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtZXJpY2FubyUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Americano</h2>
                <p>Price : Hot 35.- / Ice 45.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1641962710743-ab9af36c2d0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVzcHJlc3NvJTIwY29mZmVlfGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Espresso (Thai style)</h2>
                <p>Price : Hot 40.- / Ice 50.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1543256840-0709ad5d3726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGxhdHRlJTIwY29mZmVlfGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Latte</h2>
                <p>Price : Hot 40.- / Ice 50.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1642647392045-8592bf9b5900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxtb2NoYSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Mocha</h2>
                <p>Price : Hot 45.- / Ice 55.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1588413333567-fbbeba4d6405?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb251dCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Coconut Latte</h2>
                <p>Price : Ice 65.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1673507375273-abc1ed4eecfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Lemon Honey Coffee</h2>
                <p>Price : Hot 55.- / Ice 65.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1669807973421-434c4fc146b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwY29mZmVlfGVufDB8fDB8fHww" />
            </figure>
            <div class="card-body w-96">
                <h2 class="card-title">Orange Coffee</h2>
                <p>Price : Ice 65.-</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
    </section>
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
