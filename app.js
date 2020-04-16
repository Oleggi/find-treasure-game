$(document).ready(function(){
    var getRandomNumber = function (size) {
        return Math.floor(Math.random() * size);
    };
    
    var getDistance = function (event, target) {
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };
    
    var getDistanceHint = function (distance) {
        if (distance < 15) {
            return 'Обожжешься!';
            $('#distance').css('color', '#c70039');
        } else if (distance < 20) {
            return 'Очень гарячо!';
            $('#distance').css('color', '#dd2c00');
        } else if (distance < 40) {
            return 'Гарячо';
            $('#distance').css('color', '#ff5722');
        } else if (distance < 80) {
            return 'Тепло';
            $('#distance').css('color', '#fb7b6b');
        } else if (distance < 160) {
            return 'Холодно';
            $('#distance').css('color', '#77d8d8');
        }  else if (distance < 320) {
            return 'Очень холодно!';
            $('#distance').css('color', '#4cbbb9');
        }  else if (distance < 400) {
            return 'Очень-очень холодно!';
            $('#distance').css('color', '#0779e4');
        }  else {
            return 'Замерзнешь!!!';
            $('#distance').css('color', 'blue');
        }
    };
    
    var height = 640;
    var width = 640;
    var clicks = 26;
    
    var target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };

    $('#distance').text('Начните кликать по карте!');

    
        $('#map').click(function (event) {
            clicks--;

            var distance = getDistance(event, target);
            var distanceHint = getDistanceHint(distance);
            $('#distance').text(distanceHint);

            if (distance > 15) {
            $('#cross').css({'display': 'inline-block','top': (parseFloat(event.offsetY) - 16) + 'px', 'left': (parseFloat(event.offsetX) - 15) + 'px'});
            } else if (distance <= 13) {
                $('#cross').css('display','none');
                $('#treasure').css({'display': 'inline-block','top': (parseFloat(event.offsetY) - 16) + 'px', 'left': (parseFloat(event.offsetY) - 15) + 'px'});
            }

            if (distance < 15) {
                $('#distance').css('color', '#c70039');
            } else if (distance < 20) {
                $('#distance').css('color', '#dd2c00');
            } else if (distance < 40) {
                $('#distance').css('color', '#ff5722');
            } else if (distance < 80) {
                $('#distance').css('color', '#fb7b6b');
            } else if (distance < 160) {
                $('#distance').css('color', '#77d8d8');
            }  else if (distance < 320) {
                $('#distance').css('color', '#4cbbb9');
            }  else if (distance < 400) {
                $('#distance').css('color', '#0779e4');
            }  else {
                $('#distance').css('color', '#342ead');
            }

            $('#clicks').text('Кликов осталось - ' + clicks);
        
            if (distance <= 13) {
                $('#distance').text('Проздравляю, клад найден! Вы сделали ' + (25 - parseInt(clicks)) + ' кликов.');
        }   else if (clicks < 1 && distance > 13) {
            $('#distance').text('Вы проиграли...');
            $('#distance').css('color', '#dbdbdb');
            $('#clicks').css('display', 'none');
            $('#new-game').css('display', 'inline-block');
        }
            }
        );
    

            $("#game-refresh").click(function(){
                location.reload(true);
            });


            $("#new-game").click(function(){
                location.reload(true);
            });
      



});



