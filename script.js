let hero = document.querySelector('.hero');
let overlay = document.querySelector('.overlay'); let text = document.querySelector('.text'); let text1 = document.querySelector('.text1'); let text2 = document.querySelector('.text2'); let text3 = document.querySelector('.text3'); let tl = new TimelineMax({});

let newOne = document.querySelector('.new');
  
overlay.style.width = '0';
text.style.display = 'none';
counter = 0;


document.addEventListener('click', _=>{
    if (counter===0){
    tl
        .to(hero, 1, {x:'100%', width:'100%'}, 'another')
        .to(overlay, 1, {width:'100%'}, 'another')
        .to(hero, 0, {x:'-100%', backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url('nadeko.jpg')"}, 'some')
        .to(text, 0, {display:'block'}, 'some')
        .to(hero, 1, {x:'0%'},'slide')
        .to(overlay, 1, {width:0, right:0}, 'slide')
        .to(text, 1.5, {x:'24%', delay:0.1}, 'slide')
    }
    if (counter===1){
    tl
        .to(text1, 0.3, {y:'-100%', display:'none'} )
        .to(text2, 0.3, {display:'block', y:'0', delay:0.1})
    }
    if (counter===2){
    tl
        .to(text2, 0.3, {display:'none', y:'-100%'})
        .to(text3, 0.3, {display:'block', y:'0', delay:0.1})

    }
    if (counter===3){
    tl
    .to(text, 4, {display:'block', x:'-100%'}, 'steel')
    .to(hero, 2, {x:'-100%', width:'100%'}, 'steel')
    .to(overlay, 2, {width:'100%'},'steel')
    .to(overlay, 0.5, {width:0, left:0, delay:2}, 'steel')
    .to(newOne, 2, {display:'block', opacity: 1, delay:3}, 'steel')

    }
    counter++;
})

