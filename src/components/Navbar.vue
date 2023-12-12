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
    <nav id="topnav" ref="topnav" class="defaultscroll is-sticky tagline-height">
        <div class="container">
            <!-- Logo container-->
            <a class="logo pl-0" href="index.html">
                <img src="../assets/images/logo.png" class="inline-block dark:hidden" style="width: 92px; height: 27px;"
                    alt="">
                <img src="../assets/images/logo.png" class="hidden dark:inline-block" alt="">
            </a>


            <div class="menu-extras">
                <div class="menu-item">
                    <a class="navbar-toggle" @click="toggleMenu" id="isToggle" ref="isToggle">
                        <div class="lines" :class="{ open: isOpen }">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>

            <div ref="navigation" id="navigation" :class="{ open: isOpen }">
                <ul class="navigation-menu justify-end">
                    <li><router-link to="/" class="sub-menu-item">Beranda</router-link></li>
                    <li><a href="#" class="sub-menu-item font-extrabold">Tentang Kami</a></li>
                    <li><a href="#" class="sub-menu-item ">Promo</a></li>
                    <li><a href="#" class="sub-menu-item ">Paket</a></li>
                    <li><a href="#" class="sub-menu-item ">Bantuan</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: "Navbar",
    data() {
        return {
            showTagline: true,
            isOpen: false
        };
    },
    mounted() {
        this.getClosest();
        this.clickableMenu();
        this.activateMenu();
        this.windowScroll();
        window.addEventListener("scroll", this.windowScroll);
    },
    methods: {
        hideTagline() {
            this.showTagline = false;
            const topnav = document.getElementById('topnav');
            topnav.classList.remove('tagline-height');
        },
        toggleMenu() {
            this.isOpen = !this.isOpen;
            const navigation = this.$refs.navigation;

            if (this.isOpen) {
                navigation.classList.add('open');
                navigation.style.display = "block";
            } else {
                navigation.classList.remove('open');
                navigation.style.display = "none";
            }
        },
        clickableMenu() {
            const navigation = this.$refs.navigation;
            if (navigation) {
                const elements = navigation.getElementsByTagName("a");
                for (let i = 0, len = elements.length; i < len; i++) {
                    elements[i].addEventListener("click", (event) => {
                        const href = event.target.getAttribute("href");
                        if (href === "javascript:void(0)") {
                            const submenu = event.target.nextElementSibling.nextElementSibling;
                            if (submenu) {
                                submenu.classList.toggle('open');
                            }
                        }
                    });
                }
            }
        },
        windowScroll() {
            const navbar = this.$refs.topnav;
            if (navbar != null) {
                if (
                    document.body.scrollTop >= 50 ||
                    document.documentElement.scrollTop >= 50
                ) {
                    navbar.classList.add("nav-sticky");
                } else {
                    navbar.classList.remove("nav-sticky");
                }
            }
        },
        activateMenu() {
            const menuItems = this.$refs.navigation.querySelectorAll(".sub-menu-item");
            if (menuItems) {
                menuItems.forEach((menuItem) => {
                    if (menuItem.href === window.location.href) {
                        menuItem.classList.add('active');

                        let immediateParent = this.getClosest(menuItem, 'li');
                        if (immediateParent) {
                            immediateParent.classList.add('active');

                            let parent = this.getClosest(immediateParent, '.child-menu-item');
                            if (parent) {
                                parent.classList.add('active');
                            }

                            parent = this.getClosest(parent || immediateParent, '.parent-menu-item');
                            if (parent) {
                                parent.classList.add('active');

                                let parentMenuItem = parent.querySelector('.menu-item');
                                if (parentMenuItem) {
                                    parentMenuItem.classList.add('active');
                                }

                                let parentOfParent; // Deklarasi variabel parentOfParent di sini
                                parentOfParent = this.getClosest(parent, '.parent-parent-menu-item');
                                if (parentOfParent) {
                                    parentOfParent.classList.add('active');
                                }
                            } else {
                                let parentOfParent; // Deklarasi variabel parentOfParent di sini
                                parentOfParent = this.getClosest(menuItem, '.parent-parent-menu-item');
                                if (parentOfParent) {
                                    parentOfParent.classList.add('active');
                                }
                            }
                        }
                    }
                });
            }
        },
        getClosest(elem, selector) {
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) { }
                        return i > -1;
                    };
            }

            // Mulai dari elemen saat ini, cari parent terdekat yang sesuai dengan selector
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (elem.matches(selector)) return elem;
            }
            return null;
        }
    }

};
</script>