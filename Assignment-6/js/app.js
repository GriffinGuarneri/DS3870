$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decTotalHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decTotalHours * decRate);
});
$('#cboEmployeeType').change(function() {
    if($('#cboEmployeeType').val() == 'FULL'){
        $('#divHours').slideUp();
        //$('#divHours').css('display','none');
    }else {
        $('#divHours').slideDown();
    }
})
