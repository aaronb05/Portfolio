


//math exercise

$("#Btn1").click(function () {
    //step 1
    var num1 = Number($("#mathnum1").val());
    var num2 = Number($("#mathnum2").val());
    var num3 = Number($("#mathnum3").val());
    var num4 = Number($("#mathnum4").val());
    var num5 = Number($("#mathnum5").val());
    //step 2
    var smallest = Math.min(num1, num2, num3, num4, num5);
    var largest = Math.max(num1, num2, num3, num4, num5);
    var sum = num1 + num2 + num3 + num4 + num5;
    var product = num1 * num2 * num3 * num4 * num5;
    var average = sum / 5;
    //step 3
    $("#smallest").text("The smallest number is :" + smallest);
    $("#largest").text("the largest number is :" + largest);
    $("#sum").text("the sum equals :" + sum);
    $("#product").text("the product equals :" + product);
    $("#average").text("the average equals :" + average);


});

//factorial

$("#btnFact").click(function () {
    //get user data
    var number = +$("#fact").val();

    //if statement
    if (number > 170) {
        alert("Please enter positive number less than 171");
        return;
    }

    //calculate
    for (var index = number - 1; index > 1; index--) {
        //factorial
        number *= index;
        //results

    }
    $("#output").text(number);

});

//palindrome

$("#btnPal").click(function () {
    //get the word
    var word = $("#palIn").val();
    //reverse word

    for (var i = word.length - 1, newword = ""; i >= 0; i--) {
        newword += word.substr(i, 1)

        if (word == newword) {
            $("#palOut").text(word + " reversed = " + newword + " therefore " + word + " is a Palindrome!");
        }
        else {
            //inform user
            $("#palOut").text(word + " is not a palindrome");
        }
    }
})

//FizzBuzz

$("#btnFB").click(function () {
    var num1 = +$("#fb1").val()
    var num2 = +$("#fb2").val()

    for (var counter = 1, output = []; counter <= 100; counter++) {
        if (counter % num1 == 0 && counter % num2 == 0) {
            output += 'FizzBuzz, ';
        }
        else if (counter % num1 == 0) {
            output += 'Fizz, ';
        }
        else if (counter % num2 == 0) {
            output += 'Buzz, ';
        }
        else {
            output += counter + ', ';
        }

    }
    //"<span class= 'fizz'>Fizz</span>"
    output = output.substr(0, output.length -2 )
    $("#fbOut").text(output);
})

//sum of all fears

$("#findK").click(function () {
    //get user data
    var num1 = +$("#saf1").val()
    var num2 = +$("#saf2").val()
    var num3 = +$("#saf3").val()
    var num4 = +$("#saf4").val()
    var num5 = +$("#saf5").val()
    var num6 = +$("#saf6").val()
    var k = +$("#userk").val()
    //find k
    let ktrue = false

    var kArray = [
        num1, num2, num3, num4, num5, num6
    ]

    search: {
            for (let i = 0; i <= kArray.length - 1; i++) {
                for (let y = i + 1; y <= kArray.length - 1; y++) {
                    if (kArray[i] + kArray[y] == k) {

                        ktrue = true
                        $("#returnK").html("<b>" + k + "</b> was found by adding array members " + "<span class='target'>" + kArray[i] +
                            "</span> and <span class='target'>" + kArray[y] + "!</span>");
                        break search;
                    }

                }
            }
            if (ktrue == false) {

                $("#returnK").text('K Has Not Been Found');
            }
    }
    //code button
    $("#code5").hide();

    $("#tcode5").click(function () {
        $("#code5").toggle();
        if ($(this).text() == "hide code") {
            $(this).text("show code");
        }
        else {
            $(this).text("hide code");
        }
    })


    
})
//code buttons
//code button
$("#code1").hide();

$("#tcode1").click(function () {
    $("#code1").toggle();
    if ($(this).text() == "hide code") {
        $(this).text("show code");
    }
    else {
        $(this).text("hide code");
    }
})

//code button
$("#code2").hide();

$("#tcode2").click(function () {
    $("#code2").toggle();
    if ($(this).text() == "hide code") {
        $(this).text("show code");
    }
    else {
        $(this).text("hide code");
    }
})

//code button
$("#code3").hide();

$("#tcode3").click(function () {
    $("#code3").toggle();
    if ($(this).text() == "hide code") {
        $(this).text("show code");
    }
    else {
        $(this).text("hide code");
    }
})

//code button
$("#code4").hide();

$("#tcode4").click(function () {
    $("#code4").toggle();
    if ($(this).text() == "hide code") {
        $(this).text("show code");
    }
    else {
        $(this).text("hide code");
    }
})

$("#code5").hide();

$("#tcode5").click(function () {
    $("#code5").toggle();
    if ($(this).text() == "hide code") {
        $(this).text("show code");
    }
    else {
        $(this).text("hide code");
    }
})

