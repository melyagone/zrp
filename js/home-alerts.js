(function($) {
    $('body').xmalert({ 
        x: 'right',
        y: 'bottom',
        xOffset: 30,
        yOffset: 30,
        alertSpacing: 40,
        fadeDelay: 0.3,
        autoClose: false,
        template: 'survey',
        // title: 'Alerts & Notifications',
        // paragraph: 'We added alerts & notifications to the template!.<br>Try our previewer and code generator and use them in your page!',
        title: 'Файли cookie',
        paragraph: 'Цей вебсайт використовує файли cookie для збору статистичної інформації з метою покращення зручності користування сайтом. Продовжуючи користуватися нашим сайтом, ви автоматично погоджуєтесь із використанням необхідних файлів cookie. Детальніше читайте у Політиці конфіденційності.',
        timestamp: '',
        imgSrc: 'images/dashboard/alert-logo.png',
        buttonSrc: [ "#" ],
        buttonText: '<span class="primary">Зрозуміло</span>',
    });
})(jQuery);