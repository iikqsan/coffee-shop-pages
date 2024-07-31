<template>
    <div class="home">
        <section>
            <div class="hero min-h-screen"
                style="background-image: url(https://images.unsplash.com/photo-1525088553748-01d6e210e00b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-neutral-content text-center">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">
                            Welcome to Premium coffee shop.<br>
                            If you want beverage and bakery products,<br>
                            We have many to choose from.
                        </p>
                        <button @click="goToCoffeePage" class="btn btn-accent text-white">Order Here</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        goToCoffeePage() {
            this.$router.push("/coffee");
        }
    }
}
</script>

<style scoped></style>
