<ul class="sidebar-menu">
    <div id="navigation">
        <nav-link :href="'/'"><i class="fas fa-fire"></i><span>Dashboard</span></nav-link>
        <nav-link :href="'/dashboard'"><i class="fas fa-fire"></i><span>Dashboard 1</span></nav-link>
        <multi-nav-link />
    </div>
    <li class="menu-header">Dashboard</li>
    <li class="nav-item dropdown">
        <a href="#" class="nav-link has-dropdown"><i class="fas fa-fire"></i><span>Dashboard</span></a>
        <ul class="dropdown-menu">
        <li><a class="nav-link" href="index-0.html">General Dashboard</a></li>
        <li><a class="nav-link" href="index.html">Ecommerce Dashboard</a></li>
        </ul>
    </li>
    <li class="menu-header">Starter</li>
</ul>
