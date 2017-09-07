import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-select/dist/css/bootstrap-select.min.css"

$(function () {
    $("#buttonOwn").on("click", function () {
        $('#myModal').modal('show');
    })


    $('#bselector').selectpicker({
        template: {
            caret: '<span class="glyphicon glyphicon-menu-down"></span>'
        },
        title: "please select",
        style: 'orangered'
    });
    $('#bselector').val('reli');
    $('#bselector').selectpicker('render'); //need call render, when programly change the current selection

    $('#bselector').on("changed.bs.select", function (event, clickedIndex) {
        alert($("#bselector").val());
    });

    $('#bselector').on("shown.bs.select", function (event, clickedIndex) {

        $('#bselector').parent().find(".bs-caret").html('<span class="glyphicon glyphicon-menu-up"></span>');
    });

    $('#bselector').on("hidden.bs.select", function (event, clickedIndex) {
        $('#bselector').parent().find(".bs-caret").html('<span class="glyphicon glyphicon-menu-down"></span>');
    });
})


