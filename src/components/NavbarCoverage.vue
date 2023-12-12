<template>
    <div v-if="showTagline" class="tagline dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
        <div class="container">
            <div class="flex items-center justify-center">
                <div class="tagline-wrapper flex items-center">
                    <!-- Image component -->
                    <div class="image-container mr-4">
                        <img src="../assets/images/home/cek-area.png" class="w-12 h-12 object-contain object-center" alt="">
                    </div>
                    <div class="text-primary font-semibold">Mau Berlangganan? <strong
                            class="d-none d-md-block font-black">Cek
                            Ketersediaan
                            XL <span class="text-secondary font-black">SATU</span> Fiber di lokasimu sekarang!</strong>
                    </div>

                    <button
                        class="py-1 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center text-white rounded-full my-1 ml-3"
                        style="background-color: #18448A;">Cek
                        Jangkauan</button>

                    <!-- Maake a close button -->
                    <div class="coverage-close" @click="hideTagline">

                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" font-size="48"
                            color="#000" style="color: rgb(0, 0, 0);" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'NavbarCoverage',
    data() {
        return {
            showTagline: true
        };
    },
    methods: {
        hideTagline() {
            this.showTagline = false;
            // Remove class container
            document.querySelector('.tagline').classList.remove('container');

        }
    }
};
</script>

<style scoped>
.text-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: 1rem;
    color: #18448A;
}

.text-secondary {
    color: #05a986 !important;
}

button {
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

button:hover {
    background-color: #0f3066;
    ;
    border-color: #0f3066;
    ;
}

.coverage-close {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 111;
}
</style>