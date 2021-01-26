var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color; // 매개변수를 통해서 color 값 변경 가능
    //   i +=1;
    //   }
   $('a').css('color',color);
  }
}
var Body = { // Body라는 변수에 객체를 담음
  setColor:function(color){ //객체의 property로 setColor 지정
    //document.querySelector('body').style.color = color;
    $('body').css('color',color); // jQuery로 구현
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){ // nightDayHandler의 매개변수를 self로 하고, this->self로
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');

  } else{
    Body.setBackgroundColor('white');
    Body.setColor('black')
    self.value ='night';

    Links.setColor('blue');
  }
}
