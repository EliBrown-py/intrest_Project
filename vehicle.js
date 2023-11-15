/** @format */

 // import {vechile} from "vehicle.js";

 const VechileNameInt = (index) => {
    $(".vehicle").eq(index).html(vehicles[index].Vehicle_Name + "<br>" 
    +vehicles[index].Year);
  };
  const showVehicleInfo = () => {
    cards();
    jQuery.each($(".box"), VechileNameInt);
    // Add an event handler for when the element of class "box" gets a click event
    $(".box").on("click", function () {
      let indexOfVehicle = $(".box").index(this);
      $(this).find("p.vehicle").text(
        vehicles[indexOfVehicle].Vehicle_Name + ": "
         + vehicles[indexOfVehicle].Price
      );
      $(".box").css("background-color", "");
      $(this).css("background-color", "red");
    });
    

    $(".box").on("mouseover", function () {
      let indexOfVehicle = $(".box").index(this);
      let featuresString = "Features: <br>";
      let featuresObject = vehicles[indexOfVehicle].Features;
      // Iterate over the properties of the Features object
      for (let feature in featuresObject) {
        featuresString += feature + ": " + featuresObject[feature] + "<br>";
      }
      $(this).find("p.vehicle").html(featuresString);
    });

    // Add a mouseout event
    $(".box").on("mouseout", function () {
      let indexOfVehicle = $(".box").index(this);
      // Reset the text to display the name and reset the red background color 
      $(".box").css("background-color", "");
      $(this).find("p.vehicle").html(vehicles[indexOfVehicle].Vehicle_Name + "<br>" 
      + vehicles[indexOfVehicle].Year);
    });
  };
  
  const cards = () => {
    let wrapperRef = $('.wrapper');
    vehicles.forEach((vehicle) => {
      let boxMarkup = ` <div class="box">
          <img class="vehicle_pic" src="./images/${vehicle.Vehicle_Name.toLowerCase()}.jpg" />
          <p class="vehicle"></p>
        </div>`;
      wrapperRef.append(boxMarkup);
    });
  }

  
  
  $(document).ready(showVehicleInfo);
  