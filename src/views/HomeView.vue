<template>
    <div style="display: flex; justify-content: center; align-items: center; min-height: 80vh;">

        <div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 150px;">
            <div class="ta mb-n2" style="font-size: 10em; font-weight: 800; line-height: 0.9; -webkit-text-stroke: 3px black; color: white;">
                Ta
            </div>
            <div class="vue" style="font-size: 10em; font-weight: 800; -webkit-text-stroke: 3px black; color: white;">
                VUE
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center;">
            <img src="/lunettes.svg" alt="lunettes" style="width: 600px; margin-bottom: 50px;" />
            <RouterLink class="footer-link" style="display: inline-block; padding: 10px 30px; border: none; background-color: #1d1e56; color: #fff; cursor: pointer; font-size: 18px; text-decoration: none;" to="/login">
                Inscription
            </RouterLink>
        </div>

    </div>
</template>
