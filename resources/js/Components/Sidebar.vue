<template>
    <div class="navbar-bg"></div>
    <nav class="navbar navbar-expand-lg main-navbar">
        <ul class="navbar-nav mr-auto">
            <li><a href="#" data-toggle="sidebar" @click="toggleSidebar()" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
        </ul>
        <ul class="navbar-nav navbar-right">
            <li class="dropdown dropdown-list-toggle">
                <a href="#" data-toggle="dropdown" class="nav-link nav-link-lg message-toggle beep"><i class="far fa-envelope"></i></a>
                <div class="dropdown-menu dropdown-list dropdown-menu-right">
                    <div class="dropdown-header">Messages
                        <div class="float-right">
                            <a href="#">Mark All As Read</a>
                        </div>
                    </div>
                    <div class="dropdown-list-content dropdown-list-message">
                        <a href="#" class="dropdown-item dropdown-item-unread">
                        <div class="dropdown-item-avatar">
                            <img alt="image" src="" class="rounded-circle">
                            <div class="is-online"></div>
                        </div>
                        <div class="dropdown-item-desc">
                            <b>Kusnaedi</b>
                            <p>Hello, Bro!</p>
                            <div class="time">10 Hours Ago</div>
                        </div>
                        </a>
                        <a href="#" class="dropdown-item dropdown-item-unread">
                        <div class="dropdown-item-avatar">
                            <img alt="image" src="" class="rounded-circle">
                        </div>
                        <div class="dropdown-item-desc">
                            <b>Dedik Sugiharto</b>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            <div class="time">12 Hours Ago</div>
                        </div>
                        </a>
                        <a href="#" class="dropdown-item dropdown-item-unread">
                        <div class="dropdown-item-avatar">
                            <img alt="image" src="" class="rounded-circle">
                            <div class="is-online"></div>
                        </div>
                        <div class="dropdown-item-desc">
                            <b>Agung Ardiansyah</b>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="time">12 Hours Ago</div>
                        </div>
                        </a>
                        <a href="#" class="dropdown-item">
                        <div class="dropdown-item-avatar">
                            <img alt="image" src="" class="rounded-circle">
                        </div>
                        <div class="dropdown-item-desc">
                            <b>Ardian Rahardiansyah</b>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                            <div class="time">16 Hours Ago</div>
                        </div>
                        </a>
                        <a href="#" class="dropdown-item">
                        <div class="dropdown-item-avatar">
                            <img alt="image" src="" class="rounded-circle">
                        </div>
                        <div class="dropdown-item-desc">
                            <b>Alfa Zulkarnain</b>
                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                            <div class="time">Yesterday</div>
                        </div>
                        </a>
                    </div>
                    <div class="dropdown-footer text-center">
                        <a href="#">View All <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </li>
            <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg beep"><i class="far fa-bell"></i></a>
                <div class="dropdown-menu dropdown-list dropdown-menu-right">
                <div class="dropdown-header">Notifications
                    <div class="float-right">
                    <a href="#">Mark All As Read</a>
                    </div>
                </div>
                <div class="dropdown-list-content dropdown-list-icons">
                    <a href="#" class="dropdown-item dropdown-item-unread">
                    <div class="dropdown-item-icon bg-primary text-white">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="dropdown-item-desc">
                        Template update is available now!
                        <div class="time text-primary">2 Min Ago</div>
                    </div>
                    </a>
                    <a href="#" class="dropdown-item">
                    <div class="dropdown-item-icon bg-info text-white">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="dropdown-item-desc">
                        <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                        <div class="time">10 Hours Ago</div>
                    </div>
                    </a>
                    <a href="#" class="dropdown-item">
                    <div class="dropdown-item-icon bg-success text-white">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="dropdown-item-desc">
                        <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                        <div class="time">12 Hours Ago</div>
                    </div>
                    </a>
                    <a href="#" class="dropdown-item">
                    <div class="dropdown-item-icon bg-danger text-white">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="dropdown-item-desc">
                        Low disk space. Let's clean it!
                        <div class="time">17 Hours Ago</div>
                    </div>
                    </a>
                    <a href="#" class="dropdown-item">
                    <div class="dropdown-item-icon bg-info text-white">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="dropdown-item-desc">
                        Welcome to Stisla template!
                        <div class="time">Yesterday</div>
                    </div>
                    </a>
                </div>
                <div class="dropdown-footer text-center">
                    <a href="#">View All <i class="fas fa-chevron-right"></i></a>
                </div>
                </div>
            </li>
            <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="" class="rounded-circle mr-1">
                    <div class="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-title">Logged in 5 min ago</div>
                    <a href="features-profile.html" class="dropdown-item has-icon">
                        <i class="far fa-user"></i> Profile
                    </a>
                    <a href="features-activities.html" class="dropdown-item has-icon">
                        <i class="fas fa-bolt"></i> Activities
                    </a>
                    <a href="features-settings.html" class="dropdown-item has-icon">
                        <i class="fas fa-cog"></i> Settings
                    </a>
                    <div class="dropdown-divider"></div>
                    <Link as="a" href="/logout" method="post" class="dropdown-item has-icon text-danger">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </Link>
                </div>
            </li>
        </ul>
    </nav>
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <a href="index.html">Stisla</a>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
            </div>
            <ul class="sidebar-menu">
                <li class="menu-header">Dashboard</li>
                <nav-link :href="'/dashboard'"><i class="fas fa-fire"></i><span>Dashboard</span></nav-link>
                <li class="menu-header">Dashboard</li>
                <multi-nav-link :menuItems="[
                    {
                        url : '/dashboard/users',
                        label : 'Users'
                    },
                    {
                        url : '/dashboard',
                        label : 'Example Multi Menu'
                    },
                ]" >
                    <i class="fas fa-fire"></i><span>Example Multi Menu</span>
                </multi-nav-link>
                <!-- <li class="menu-header">Dashboard</li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link has-dropdown"><i class="fas fa-fire"></i><span>Dashboard</span></a>
                    <ul class="dropdown-menu">
                        <li><a class="nav-link" href="index-0.html">General Dashboard</a></li>
                        <li><a class="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                    </ul>
                </li>
                <li class="menu-header">Starter</li> -->
            </ul>

        </aside>
    </div>
</template>
<script>
    import { Link } from '@inertiajs/vue3';
    import NavLink from '@/Components/NavLink.vue';
    import MultiNavLink from '@/Components/MultiNavLink.vue';

    export default {
        components:{
            NavLink,
            MultiNavLink,
            Link
        },
        data() {
            return {
                sidebar_nicescroll_opts: {
                    cursoropacitymin: 0,
                    cursoropacitymax: 0.8,
                    zindex: 892
                },
                now_layout_class: null,
                sidebarNiceScroll: null,
                sidebar_nicescroll: null
            };
        },
        mounted() {
            this.sidebarSticky();
            this.sidebarDropdown();
            this.updateSidebarNiceScroll();
            $(".main-content").css({
                minHeight: $(window).outerHeight() - 108
            })

            $(".nav-collapse-toggle").click(function() {
                $(this).parent().find('.navbar-nav').toggleClass('show');
                return false;
            });

            $(document).on('click', function(e) {
                $(".nav-collapse .navbar-nav").removeClass('show');
            });
            this.toggleLayout();
            window.addEventListener('resize', this.toggleLayout);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.toggleLayout);
        },
        methods: {
            toggleLayout() {
                const element = this;
                let w = window;
                let body = document.querySelector('body');
                let layout_class = body.getAttribute('class') || '';
                let layout_classes = layout_class.trim().length > 0 ? layout_class.split(' ') : [];

                let now_layout_class = '';
                if (layout_classes.length > 0) {
                    layout_classes.forEach((item) => {
                        if (item.indexOf('layout-') !== -1) {
                            now_layout_class = item;
                        }
                    });
                }

                if (w.outerWidth <= 1024) {
                    if (body.classList.contains('sidebar-mini')) {
                        this.toggleSidebarMini(false);
                        $('.main-sidebar').niceScroll(this.sidebar_nicescroll_opts);
                        this.sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
                    }

                    body.classList.add('sidebar-gone');
                    body.classList.remove('layout-2', 'layout-3', 'sidebar-mini', 'sidebar-show');
                    body.removeEventListener('click', this.handleBodyClick);
                    body.addEventListener('click', this.handleBodyClick);

                    this.updateSidebarNiceScroll();

                    if (now_layout_class === 'layout-3') {
                        let nav_second_classes = document.querySelector('.navbar-secondary').getAttribute('class');
                        let nav_second = document.querySelector('.navbar-secondary');

                        nav_second.setAttribute('data-nav-classes', nav_second_classes);
                        nav_second.removeAttribute('class');
                        nav_second.classList.add('main-sidebar');

                        let main_sidebar = document.querySelector('.main-sidebar');
                        main_sidebar.querySelector('.container').classList.add('sidebar-wrapper');
                        main_sidebar.querySelector('.container').classList.remove('container');
                        main_sidebar.querySelector('.navbar-nav').classList.add('sidebar-menu');
                        main_sidebar.querySelector('.navbar-nav').classList.remove('navbar-nav');
                        main_sidebar.querySelector('.sidebar-menu .nav-item.dropdown.show a').click();
                        main_sidebar.querySelector('.sidebar-brand').remove();
                        let sidebarBrand = document.createElement('div');
                        sidebarBrand.classList.add('sidebar-brand');
                        sidebarBrand.innerHTML = `<a href="${document.querySelector('.navbar-brand').getAttribute('href')}">${document.querySelector('.navbar-brand').innerHTML}</a>`;
                        main_sidebar.insertBefore(sidebarBrand, main_sidebar.querySelector('.sidebar-menu'));
                        setTimeout(function () {
                            this.sidebar_nicescroll = main_sidebar.niceScroll(this.sidebar_nicescroll_opts)
                            this.sidebar_nicescroll = main_sidebar.getNiceScroll()
                        }, 700);

                        this.sidebar_dropdown()

                        document.querySelector('.main-wrapper').classList.remove('container');
                    }
                } else {
                    body.classList.remove('sidebar-gone', 'sidebar-show');
                    if (now_layout_class) {
                        body.classList.add(now_layout_class);
                    }

                    let nav_second_classes = document.querySelector('.main-sidebar').getAttribute('data-nav-classes');
                    let nav_second = document.querySelector('.main-sidebar');

                    if (now_layout_class === 'layout-3' && nav_second.classList.contains('main-sidebar')) {
                        nav_second.querySelectorAll('.sidebar-menu li a.has-dropdown').forEach((item) => {
                            item.removeEventListener('click', element.handleDropdownClick);
                        });
                        nav_second.querySelector('.sidebar-brand').remove();
                        nav_second.removeAttribute('class');
                        nav_second.classList.add(nav_second_classes);

                        let main_sidebar = document.querySelector('.navbar-secondary');
                        main_sidebar.querySelector('.sidebar-wrapper').classList.add('container');
                        main_sidebar.querySelector('.sidebar-wrapper').classList.remove('sidebar-wrapper');
                        main_sidebar.querySelector('.navbar-nav').classList.add('sidebar-menu');
                        main_sidebar.querySelector('.navbar-nav').classList.remove('navbar-nav');
                        main_sidebar.querySelector('.dropdown-menu').style.display = 'none';
                        main_sidebar.removeAttribute('style');
                        main_sidebar.removeAttribute('tabindex');
                        main_sidebar.removeAttribute('data-nav-classes');
                        document.querySelector('.main-wrapper').classList.add('container');
                        // if (sidebar_nicescroll != null)
                        //   sidebar_nicescroll.remove();
                    } else if (now_layout_class === 'layout-2') {
                        body.classList.add('layout-2');
                    } else {
                        this.updateSidebarNiceScroll();
                    }
                }
            },
            sidebarSticky() {
                if (document.querySelector('body').classList.contains('layout-2')) {
                    const sidebarWrapper = document.querySelector('body.layout-2 #sidebar-wrapper');
                    $(sidebarWrapper).stick_in_parent({ parent: $('body') });
                    $(sidebarWrapper).stick_in_parent({ recalc_every: 1 });
                }
            },
            sidebarDropdown() {
                const element = this;
                if (document.querySelector(".main-sidebar")) {
                    $(".main-sidebar").niceScroll(element.sidebar_nicescroll_opts);
                    element.sidebarNiceScroll = $(".main-sidebar").getNiceScroll();

                    $(document).find(".main-sidebar .sidebar-menu li a.has-dropdown").off("click").on("click", function() {
                        const me = $(this);
                        let active = false;
                        if (me.parent().hasClass("active")) {
                            active = true;
                        }

                        $(document).find('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideUp(500, () => {
                            element.updateSidebarNiceScroll();
                            return false;
                        });

                        $(document).find('.main-sidebar .sidebar-menu li.active').removeClass('active');

                        if (active == true) {
                            me.parent().removeClass('active');
                            me.parent().find('.dropdown-menu').slideUp(500, () => {
                                element.updateSidebarNiceScroll();
                                return false;
                            });
                        } else {
                            me.parent().addClass('active');
                            me.parent().find('.dropdown-menu').slideDown(500, () => {
                                element.updateSidebarNiceScroll();
                                return false;
                            });
                        }

                        return false;
                    });

                    $(document).find('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideDown(500, () => {
                        element.updateSidebarNiceScroll();
                        return false;
                    });
                }
            },
            handleBodyClick(e) {
                const element = this;
                if (e.target.classList.contains('sidebar-show') || e.target.classList.contains('search-show')) {
                    let body = document.querySelector('body');
                    body.classList.remove('sidebar-show');
                    body.classList.add('sidebar-gone');
                    body.classList.remove('search-show');

                    element.updateSidebarNiceScroll();
                }
            },
            updateSidebarNiceScroll() {
                const interval = setInterval(() => {
                    if (this.sidebarNiceScroll != null) {
                        this.sidebarNiceScroll.resize();
                    }
                }, 10);

                setTimeout(() => {
                    clearInterval(interval);
                }, 600);
            },
            toggleSidebarMini(mini) {
                let sidebar = this;
                let body = document.querySelector('body');
                let mainSidebar = document.querySelector('.main-sidebar');

                if (!mini) {
                    body.classList.remove('sidebar-mini');
                    mainSidebar.style.overflow = 'hidden';
                    setTimeout(function() {
                        $(".main-sidebar").niceScroll(this.sidebar_nicescroll_opts);
                        this.sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
                    }, 500);
                    document.querySelectorAll('.main-sidebar .sidebar-menu > li > ul .dropdown-title').forEach(element => {
                        element.remove();
                    });
                    document.querySelectorAll('.main-sidebar .sidebar-menu > li > a').forEach(element => {
                        element.removeAttribute('data-toggle');
                        element.removeAttribute('data-original-title');
                        element.removeAttribute('title');
                    });
                } else {
                    body.classList.add('sidebar-mini');
                    body.classList.remove('sidebar-show');
                    // this.sidebar_nicescroll.remove();
                    this.sidebar_nicescroll = null;
                    $(".main-sidebar .sidebar-menu > li").each(function() {
                        let me = $(this);

                        if(me.find('> .dropdown-menu').length) {
                            me.find('> .dropdown-menu').hide();
                            me.find('> .dropdown-menu').prepend('<li class="dropdown-title pt-3">'+ me.find('> a').text() +'</li>');
                        }else{
                            me.find('> a').attr('data-toggle', 'tooltip');
                            me.find('> a').attr('data-original-title', me.find('> a').text());
                            $("[data-toggle='tooltip']").tooltip({
                                placement: 'right'
                            });
                        }
                    });
                }
            },
            toggleSidebar() {
                let body = document.querySelector('body');
                let windowWidth = window.outerWidth;

                if (windowWidth <= 1024) {
                    body.classList.remove('search-show', 'search-gone');
                    if (body.classList.contains('sidebar-gone')) {
                        body.classList.remove('sidebar-gone');
                        body.classList.add('sidebar-show');
                    } else {
                        body.classList.add('sidebar-gone');
                        body.classList.remove('sidebar-show');
                    }

                    this.updateSidebarNiceScroll();
                } else {
                    body.classList.remove('search-show', 'search-gone');
                    if (body.classList.contains('sidebar-mini')) {
                        this.toggleSidebarMini(false);
                    } else {
                        this.toggleSidebarMini(true);
                    }
                }
            },
            // Add other functions here
        },
    };
</script>
