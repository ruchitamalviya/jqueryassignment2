jQuery(document).ready(function() {

    jQuery('#btn1').on('click', function(e) {
        e.preventDefault();
        let passLength = jQuery('#passlength').val(),
            charSet = '',
            randPass = '';

        if (jQuery('[name="symbol"]').is(':checked'))
            charSet += '@!~#$%^&*=?:;+*';

        if (jQuery('[name="number"]').is(':checked'))
            charSet += '0123456789';

        if (jQuery('[name="lowercase"]').is(':checked'))
            charSet += 'abcdefghijklmnopqrstuvwxyz';

        if (jQuery('[name="uppercase"]').is(':checked'))
            charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if (jQuery('[name="simillar"]').is(':checked'))
            charSet += 'iLoO0lAaxX';

        if (jQuery('[name="ambiguous"]').is(':checked'))
            charSet += '{[]},.:;"-<>/\/()';

        for (let i = 0; i < passLength; i++) {
            let randNum = Math.floor(Math.random() * charSet.length);
            randPass += charSet.substring(randNum, randNum + 1);
        }
        jQuery('[name=password]').val(randPass);
    });

    jQuery('#btn2').click(function(){
        var copyvalue= jQuery('#copy_text').val();
        jQuery('#copy_text').select();
        document.execCommand('Copy');
        return false;
     });
  
    function onClickCheckBox() {
        let checked1 = jQuery("#symbol").is(":checked");
        let checked2 = jQuery("#number").is(":checked");
        let checked3 = jQuery("#lowercase").is(":checked");
        let checked4 = jQuery("#uppercase").is(":checked");

        localStorage.setItem("checked1", checked1);
        localStorage.setItem("checked2", checked2);
        localStorage.setItem("checked3", checked3);
        localStorage.setItem("checked4", checked4);
    }

    function onReady() {

        let checked1 = "true" == localStorage.getItem("checked1");
        let checked2 = "true" == localStorage.getItem("checked2");
        let checked3 = "true" == localStorage.getItem("checked3");
        let checked4 = "true" == localStorage.getItem("checked4");

        jQuery("#symbol").prop('checked', checked1);
        jQuery("#number").prop('checked', checked2);
        jQuery("#lowercase").prop('checked', checked3);
        jQuery("#uppercase").prop('checked', checked4);

        jQuery("#symbol").click(onClickCheckBox);
        jQuery("#number").click(onClickCheckBox);
        jQuery("#lowercase").click(onClickCheckBox);
        jQuery("#uppercase").click(onClickCheckBox);

    }

   jQuery(document).ready(onReady);

});