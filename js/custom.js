jQuery(document).ready(function() {
    let save = localStorage.getItem("save");
    if (save) {
        let symbol = localStorage.getItem("symbol");
        let number = localStorage.getItem("number");
        let loweCase = localStorage.getItem("loweCase");
        let upperCase = localStorage.getItem("upperCase");
        let simillar = localStorage.getItem("simillar");
        let ambiguous = localStorage.getItem("ambiguous");
        let save = localStorage.getItem("save");

        if (symbol == 'true') {
            jQuery("#symbol").attr('checked', true);
        } else {
            jQuery("#symbol").attr('checked', false);
        }
        if (number == 'true') {
            jQuery("#number").attr('checked', true);
        } else {
            jQuery("#number").attr('checked', false);
        }
        if (loweCase == 'true') {
            jQuery("#lowercase").attr('checked', true);
        } else {
            jQuery("#lowercase").attr('checked', false);
        }
        if (upperCase == 'true') {
            jQuery("#uppercase").attr('checked', true);
        } else {
            jQuery("#uppercase").attr('checked', false);
        }
        if (simillar == 'true') {
            jQuery("#simillar").attr('checked', true);
        } else {
            jQuery("#simillar").attr('checked', false);
        }
        if (ambiguous == 'true') {
            jQuery("#ambiguous").attr('checked', true);
        } else {
            jQuery("#ambiguous").attr('checked', false);
        }
        if (save == 'true') {
            jQuery("#save").attr('checked', true);
        } else {
            jQuery("#save").attr('checked', false);
        }
    }


    jQuery('#btn1').on('click', function(e) {
        e.preventDefault();
        let passLength = jQuery('#passlength').val(),
            charSet = '',
            randPass = '';
         
        if (jQuery('[name="symbol"]').is(':checked'))
            charSet += '{}[],.:;"`~ <>/\()@!-#$%^&=?+*';

        if (jQuery('[name="number"]').is(':checked'))
            charSet += '0123456789';

        if (jQuery('[name="lowercase"]').is(':checked'))
            charSet += 'abcdefghijklmnopqrstuvwxyz';

        if (jQuery('[name="uppercase"]').is(':checked'))
            charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if (jQuery('[name="simillar"]').is(':checked'))
            charSet += 'iLoO0lAaxX'.replace('iLoO0lAaxX', '');

        if (jQuery('[name="ambiguous"]').is(':checked'))
            charSet = charSet.substring(17);


        for (let i = 0; i < passLength; i++) {
            let randNum = Math.floor(Math.random() * charSet.length);
            randPass += charSet.substring(randNum, randNum + 1);

        }

        jQuery('[name=password]').val(randPass);

    });


    jQuery('#btn2').click(function() {
        var copyvalue = jQuery('#copy_text').val();
        jQuery('#copy_text').select();
        document.execCommand('Copy');
        return false;
    });


    jQuery("#save").change(function() {
        if (this.checked) {
            let symbol = jQuery("#symbol").is(":checked");
            let number = jQuery("#number").is(":checked");
            let loweCase = jQuery("#lowercase").is(":checked");
            let upperCase = jQuery("#uppercase").is(":checked");
            let simillar = jQuery("#simillar").is(":checked");
            let ambiguous = jQuery("#ambiguous").is(":checked");
            let save = jQuery("#save").is(":checked");
            localStorage.setItem("symbol", symbol);
            localStorage.setItem("number", number);
            localStorage.setItem("loweCase", loweCase);
            localStorage.setItem("upperCase", upperCase);
            localStorage.setItem("simillar", simillar);
            localStorage.setItem("ambiguous", ambiguous);
            localStorage.setItem("save", save);

        }
        if (this.checked == false) {
            localStorage.removeItem("symbol");
            localStorage.removeItem("number");
            localStorage.removeItem("loweCase");
            localStorage.removeItem("upperCase");
            localStorage.removeItem("simillar");
            localStorage.removeItem("ambiguous");
            localStorage.removeItem("save");
        }

    });
});