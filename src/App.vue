<script setup>
    import LayoutNavbar from './components/layout/LayoutNavbar'
    import LayoutFooter from './components/layout/LayoutFooter'
</script>

<template>
    <div>
        <header>
            <LayoutNavbar />
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <LayoutFooter />
        </footer>

    </div>
</template>