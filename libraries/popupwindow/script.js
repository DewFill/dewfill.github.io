let popup = function () {
const popupWindowFlexBoxStyleAndWrap = "<div class='popupWindowFlexBox' style='position: fixed; margin: 0; padding: 0; box-sizing: border-box; width: 100vw; height: 100vh; left: 0; top: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-flow: column wrap; background-color: rgba(0,0,0,0.7);'></div>"
    function windowStyles(window) {
    $(window).css("display", "flex")
            .css("align-items", "center")
            .css("justify-content", "center")
            .css("flex-flow", "row wrap")
            .css("max-width", "90vw")
            .css("background-color", "rgb(255,255,255)")
            .css("padding", 0)
            .css("margin", 0)
            .css("box-sizing", "border-box")
            .css("border", "1px solid black")
            .css("border-radius",  "20px 50px 20px 50px")
        .css("overflow", "hidden")
    }
    function textStyle(text) {
        text.css("padding", "5px 15px")
            .css("font-size", "2em")
    }
    function buttonStyle(button) {
        button.css("padding", "10px 30px")
            .css("margin", "30px");
    }
    return {
        TwoButtons: function (window, eventButton, firstClickElem, firstClickElemFunc, secondClickElem, secondClickElemFunc, text) {

            //найти все элементы в DOC
            let _window = $(window);
            let _eventButton = $(window + " " + eventButton);
            let _firstButton = $(window + " " + firstClickElem);
            let _secondButton = $(window + " " + secondClickElem);
            let _text = $(window + " " + text);

            //изначальный атрибут style всех элементов
            let _windowStyle = _window.attr("style");
            let _resolveButtonStyle = _firstButton.attr("style");
            let _rejectButtonStyle = _secondButton.attr("style");
            let _textStyle = _text.attr("style");


            //спрятать все элементы кроме ивент кнопки
            _text.hide();
            _firstButton.hide();
            _secondButton.hide();

            //на клик ивент кнопки
            _eventButton.each((index, element) => {

                $(element).on("click", function () {
                    //добавление кнопки-привидения вместо ивент кнопки
                    _window.before(_eventButton.clone().addClass("popupWindowGhostEventButton"))

                    //wrap окна в div.popupWindowFlexBox и style popupWindowFlexBox
                    _window.wrap(popupWindowFlexBoxStyleAndWrap);

                    //новый style окна
                    windowStyles(_window);
                    //новый style кнопок
                    buttonStyle(_firstButton);
                    buttonStyle(_secondButton);

                    //новый style текста
                    textStyle(_text)
                    //обернуть текст в див
                    _text.wrap("<div style='width: 100%; text-align: start'><hr></div>");

                    //показать нужные кнопки
                    _eventButton.hide();
                    _text.show();
                    _firstButton.show();
                    _secondButton.show();


                    $(firstClickElem).on("click", () => {
                        _closeWindow();
                        firstClickElemFunc();
                        $(firstClickElem).off();
                        $(secondClickElem).off();
                    });

                    $(secondClickElem).on("click", () => {
                        _closeWindow();
                        secondClickElemFunc();
                        $(firstClickElem).off();
                        $(secondClickElem).off();
                    });

                });
            });


            function _closeWindow() {
                //удаление клона _eventButton
                $(".popupWindowGhostEventButton").remove()
                //применение изначальных атрибутов
                $(_window).removeAttr("style");
                $(_window).attr("style", _windowStyle);
                $(_firstButton).removeAttr("style");
                $(_firstButton).attr("style", _resolveButtonStyle);
                $(_secondButton).removeAttr("style");
                $(_secondButton).attr("style", _rejectButtonStyle);
                $(_text).removeAttr("style");
                $(_text).attr("style", _textStyle);

                //удаление обертки
                _text.unwrap();

                //скрытие ненужных кнопок
                _eventButton.show();
                _text.hide()
                _firstButton.hide();
                _secondButton.hide();

                //unwrap окна
                _window.unwrap("div");

                //неактивная кнопка Event
                _eventButton.attr("disabled");

            }
        },
        OneButton: function (window, eventButton, oneClickElem, oneClickElemFunc, text) {
            //найти все элементы в DOC
            let _window = $(window);
            let _eventButton = $(window + " " + eventButton);
            let _oneButton = $(window + " " + oneClickElem);
            let _text = $(window + " " + text);

            //изначальный атрибут style всех элементов
            let _windowStyle = _window.attr("style");
            let _resolveButtonStyle = _oneButton.attr("style");
            let _textStyle = _text.attr("style");


            //спрятать все элементы кроме ивент кнопки
            _text.hide();
            _oneButton.hide();
            //на клик ивент кнопки
            _eventButton.each((index, element) => {

                $(element).on("click", function () {

                    //добавление кнопки-привидения вместо ивент кнопки
                    _window.before(_eventButton.clone().addClass("popupWindowGhostEventButton"))

                    //wrap окна в div.popupWindowFlexBox и style popupWindowFlexBox
                    _window.wrap(popupWindowFlexBoxStyleAndWrap);

                    //новый style окна
                    windowStyles(_window);
                    //новый style кнопок
                    buttonStyle(_oneButton);

                    //новый style текста
                    textStyle(_text)
                    //обернуть текст в див
                    _text.wrap("<div style='width: 100%; text-align: start'><hr></div>");

                    //показать нужные кнопки
                    _eventButton.hide();
                    _text.show();
                    _oneButton.show();

                    $(oneClickElem).on("click", () => {
                        _closeWindow();
                        oneClickElemFunc();
                        $(oneClickElem).off();
                    });
                });
            });


            function _closeWindow() {
                //удаление клона _eventButton
                $(".popupWindowGhostEventButton").remove()
                //применение изначальных атрибутов
                $(_window).removeAttr("style");
                $(_window).attr("style", _windowStyle);
                $(_oneButton).removeAttr("style");
                $(_oneButton).attr("style", _resolveButtonStyle);
                $(_text).removeAttr("style");
                $(_text).attr("style", _textStyle);

                //удаление обертки
                _text.unwrap();

                //скрытие ненужных кнопок
                _eventButton.show();
                _text.hide()
                _oneButton.hide();

                //unwrap окна
                _window.unwrap("div");

                //неактивная кнопка Event
                _eventButton.attr("disabled");

            }
        },
        Input: function (window, eventButton, submitClickElem, onsubmitClickFunc, inputElem, text) {
            //найти все элементы в DOC
            let _window = $(window);
            let _eventButton = $(window + " " + eventButton);
            let _submitButton = $(window + " " + submitClickElem);
            let _input = $(window + " " + inputElem);
            let _text = $(window + " " + text);

            //изначальный атрибут style всех элементов
            let _windowStyle = _window.attr("style");
            let _submitButtonStyle = _submitButton.attr("style");
            let _textStyle = _text.attr("style");
            let _eventButtonStyle = _eventButton.attr("style");


            //спрятать все элементы кроме ивент кнопки
            _text.hide();
            _input.hide()
            _submitButton.hide();
            //на клик ивент кнопки
            _eventButton.each((index, element) => {

                $(element).on("click", function () {

                    //добавление кнопки-привидения вместо ивент кнопки
                    _window.before(_eventButton.clone().addClass("popupWindowGhostEventButton").attr("style", _eventButtonStyle));

                    //wrap окна в div.popupWindowFlexBox и style popupWindowFlexBox
                    _window.wrap(popupWindowFlexBoxStyleAndWrap);

                    //новый style окна
                    windowStyles(_window);

                    //новый style кнопок
                    buttonStyle(_submitButton);

                    //новый style текста
                    textStyle(_text)
                    //обернуть текст в див
                    _text.wrap("<div class='div-text-box' style='width: 100%; text-align: start'></div><hr>");

                    //обернуть input в див
                    //_input.wrap("<div style='width: 100%; margin-top: 15px; text-align: center'></div>");

                    //показать нужные кнопки
                    _eventButton.hide();
                    _text.show();
                    _input.show();
                    _submitButton.show();


                    $(submitClickElem).on("click", () => {
                        _closeWindow();
                        onsubmitClickFunc();
                        $(submitClickElem).off();
                    });


                });
            });

            function _closeWindow() {
                //удаление клона _eventButton
                $(".popupWindowGhostEventButton").remove()
                //применение изначальных атрибутов
                $(_window).removeAttr("style");
                $(_window).attr("style", _windowStyle);
                $(_submitButton).removeAttr("style");
                $(_submitButton).attr("style", _submitButtonStyle);
                $(_text).removeAttr("style");
                $(_text).attr("style", _textStyle);

                //удаление обертки
                //_text.unwrap();

                //скрытие ненужных кнопок
                _eventButton.show();
                _text.hide();
                _input.hide();
                _submitButton.hide();

                //unwrap окна
                _window.unwrap();
                _text.unwrap(".div-text-box");

                //_input.unwrap();

                //неактивная кнопка Event
                //_eventButton.attr("disabled");

            }
        },
    }
}