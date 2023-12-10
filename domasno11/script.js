console.log ('Chinese Zodiac');

let birthyear= parseInt(prompt('What year were you born?'));
let zodiac= (birthyear-4)%12;

if (zodiac==0){
    alert('Your chinese zodiac sign is a RAT')
}
else if (zodiac==1){
    alert('Your chinese zodiac sign is a OX' )
}
else if (zodiac==2){
    alert('Your chinese zodiac sign is a TIGER')
}
else if (zodiac==3){
    alert('Your chinese zodiac sign is a RABBIT')
}
else if (zodiac==4){
    alert('Your chinese zodiac sign is a DRAGON' )
}
else if (zodiac==5){
    alert('Your chinese zodiac sign is a SNAKE')
}
else if (zodiac==6){
    alert('Your chinese zodiac sign is a HORSE')
}
else if (zodiac==7){
    alert('Your chinese zodiac sign is a GOAT')
}
else if (zodiac==8){
    alert('Your chinese zodiac sign is a MONKEY')
}
else if (zodiac==9){
    alert('Your chinese zodiac sign is a ROOSTER' )
}
else if (zodiac==10){
    alert('Your chinese zodiac sign is a DOG')
}
else if (zodiac==11){
    alert('Your chinese zodiac sign is a PIG')
}
else {
    alert('Wrong answer')
}