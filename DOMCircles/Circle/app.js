function createCircle(_selector,_radius, _backgroundColor){
    // Verilən parametrlərə əsasən dairə yaradan metod yazın
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.
    // Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq

    let circle = document.createElement('div');
    document.querySelector(`${_selector}`).parentElement(circle);
    circle.style.width='200px';
    circle.style.height='200px';
    circle.style.borderRadius=`${_radius}`;
    circle.style.backgroundColor=`${_backgroundColor}`;
}

createCircle('div', '50%', 'green');