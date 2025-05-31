document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('navbar');
    let footer = document.getElementById('footer');

    navbar.innerHTML = `
    <div class="logo-box">
        <a href="index.html">
            <img src="images/logo.jpg" alt="Лого" class="logo">
        </a>
        <div class="title-box">
            <h1 class="site-title"><b>Sparklean</b></h1>
            <p class="motto">Чистота с внимание към детайла</p>
        </div>
    </div>
    <ul>
        <li><a href="index.html">Начало</a></li>
        <li><a href="about-us.html">За нас</a></li>
        <li><a href="uslugi.html">Услуги</a></li>
        <li><a href="gallery.html">Галерия</a></li>
        <li><a href="contact.html">Контакти</a></li>
    </ul>
    `;

    footer.innerHTML = '<p>© Sparklean, 2025</p>'
    footer.innerHTML = `
    <div class="footer-links">
        <div class="footer-section">
            <h4>Навигация</h4>
            <a href="index.html">Начало</a>
            <a href="about-us.html">За нас</a>
            <a href="contact.html">Контакти</a>
        </div>
        <div class="footer-section">
            <h4>Последвай ни</h4>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://www.instagram.com/accounts/login/">Instagram</a>
            <a href="https://www.tiktok.com/login">TikTok</a>
        </div>
        <div class="footer-section">
            <h4>Партньори</h4>
            <a href="https://www.dyson.com/vacuum-cleaners" target="_blank" rel="noopener noreferrer">Dyson</a>
            <a href="https://www.philips.bg/c-m-ho/vacuum-cleaners-mops/vacuum-and-mop-robots?gad_source=1&gad_campaignid=20862536842&gbraid=0AAAAABxV4pL3HV85z8fw0w09aVrkwenJs&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rnWdBtv2mvy6a83m4Jn94kfovpGOD4cu_tNM8AEpXhDY-azYti6UtBoCEysQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">Philips</a>
            <a href="https://karchershop.bg/promoczionalni-predlozheniya-may?utm_source=google&utm_medium=pmax&gad_source=1&gad_campaignid=19926965697&gbraid=0AAAAACYZR0Aw_cMEKPyexcgq3orPJFwd4&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rh5qG-J6lzmVPMTjmfcRoE0f54LtJpEnMinE3583jI4z9vIAeLVULRoCxmQQAvD_BwE" target="_blank" rel="noopener noreferrer">Kärcher</a>
            <a href="https://us.pg.com/" target="_blank" rel="noopener noreferrer">Procter & Gamble</a>
        </div>
    </div>
    <p>&copy; Sparklean, 2025</p>
`
});
