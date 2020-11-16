let shanpe = document.getElementById("shape");
let val = 1;
let id = 1;
let volume,
  aspectRatio,
  sPowdertype;

function roundcalc() {
  let thickn = document.getElementsByName('thickness')[0].value;
  let thickness = thickn;

  if (val == 1) {
    thickness = parseFloat(thickness) / 39.37;
  } else {
    thickness = thickness;
  }

  var s_dimension = document.getElementsByName('c_diameter')[0].value;
  if (s_dimension === undefined || s_dimension === null || s_dimension == "") {
    alert("Dimension is Required");
    s_dimension = 0;
  }

  var area = (3.14 * parseFloat(s_dimension) * parseFloat(s_dimension)) / 4;
  var area_of_wall = 3.14 * parseFloat(s_dimension) * parseFloat(thickness);

  var area_of_ration = parseFloat(area) / parseFloat(area_of_wall);

  var circle_area_res = parseFloat(area_of_ration).toFixed(2);
  console.log(circle_area_res);

  if (isNaN(circle_area_res) || circle_area_res == "") {
    circle_area_res = 0;
  }


  document.getElementsByName('arRatio')[0].value = circle_area_res;
  checkAreaRatio(circle_area_res);

  var diameter = s_dimension;
  var area = parseFloat((3.14 * diameter * diameter) / 4);
  var round_area = circle_area_res;


  if (val == 1) {
    volume = (parseFloat(diameter) * 39.37);
    volume = parseFloat((3.14 * volume * volume) / 4);
    volume = parseFloat(volume * thickn);
    aspectRatio = parseFloat(diameter) * 39.37;
    aspectRatio = parseFloat(aspectRatio / thickn);
    sPowdertype = parseFloat(diameter) * 39.37;
  } else {
    volume = parseFloat(area * thickn);
    aspectRatio = parseFloat(diameter / thickn);
    sPowdertype = parseFloat(diameter);
  }

  var round_power_type;
  if (parseFloat(sPowdertype) >= 9) {
    round_power_type = "Type III";
  } else if (parseFloat(sPowdertype) >= 7.5 && parseFloat(sPowdertype) < 9) {
    round_power_type = "Type IV";
  } else if (parseFloat(sPowdertype) >= 5 && parseFloat(sPowdertype) < 7.5) {
    round_power_type = "Type V";
  } else {
    round_power_type = "Type VI";
  }

  aspectRatio = "N/A";

  document.getElementsByName('aratio')[0].value = aspectRatio;
  document.getElementsByName('volume')[0].value = parseFloat(volume).toFixed(2);
  document.getElementsByName('ptype')[0].value = round_power_type;

}

function squarecalc() {
  let thickn = document.getElementsByName('thickness')[0].value;
  var thickness = thickn;

  if (val == 1) {
    thickness = parseFloat(thickness) / 39.37;
  } else {
    thickness = thickness;
  }

  var s_dimension = document.getElementsByName('s_dimention')[0].value;
  if (s_dimension === undefined || s_dimension === null || s_dimension == "") {
    alert("Dimension is Required");
    s_dimension = 0;
  }



  var area = (parseFloat(s_dimension) * parseFloat(s_dimension));
  var area_of_wall = (2 * parseFloat(thickness)) * (parseFloat(s_dimension) + parseFloat(s_dimension));

  var area_of_ration = parseFloat(area) / parseFloat(area_of_wall);

  var square_area_res = parseFloat(area_of_ration).toFixed(2);

  if (isNaN(square_area_res) || square_area_res == "") {
    square_area_res = 0;
  }

  document.getElementsByName('arRatio')[0].value = square_area_res;
  checkAreaRatio(square_area_res);



  var side = document.getElementsByName('s_dimention')[0].value;
  var area = side * side;

  if (val == 1) {
    volume = (parseFloat(side) * 39.37);
    volume = parseFloat(volume * volume * thickn);
    aspectRatio = parseFloat(side) * 39.37;
    aspectRatio = parseFloat(aspectRatio / thickn);
    sPowdertype = parseFloat(side) * 39.37;
  } else {
    volume = parseFloat(area * thickn);
    aspectRatio = parseFloat(side / thickn);
    sPowdertype = parseFloat(side);
  }

  if (parseFloat(sPowdertype) >= 9) {
    square_power_type = "Type III";
  } else if (parseFloat(sPowdertype) >= 7.5 && parseFloat(sPowdertype) < 9) {
    square_power_type = "Type IV";
  } else if (parseFloat(sPowdertype) >= 5 && parseFloat(sPowdertype) < 7.5) {
    square_power_type = "Type V";
  } else {
    square_power_type = "Type VI";
  }

  aspectRatio = "N/A";



  if (isNaN(volume)) {
    volume = 0;
  }

  document.getElementsByName('aratio')[0].value = aspectRatio;
  document.getElementsByName('volume')[0].value = parseFloat(volume).toFixed(2);
  document.getElementsByName('ptype')[0].value = square_power_type;



}

function rectcalc() {

  let thickn = document.getElementsByName('thickness')[0].value;
  var thickness = thickn;

  var length = document.getElementsByName('r_length')[0].value;
  var width = document.getElementsByName('r_width')[0].value;

  if (isNaN(length) || length == "") {
    length = 0;
  }

  if (isNaN(width) || width == "") {
    width = 0;
  }





  if (thickness != "") {
    thickness = thickness;
  } else {
    thickness = $('.rect_thickness').attr('value');
  }

  // check the type of beam
  if (val == 1) {
    thickness = parseFloat(thickness) / 39.37;
  } else {
    thickness = thickness;
  }


  var area = (parseFloat(length) * parseFloat(width));
  var area_of_wall = (2 * parseFloat(thickness)) * (parseFloat(length) + parseFloat(width));
  var area_of_ration = parseFloat(area) / parseFloat(area_of_wall);
  if (isNaN(area_of_ration) || area_of_ration == "") {
    area_of_ration = 0;
  }

  document.getElementsByName('arRatio')[0].value = parseFloat(area_of_ration).toFixed(2);
  checkAreaRatio(parseFloat(area_of_ration).toFixed(2));



  var rect_area = parseFloat(area_of_ration).toFixed(2);

  if (parseFloat(length) > parseFloat(width)) {

    strMinValue = parseFloat(width);

  } else {

    strMinValue = parseFloat(length);

  }
  if (val == 1) {

    volume = ((parseFloat(length) * 39.37) * (parseFloat(width) * 39.37));

    volume = volume * parseFloat(thickn);
    aspectRatio = parseFloat(strMinValue) * 39.37;

    aspectRatio = (parseFloat(aspectRatio) / parseFloat(thickn));

    sPowdertype = parseFloat(strMinValue) * 39.37;


  } else {

    volume = (parseFloat(width) * parseFloat(length));

    volume = parseFloat(volume) * parseFloat(thickn);

    aspectRatio = (parseFloat(strMinValue) / parseFloat(thickn));

    sPowdertype = parseFloat(strMinValue);

  }


  document.getElementsByName('aratio')[0].value = aspectRatio.toFixed(2)
  document.getElementsByName('volume')[0].value = parseFloat(volume).toFixed(2);


  var rect_power_type;
  if (parseFloat(sPowdertype) >= 9) {
    rect_power_type = "Type III";
  } else if (parseFloat(sPowdertype) >= 7.5 && parseFloat(sPowdertype) < 9) {
    rect_power_type = "Type IV";
  } else if (parseFloat(sPowdertype) >= 5 && parseFloat(sPowdertype) < 7.5) {
    rect_power_type = "Type V";
  } else {
    rect_power_type = "Type VI";
  }

  document.getElementsByName('ptype')[0].value = rect_power_type;

}

function hlfcalc() {
  let thickn = document.getElementsByName('thickness')[0].value;
  var thickness = thickn;

  var length = document.getElementsByName('hf_length')[0].value;
  var width = document.getElementsByName('hf_width')[0].value;


  if (val == 1) {
    thickness = parseFloat(thickness) / 39.37;
  } else {
    thickness = thickness;
  }


  var area = (((parseFloat(length) * parseFloat(width)) / 2) + ((2 * ((parseFloat(length) / 2) * parseFloat(parseFloat(width) / 2) / 2))));



  var c = ((parseFloat(length) / 2) * (parseFloat(length) / 2)) + ((parseFloat(width) / 2) * (parseFloat(width) / 2));



  var volume = ((2 * (parseFloat(length) / 2)) + parseFloat(width) + (2 * parseFloat(Math.sqrt(c)).toFixed(2))) * thickness;

  var area_ratio = parseFloat(area) / parseFloat(volume);



  if (parseFloat(length) > parseFloat(width)) {

    strMinValue = parseFloat(width);

  } else {

    strMinValue = parseFloat(length);

  }

  if (val == 1) {


    var area1 = (((parseFloat(length * 39.37) * parseFloat(width * 39.37)) / 2) + ((2 * ((parseFloat(length * 39.37) / 2) * parseFloat(parseFloat(width * 39.37) / 2) / 2))));

    volume = parseFloat(area1 * 39.37) * parseFloat(thickness);

    aspectRatio = parseFloat(strMinValue);
    aspectRatio = (parseFloat(aspectRatio) / parseFloat(thickness));

    sPowdertype = parseFloat(strMinValue) * 39.37;



  } else {

    volume = parseFloat(area) * parseFloat(thickness);

    aspectRatio = (parseFloat(strMinValue) / parseFloat(thickness));

    sPowdertype = parseFloat(strMinValue);
  }




  if (isNaN(volume)) {
    volume = 0;
  }
  if (isNaN(area_ratio)) {
    area_ratio = 0;
  }
  if (isNaN(aspectRatio)) {
    aspectRatio = 0;
  }


  document.getElementsByName('aratio')[0].value = aspectRatio.toFixed(2);
  document.getElementsByName('volume')[0].value = parseFloat(volume).toFixed(2);
  document.getElementsByName('arRatio')[0].value = area_ratio.toFixed(2);
  checkAreaRatio(area_ratio.toFixed(2));
  if (parseFloat(sPowdertype) >= 9) {
    half_power_type = "Type III";
  } else if (parseFloat(sPowdertype) >= 7.5 && parseFloat(sPowdertype) < 9) {
    half_power_type = "Type IV";
  } else if (parseFloat(sPowdertype) >= 5 && parseFloat(sPowdertype) < 7.5) {
    half_power_type = "Type V";
  } else {
    half_power_type = "Type VI";
  }


  document.getElementsByName('ptype')[0].value = half_power_type;



}

function otcalc() {
  let thickn = document.getElementsByName('thickness')[0].value;
  var thickness = thickn;

  var length = document.getElementsByName('ot_length')[0].value;
  var width = document.getElementsByName('ot_width')[0].value;

  if (val == 1) {
    thickness = parseFloat(thickness) / 39.37;
  } else {
    thickness = thickness;
  }


  var area = ((parseFloat(length) * parseFloat(width)) * (2 / 3) + ((2 * ((parseFloat(length) / 3) * (parseFloat(width) / 2)) / 2)));
  var C = ((parseFloat(length) / 3) * (parseFloat(length)) / 3) + ((parseFloat(width) / 2) * (parseFloat(width) / 2));
  var volume = ((2 * parseFloat(length) * (2 / 3)) + parseFloat(width) + (2 * Math.sqrt(C))) * thickness;


  var area_ratio = parseFloat(area) / parseFloat(volume);

  if (parseFloat(length) > parseFloat(width)) {

    strMinValue = parseFloat(width);

  } else {

    strMinValue = parseFloat(length);

  }
  if (val == 1) {


    var area_mm = ((parseFloat(length * 39.37) * parseFloat(width * 39.37)) * (2 / 3) + ((2 * ((parseFloat(length * 39.37) / 3) * (parseFloat(width * 39.37) / 2)) / 2)));

    volume = parseFloat(area_mm * 39.37) * parseFloat(thickness);
    aspectRatio = parseFloat(strMinValue);

    aspectRatio = (parseFloat(aspectRatio) / parseFloat(thickness));

    sPowdertype = parseFloat(strMinValue) * 39.37;


  } else {


    volume = parseFloat(area) * parseFloat(thickness);

    aspectRatio = (parseFloat(strMinValue) / parseFloat(thickness));

    sPowdertype = parseFloat(strMinValue);

  }


  if (isNaN(area)) {
    area = 0;
    area_ratio = 0;
  }

  if (isNaN(volume)) {
    volume = 0;
  }

  if (isNaN(aspectRatio)) {
    aspectRatio = 0;
  }

  if (isNaN(area_ratio)) {
    area_ratio = 0;
  }


  document.getElementsByName('aratio')[0].value = aspectRatio.toFixed(2);
  document.getElementsByName('volume')[0].value = parseFloat(volume).toFixed(2);
  document.getElementsByName('arRatio')[0].value = area_ratio.toFixed(2);
  checkAreaRatio(area_ratio.toFixed(2));



  if (parseFloat(sPowdertype) >= 9) {
    onethree_power_type = "Type III";
  } else if (parseFloat(sPowdertype) >= 7.5 && parseFloat(sPowdertype) < 9) {
    onethree_power_type = "Type IV";
  } else if (parseFloat(sPowdertype) >= 5 && parseFloat(sPowdertype) < 7.5) {
    onethree_power_type = "Type V";
  } else {
    onethree_power_type = "Type VI";
  }



  document.getElementsByName('ptype')[0].value = onethree_power_type;





}

const checkAreaRatio = (arRatio) => {
  console.log(document.getElementById('Advanced_Nano'))
  if (document.getElementsByName('arRatio')[0].value < 0.66 || arRatio < 0.66) {
    document.getElementById('Advanced_Nano').removeAttribute('hidden');
  } else {
    document.getElementById('Advanced_Nano').setAttribute('hidden', null);
    
  }
}




function round() {
  shape.innerHTML = `
  <h4>Selected Shape :</h4>
  <p>Round</p>
  <h4>Diameter :</h4>
  <input type="number" name="c_diameter" value="" placeholder="Diameter">
  <h4>Thickness :</h4>
  <input type="number" name="thickness" value="" placeholder="Thickness">
  `;
  id = 1;
}

function square() {
  shape.innerHTML = `
  <h4>Selected Shape :</h4>
  <p>Square</p>
  <h4>Specify Dimention :</h4>
  <input type="number" name="s_dimention" value="" placeholder="Dimention">
  <h4>Thickness :</h4>
  <input type="number" name="thickness" value="" placeholder="Thickness">
  `;
  id = 2;
}

function rect() {
  shape.innerHTML = `
  <h4>Selected Shape :</h4>
  <p>Rectangle</p>
  <h4>Length</h4>
  <input type="number" name="r_length" value="" placeholder="Length">
  <h4>width</h4>
  <input type="number" name="r_width" value="" placeholder="Width">
  <h4>Thickness :</h4>
  <input type="number" name="thickness" value="" placeholder="Thickness">
  `;
  id = 3;
}

function halfhb() {
  shape.innerHTML = `
  <h4>Selected Shape :</h4>
  <p>1/2 HB</p>
  <h4>Length</h4>
  <input type="number" name="hf_length" value="" placeholder="Length">
  <h4>width</h4>
  <input type="number" name="hf_width" value="" placeholder="Width">
  <h4>Thickness :</h4>
  <input type="number" name="thickness" value="" placeholder="Thickness">
  `;
  id = 4;
}

function othb() {
  shape.innerHTML = `
  <h4>Selected Shape :</h4>
  <p>1/3 HB</p>
  <h4>Length</h4>
  <input type="number" name="ot_length" value="" placeholder="Length">
  <h4>width</h4>
  <input type="number" name="ot_width" value="" placeholder="Width">
  <h4>Thickness :</h4>
  <input type="number" name="thickness" value="" placeholder="Thickness">
  `;
  id = 5;
}

function setUnit(n) {
  val = parseInt(n);
  if (val == 1) {
    document.getElementById('unit').innerHTML = `Selected Unit is  : MM`;
  } else {
    document.getElementById('unit').innerHTML = `Selected Unit is  : MILS`;
  }
}


function calc() {
  switch (id) {
    case 1:
      roundcalc();
      break;
    case 2:
      squarecalc();
      break;
    case 3:
      rectcalc();
      break;
    case 4:
      hlfcalc();
      break;
    case 5:
      otcalc();
      break;
  }
}

document.getElementsByClassName('btn-primary')[0].click();
setUnit(1)