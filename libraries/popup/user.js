popup()
    .twoButtons("#window1",
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
    .oneButton("#window2",
        ".ask",
        ".button",
        function () {
            alert("Скрипт при нажатии на 'ОК'")
        },
        ".text");


popup()
    .input("#window3",
        ".event",
        ".submit",
        function () {
            alert("Скрипт при нажатии на 'ОТПРАВИТЬ'")
        },
        ".input",
        ".text");