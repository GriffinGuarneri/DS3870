var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result) {
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
        if(person.FirstName != 'John'){
            let strHTML = '<div class="card col-3 mt-5 ml-3">';
            strHTML += '<img src="images/profile.png" alt="Profile Image" style="margin:auto; max-width:100%;"></img>';
            strHTML += '<h3 class="text-center">' + person.FirstName + ' ' + person.LastName + '</h3>';
            strHTML += '<h4 class="text-center">' + person.Title + '</h4>';
            strHTML += '<h4 class="mt-3">Contact Details</h4>';
            strHTML += '<p class="mt-0 mb-0">Phone Number: ' + person.HomePhone + '</p>';
            strHTML += '<p class="mt-0 mb-0">Email: <a href="mailto:' + person.Email + '">' + person.Email + '</a></p>';
            strHTML += '<h4 class="mt-3">Address</h4>';
            strHTML += '<p class="mt-0 mb-0">' + person.StreetAddress1 + '</p>';
            strHTML += '<p class="mt-0 mb-0">' + person.City + ', ' + person.State + '</p>';
            strHTML += '<h4 class="mt-3">Pay Details</h4>';
            strHTML += '<p class="mt-0 mb-0">Pay Rate: ' + person.HourlyWage + '</p>';
            strHTML += '<p class="mt-0 mb-0">Hours Worked: ' + person.Hours + '</p>';
            strHTML += '<p class="mt-0 mb-0">Tax Rate: ' + person.TaxRate + '</p>';
            strHTML += '<div class="form-group mt-3 mb-0">';
            strHTML += '<label class="mr-2">Goal Pay: </label>';
            strHTML += '<input class="txtHours">';
            strHTML += '</div>';
            strHTML += '<button class="btn btn-primary mt-3 mb-5 btn-block btnCalculateGoalPay">Find Hours for Goal</button>'
            $('#divEmployeeCards').append(strHTML);
            $('#tblEmployees tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td></tr>');
        }
    });
    $('#tblEmployees').DataTable();
}

$(document).on('click', '.btnCalculateGoalPay', function() {

})


$(document).on('click', '.btnSwitchViews', function() {
    $('#divEmployeeCards').slideUp();
    $('#divEmployeeTable').slideUp();
})