const FOCUSABLE_SELECTORS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    const openModalBtn = document.querySelector('.open-modal');
    const openModalBtn1 = document.querySelector('.open-modal1');
    const closeModalBtn = document.querySelector('.close-modal');
    const backBtn = document.querySelector('.back-modal');
    const modal = document.querySelector('.modal');
    const modal1 = document.querySelector('.modal1');
    const main = document.querySelector('main');

    const logopenModalBtn = document.querySelector('.log-open-modal');
    const logcloseModalBtn = document.querySelector('.logclose-modal');
    const logmodal = document.querySelector('.logmodal');
    const logopenModalBtn1 = document.querySelector('.logopen-modal1');
    const logmodal1 = document.querySelector('.logmodal1');
    const logcloseModalBtn1 = document.querySelector('.logclose-modal1');
    const logopenModalBtn2 = document.querySelector('.logopen-modal2');
    const logmodal2 = document.querySelector('.logmodal2');
    const logbackBtn = document.querySelector('.logback-modal');
    const logopenModalBtn3 = document.querySelector('.logopen-modal3');
    const logmodal3 = document.querySelector('.logmodal3');

    const hModalBtn = document.querySelector('.h-modal');
    const hm = document.querySelector('.hm');
    const hbackBtn = document.querySelector('.hback-modal');
    const hopenModalBtn1 = document.querySelector('.hopen-modal1');
    const hopenModalBtn2 = document.querySelector('.hopen-modal2');
    const hmodal1= document.querySelector('.hmodal1');
    const hmodal2= document.querySelector('.hmodal2');
    const hcloseModalBtn = document.querySelector('.hclose-modal');
    const hcloseModalBtn1 = document.querySelector('.hclose-modal1');
    const hbackBtn1 = document.querySelector('.hback-modal1');

    const searchBtn = document.querySelector('.search-button');
    const searchm = document.querySelector('.searchm');
    const searchc = document.querySelector('.searchclose-modal');
    function openModal() {
    // show the modal
        modal.style.display = 'flex';
    }
    function openModal1() {
    // show the modal
        modal.style.display = 'none';
        modal1.style.display = 'flex';
    }
    function closeModal() {
        modal.style.display = 'none';
    }
    function backModal() {
        modal1.style.display = 'none';
        modal.style.display = 'flex';
    }

    function logopenModal() {
    // show the modal
        logmodal.style.display = 'flex';
    }
    function logcloseModal() {
        logmodal.style.display = 'none';
    }
    function logcloseModal1() {
        logmodal1.style.display = 'none';
    }
    function logopenModal1() {
    // show the modal
        logmodal.style.display = 'none';
        logmodal1.style.display = 'flex';
    }
    function logopenModal2() {
    // show the modal
        logmodal1.style.display = 'none';
        logmodal2.style.display = 'flex';
    }
    function logopenModal3() {
    // show the modal
        logmodal2.style.display = 'none';
        logmodal3.style.display = 'flex';
        setInterval(function(){ logmodal3.style.display = 'none'; }, 2000);
        logmodal.style.display = 'flex';
    }
    function logbackModal() {
        logmodal2.style.display = 'none';
        logmodal1.style.display = 'flex';
    }
/*$(window).off('scroll');*/
    function hModal() {
        hm.style.display = 'flex';
        var current = $(window).scrollTop();
        $(window).scroll(function(event) {
            $(window).scrollTop(current);
        });
    }
    function hbackModal() {
        hm.style.display = 'none';
        $(window).off('scroll');
    }
    function hbackModal1() {
        hmodal2.style.display = 'none';
        hmodal1.style.display = 'flex';
    }
    function hcloseModal1() {
        hmodal2.style.display = 'none';
        $(window).off('scroll');
    }
    function hopenModal1() {
    // show the modal
        hm.style.display = 'none';
        hmodal1.style.display = 'flex';
    }
    function hopenModal2() {
    // show the modal
        hmodal1.style.display = 'none';
        hmodal2.style.display = 'flex';
    }
    function hcloseModal() {
        hmodal1.style.display = 'none';
        $(window).off('scroll');
    }

    function searchmodal() {
        searchm.style.display = 'flex';
    }
    function searchc1() {
        searchm.style.display = 'none';
    }
    backBtn.addEventListener('click', backModal);
    openModalBtn.addEventListener('click', openModal);
    openModalBtn1.addEventListener('click', openModal1);
    closeModalBtn.addEventListener('click', closeModal);

    logopenModalBtn.addEventListener('click', logopenModal);
    logcloseModalBtn.addEventListener('click', logcloseModal);
    logcloseModalBtn1.addEventListener('click', logcloseModal1);
    logopenModalBtn1.addEventListener('click', logopenModal1);
    logopenModalBtn2.addEventListener('click', logopenModal2);
    logopenModalBtn3.addEventListener('click', logopenModal3);
    logbackBtn.addEventListener('click', logbackModal);

    hModalBtn.addEventListener('click', hModal);
    hbackBtn.addEventListener('click', hbackModal);
    hbackBtn1.addEventListener('click', hbackModal1);
    hopenModalBtn1.addEventListener('click', hopenModal1);
    hopenModalBtn2.addEventListener('click', hopenModal2);
    hcloseModalBtn.addEventListener('click', hcloseModal);
    hcloseModalBtn1.addEventListener('click', hcloseModal1);
    searchBtn.addEventListener('click', searchmodal);
    searchc.addEventListener('click', searchc1);
	
