<div class="container-fluid header-top d-none d-xl-block">
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="header-top-col header-top-left">
                    <div class="line-menu-ul">
                        <ul>
                            <li><a href="about.php">About</a></li>
                            <li><a href="career-development.php">Career Development</a></li>
                            <li><a href="news.php">News</a></li>
                            <li><a href="events.php">Events</a></li>
                            <li><a href="careers.php">Careers</a></li>
                            <li><a href="blog.php">Blog</a></li>
                            <li><a href="contact-us.php">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="header-top-col header-top-right text-end">
                    <div class="line-menu-ul">
                        <ul>
                            <li><a class="admissions-link" href="admissions.php">Admissions 2025 <i class="bi bi-chevron-right"></i></a></li>
                            <li><a class="btn-header" href="script:void(0);">APPLY</a></li>
                            <li>
                                <a href="javascript:void(0);" id="search_toggle">
                                <i class="bi bi-search search-icon"></i>
                                <i class="bi bi-x close-icon d-none"></i>
                                </a>
                                <div class="desk-search">
                                    <div class="header-search">
                                        <?php include 'commons/search-form.php'; ?>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid header-bottom">
    <div class="container">
        <nav class="navbar navbar-expand-xl p-0" id="navbarMenu">
            <a class="navbar-brand" href="index.php"><img src="images/logo-white.svg"  alt="" loading="lazy" /></a> 
            <a class="search-mobile d-none" href="javascript:void(0);" id="search_toggle2">
                <i class="bi bi-search search-icon"></i>
                <i class="bi bi-x close-icon d-none"></i>                            
            </a> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerMenu">
            <i class="bi bi-list"></i>
            </button>
            <div class="navbar-collapse justify-content-end menu-header collapse" id="headerMenu">
                <div class="header-menu-fixd">
                    <ul>
                        <li class="active">
                            <a href="schools-and-centers.php">Schools & Centers</a>
                        </li> 
                         <li>
                            <a href="admissions.php"> Admissions</a> 
                        </li>
                        <li>
                            <a href="programs.php"> Programs</a> 
                        </li> 
                         <li class="sub-menu">
                            <a href="faculty-v1.php"> Faculty</a> 
                            <span class="toggle-icon submenu-toggle d-xl-none" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="bi bi-plus-lg"></i></span>
                            <div class="sub-menu-box dropdown-menu">
                                <ul>
                                    <li><a href="faculty-v1.php"> Faculty v1 </a> </li>
                                    <li><a href="faculty-v2.php"> Faculty v2 </a> </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="research.php"> Research</a> 
                        </li>
                           <li class="sub-menu">
                            <a href="campus-life.php"> Campus Life</a> 
                            <span class="toggle-icon submenu-toggle d-xl-none" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="bi bi-plus-lg"></i></span>
                            <div class="sub-menu-box dropdown-menu">
                                <ul>
                                    <li><a href="museum-v1.php"> Museum v1 </a> </li>
                                    <li><a href="museum-v2.php"> Museum v2 </a> </li>
                                    <li><a href="museum-v3.php"> Museum v3 </a> </li>
                                </ul>
                            </div>
                        </li> 
                    </ul>
                    <ul class="d-xl-none">
                        <li><a href="about.php">About</a></li>
                        <li><a href="career-development.php">Career Development</a></li>
                        <li><a href="news.php">News</a></li>
                        <li><a href="events.php">Events</a></li>
                        <li><a href="careers.php">Careers</a></li>
                        <li><a href="blog.php">Blog</a></li>
                        <li><a href="contact-us.php">Contact Us</a></li>
                        <li><a href="admissions.php">Admissions 2025</a></li>
                        <li><a href="script:void(0);">APPLY</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="responsive-search">
            <div class="header-search"><?php include 'commons/search-form.php'; ?></div>
        </div>
    </div>
</div>