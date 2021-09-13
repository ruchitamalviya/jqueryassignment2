jQuery(document).ready(function() {
    'use strict';
    jQuery('#btn1').on('click', function(e) {
        e.preventDefault();
        let passLength = $('select').val(),
            charset = '',
            randPass = '';

        if (jQuery('[name="symbol"]').is(':checked'))
            charset += '@!~#$%^&*=?:;+*';

        if (jQuery('[name="number"]').is(':checked'))
            charset += '0123456789';

        if (jQuery('[name="lowercase"]').is(':checked'))
            charset += 'abcdefghijklmnopqrstuvwxyz';

        if (jQuery('[name="upperrcase"]').is(':checked'))
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if (jQuery('[name="simillar"]').is(':checked'))
            charset += 'iLoO0lAaxX';

        if (jQuery('[name="ambiguous"]').is(':checked'))
            charset += '{[]},.:;"-<>/\/()';

        for (let i = 0; i < passLength; i++) {
            let randNum = Math.floor(Math.random() * charset.length);
            randPass += charset.substring(randNum, randNum + 1);
        }
        jQuery('[name=password]').val(randPass);
    });
    jQuery('#btn2').click(function(){
        jQuery('#text-field').select();
        document.execCommand('copy');

     });


    /*jQuery('#save').click(function(){
        var symbol=jQuery("#symbol").val();
        var number=jQuery("#number").val();
        var lowercase=jQuery("#lowercase").val();
        var uppercase=jQuery("#uppercase").val();
        var simillar=jQuery("#simillar").val();
        var ambiguous=jQuery("#ambiguous").val();
        Cookies.set('symbol',symbol);
        Cookies.set('number',number);
        Cookies.set('lowercase',lowercase);
        Cookies.set('uppercase',uppercase);
        Cookies.set('simillar',simillar);
        Cookies.set('ambiguous',ambiguous);
     });*/
});