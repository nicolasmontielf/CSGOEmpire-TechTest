<script setup>
    import NavbarMenuItem from './NavbarMenuItem';
</script>

<template>
    <nav class="bg-color-page-header px-10 h-navbar">
        <div class="flex flex-row items-center h-full justify-between">
            <div class="flex">
                <RouterLink to="/">
                    <img src="/images/logo.svg" class="w-[110px]" alt="League Web UI logo" />
                </RouterLink>
            </div>
            <div>
                <ul class="font-medium flex flex-row border-0 gap-10">
                    <NavbarMenuItem title="Schedule" icon="schedule" link="/" />
                    <NavbarMenuItem title="Leaderboard" icon="leaderboard" link="/leaderboard" />
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .h-navbar {
        height: 60px;
    }
</style>