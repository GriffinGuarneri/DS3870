using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace getVehicles
{
    public static class getVehicle
    {
        private class Brand
        { 
            public string Name { get; set; }
            public string StreetAddress { get; set; }
            public string City { get; set; }
            public string State { get; set; }
            public string ZIP { get; set; }
            public Brand(string strName, string strStreetAddress, string strCity, string strState, string strZIP)
            {
                Name = strName;
                StreetAddress = strStreetAddress;
                City = strCity;
                State = strState;
                ZIP = strZIP;
            }
        }
        private class Vehicle
        { 
            public Brand Make { get; set; }
            public string Model { get; set; }
            public int Year { get; set; }
            public double MPG { get; set; }
            public Vehicle(Brand brMake, string strModel, int inYear, double doMPG)
            {
                Make = brMake;
                Model = strModel;
                Year = inYear;
                MPG = doMPG;
            }

        }
        [FunctionName("getVehicle")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string strBrand = req.Query["Brand"];
            string strModel = req.Query["Model"];
            log.LogInformation("C# HTTP trigger function processed a request for: " + strModel);

            Brand Toyota = new Brand("Toyota", "111 Street St", "Nashville", "TN", "37011");
            Brand Ford = new Brand("Ford", "222 Avenue Ave", "Cookeville", "TN", "38501");
            Brand Volkswagen = new Brand("VolksWagen", "333 Road Rd", "Lebanon", "TN", "37076");

            Vehicle Prius = new Vehicle(Toyota, "Prius", 2009, 35);
            Vehicle Corolla = new Vehicle(Toyota, "Corolla", 2019, 30);
            Vehicle Taurus = new Vehicle(Ford, "Taurus", 2015, 25);
            Vehicle Focus = new Vehicle(Ford, "Focus", 2012, 25);
            Vehicle Jetta = new Vehicle(Volkswagen, "Jetta", 2020, 30);
            Vehicle Beetle = new Vehicle(Volkswagen, "Beetle", 2005, 20);

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);

            List<Vehicle> arrVehicles = new List<Vehicle>();

        }
    }
}
