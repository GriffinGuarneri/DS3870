var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getProfileDatailsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result) {
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
        if(person.FirstName != 'John'){
            let strHTML = '<div class="card col-12 mt-5 ml-3">';
            strHTML += '<div class="Container">';
            strHTML += '<div class="ProfileImage">';
            strHTML += '<img src="' + person.Image + '" alt="Profile Image" style="max-width:100%; margin:auto; border-radius:50%;">';
            strHTML += '</div>';
            strHTML += '<div class="Text">';
            strHTML += '<h3 class="ml-2">' + person.FirstName + ' ' + person.LastName + '</h3>';
            strHTML += '<h4 class="ml-2 mt-2">CodeName: ' + person.CodeName + '</h4>';
            strHTML += '<h4 class="ml-2 mt-2">Billing Agency: ' + person.Agency + '</h4>';
            strHTML += '<h4 class="ml-2">Position: ' + person.Job + '</h4>';
            strHTML += '<h4 class="ml-2">Hire Date: ' + person.HireDate + '</h4>';
            strHTML += '</div>';
            strHTML += '</div>';
            strHTML += '<button class="btn btn-primary mt-3 mb-3 btn-block btnToggleContactDetails">Toggle Contact Details</button>';
            strHTML += '</div>';
            strHTML += '<div class="card bg-secondary col-12 mt-2 ml-3" id="divContactInfo">';
            strHTML += '<h4 class="ml-2 mt-2">Email: <a href="mailto:' + person.Email + '" style="color:white">' + person.Email + '</a></h4>';
            strHTML += '<h4 class="ml-2">Phone: ' + person.Phone + '</h4>';
            strHTML += '<h4 class="ml-2 mt-2">Street Address: ' + person.Street1 + '</h4>';
            strHTML += '<h4 class="ml-2">City: ' + person.City + '</h4>';
            strHTML += '<h4 class="ml-2">State: ' + person.State + '</h4>';
            strHTML += '<h4 class="ml-2">ZIP Code: ' + person.ZIP + '</h4>';
            strHTML += '<h4 class="ml-2 mt-2">Emergency Contact: ' + person.EContact + '</h4>';
            strHTML += '<h4 class="ml-2">Phone: ' + person.EContactNumber + '</h4>';
            strHTML += '</div>';
            $('#divEmployeeCards').append(strHTML);
        }
    });
}

$(document).on('click', '.btnToggleContactDetails', function() {
    $('#divContactInfo').toggle();
})

var arrEmployees2;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result2) {
    console.log(result2);
    arrEmployees2 = result2;
    buildEmployeeTable();
})


function calculateTotalPay() {

}


function buildEmployeeTable() {
    $.each(arrEmployees2,function(j,person2){
        if(person2.Month != 'Seven'){
            $('#tblEmployees tbody').append('<tr><td>' + person2.Month + '</td><td>' + person2.Year + '</td><td>' + person2.Sales + '</td><td>' + person2.Hours + '</td><td>' + person2.Rate + '</td><td>' + person2.CommissionRate + '</td><td>' + ((person2.Hours * person2.Rate) + (person2.Sales * person2.CommissionRate)) + '</td></tr>');
        }
    });
    $('#tblEmployees').DataTable();
}