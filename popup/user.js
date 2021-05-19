popup()
    .TwoButtons("#window1",
        ".ask",
        ".accept",
        function (){
            alert("Скрипт при нажатии на 'ДА'")
        },
        ".deny",
        function (){
            alert("Скрипт при нажатии на 'НЕТ'")
        },
        ".text")


popup()
    .OneButton("#window2",
        ".ask",
        ".button",
        function () {
            alert("Скрипт при нажатии на 'ОК'")
        },
        ".text");


popup()
    .Input("#window3",
        ".event",
        ".submit",
        function () {
            alert("Скрипт при нажатии на 'ОТПРАВИТЬ'")
        },
        ".input",
        ".text");