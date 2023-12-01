<script setup>
    import LayoutNavbar from './components/layout/LayoutNavbar'
    import LayoutFooter from './components/layout/LayoutFooter'
</script>

<template>
    <div>
        <header>
            <LayoutNavbar />
        </header>

        <main class="app-container mx-auto mt-[60px] mb-5">
            <RouterView />
        </main>

        <footer>
            <LayoutFooter />
        </footer>

    </div>
</template>

<style scoped>
    .app-container {
        width: 90%;
        margin-top: 60px;
    }
</style>