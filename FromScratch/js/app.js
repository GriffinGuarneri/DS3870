$(document).on('click', '#btnCalculatePay', function(){
    let decPayRate = $('#spanHourlyRate').text();
    let decHours = $('#txtHours').val();
    let decTotalPay = decPayRate * decHours;
    $('#spanTotalPay').text(decTotalPay);
})