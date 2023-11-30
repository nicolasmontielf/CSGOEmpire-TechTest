<script setup>
    import LayoutNavbar from './components/layout/LayoutNavbar'
    import LayoutFooter from './components/layout/LayoutFooter'
</script>

<template>
    <div>
        <header>
            <LayoutNavbar />
        </header>

        <main class="container mx-auto mt-10 mb-5">
            <RouterView />
        </main>

        <footer>
            <LayoutFooter />
        </footer>

    </div>
</template>