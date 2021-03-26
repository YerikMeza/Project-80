var input= [];

function Paragrah_1() {
    var display_student_array = [];

    for (var j = 1; j <= 6; j++)
    {
        var name_of_students = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_students);
        input.push(name_of_students);
    }

    console.log(input);



    var remove_commas = input.join(". ");
    console.log(remove_commas)
    document.getElementById("Paragrah_1").innerHTML = remove_commas
}

function Paragrah_2() {
     input = [];

    for (var j = 7; j <= 12; j++)
    {
        var name_of_students = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_students);
        input.push(name_of_students);
    }

    console.log(input);



    var remove_commas = input.join(". ");
    console.log(remove_commas)
    document.getElementById("Paragrah_2").innerHTML = remove_commas
}