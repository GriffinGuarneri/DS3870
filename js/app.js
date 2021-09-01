$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decTotalHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decTotalHours * decRate);
});
