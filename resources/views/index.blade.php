<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my portfolio</title>
    <link rel="stylesheet" href="{{asset('/css/style.css')}}">
    <link rel="shortcut icon" href="{{asset('/images/logo-removebg-preview.png')}}" type="image/x-icon">
</head>
<body>
    <header id="head">
        <div class="logo-container">
            <img src="./images/logo-removebg-preview.png" alt="" class="logo">
        </div>
        <nav class="navbar">
            <ul class="navlist">
                <li class="tab">
                    <a href="#head" class="link">about me</a>
                </li>
                <li class="tab">
                    <a href="#contact" class="link">services</a>
                </li>
                <li class="tab">
                    <a href="#service" class="link">resume</a>
                </li>
                <li class="tab">
                    <a href="#vision" class="link">projects</a>
                </li>
                <li class="tab">
                    <a href="#vision" class="link">blog</a>
                </li>
                <li class="tab">
                    <a href="#vision" class="link">contact</a>
                </li>
            </ul>
        </nav>
        <div class="menu-list" id="menu-items">
            <div class="menu-list-login">
                 <img src="./images/1193.png" alt=""  id="close-sidebar" class="close-btn">
            </div>
         <ul class="list-items">
            <li><a href="#head">home</a></li>
             <li><a href="#contact">contact</a></li>
             <li><a href="#service">services</a></li>
             <li><a href="#vision">blog</a></li>
         </ul>
        </div>
        <div class="menu-container" id="menubar">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
        </div>
    </header>

    <section class="landpage">
        <div class="welcome-text-container">
            <h1 class="intro-header">
                i'm emmanuel nwamini <span class="a">a</span><span class="fullstack"> full stack</span>
                web developer
            </h1>
            <p class="intro-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias hic deserunt,
                ratione repellendus omnis. Ullam unde iste quibusdam.
                Consequuntur repellat pariatur quod quos voluptatem? Aut magnam eaque maiores hic!
            </p>
            <button class="cssbuttons-io-button"> hire me
                <div class="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
              </button>
        </div>
        <div class="img-container">
            <img src="./images/profile2.png" alt="" >
        </div>
    </section>
    <section class="about-section">
        <div class="profile-pix-container">
            <div class="picture-wrapper">
                <img src="./images/profile1.jpg" alt="" class="profile-pix">
            </div>
        </div>
        <div class="about-us-text">
            <h1>about me</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sapiente
                 facilis eaque quam pariatur molestiae modi aliquid voluptas. Facilis, eius nihil. Et
                 ratione maiores eos voluptatum soluta sequi reiciendis iusto?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt hic</p>
            <button class="button" style="vertical-align:middle"><span>Download cv</span></button>
        </div>
    </section>
    <section class="service-section">
        <div class="service-header">
            <h1>my services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero
                veniam fugit velit consectetur iste maiores, illo, eum atque,
                recusandae vel sunt possimus laborum inventore!</p>
        </div>
        <div class="service-card-container">
            <div class="top-card">
                <div class="card card1">
                    <div class="card-body1">
                        <div class="card-img-container">
                            <img src="./images/laptop.png" alt="" class="card-img">
                        </div>
                        <h2>web development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card card2">
                    <div class="card-body2">
                        <div class="card-img-container">
                            <img src="./images/images__5_-removebg-preview.png" alt="" class="card-img">
                        </div>
                        <h2>app development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div class="lower-card">
                <div class="card card3">
                    <div class="card-body3">
                        <div class="card-img-container">
                            <img src="./images/video.png" alt="" class="card-img">
                        </div>
                        <h2>video scribing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card card4">
                    <div class="card-body4">
                        <div class="card-img-container">
                            <img src="./images/lap.png" alt="" class="card-img">
                        </div>
                        <h2>web design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contact-section">
        <div class="top-btn">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <button class="button" style="vertical-align:middle"><span>get in touch</span></button>
        </div>
        <div class="price-card-container">
            <div class="prize-card prizecard1">
                <img src="./images/gold-medal-1321-removebg-preview.png" alt="" class="banner">
                <h1 class="prize">
                    <span class="small-text">bronze plan</span><br>
                    $150.00
                </h1>
                <ul class="prize-container">
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost of your site</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                </ul>
            </div>
            <div class="prize-card prizecard2">
                <img src="./images/silver-medal-1948-removebg-preview.png" alt="" class="banner">
                <h1 class="prize">
                    <span class="small-text">silver plan</span><br>
                    $200.00
                </h1>
                <ul class="prize-container">
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost of your site</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                </ul>
            </div>
            <div class="prize-card prizecard3">
                <img src="./images/gold.png" alt="" class="banner">
                <h1 class="prize">
                    <span class="small-text">gold plan</span><br>
                    $300.00
                </h1>
                <ul class="prize-container">
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost of your site</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                    <li class="prize-list">
                        <img src="./images/thick.png" alt="" class="thicked"> <a href="#">webhost</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <footer>
        <div class="foot1">
            <h2><span class="emmy">emmy</span>tect</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur neque excepturi debitis hic quasi labore amet
            </p>
            <div class="social-media-handle">
                <img src="./images/facebook.png" alt="" class="social-icon">
                <img src="./images/insta.png" alt="" class="social-icon">
                <img src="./images/whatsapp.png" alt="" class="social-icon">
                <img src="./images/git.png" alt="" class="social-icon">
                <img src="./images/mail.png" alt="" class="social-icon">
            </div>
        </div>
        <div class="foot1">
            <h2>contact me</h2>
            <li ><img src="./images/twitter.png" alt=""class="my-img"> <a href="#">@emmanula/twitter.com</a></li>
            <li ><img src="./images/instagram.png" alt=""class="my-img"> <a href="#">www.google.com</a></li>
            <li ><img src="./images/images__4_-removebg-preview.png" alt=""class="my-img"> <a href="#">+234 7042244539</a></li>
        </div>
        <div class="foot1">
            <h2>newsletter</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur neque excepturi debitis hic quasi labore amet
            </p>
            <input type="email" name="" id="" placeholder="enter your email" class="input">
        </div>
    </footer>
    <script src="{{asset('/js/app.js')}}"></script>
</body>
</html>
