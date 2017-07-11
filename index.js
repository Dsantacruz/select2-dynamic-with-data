$(document).ready(function () {

    $('select').select2();

    $('#add-row').on('click', function () {

        var $pattern = $('.pattern');

        var $to_clone = $pattern.find('.box:last');

        console.log($to_clone);

        $to_clone.find('select').select2('destroy');

        var $clone = $to_clone.clone();

        $pattern.append($clone);

        $to_clone.find('select').select2();

        $clone.find('select').select2();
    });

});