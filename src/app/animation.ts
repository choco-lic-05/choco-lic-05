import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export let opacity = trigger('opacity', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate(1000)
    ])
])

export let popup = trigger('popup', [
    transition(':enter', [
        style({ transform: 'translateY(10px)', opacity: 0 }),
        animate(250)
    ]),
    transition(':leave', [
        animate(1000, keyframes([
            style({ transform: "rotateX(0deg)",
                    transformOrigin: "top",
                    opacity: 1,
                    offset:0 }),
            style({ transform: "rotateX(-100deg)",
                    transformOrigin: "top",
                    opacity: 0,
                    offset:1})
        ]))
    ])
])

export let slideleft = trigger('slideleft',[
    transition(':enter',[
        animate(750,keyframes([
            style({transform: "translateX(-300px)",
                   opacity: 0,
                    offset:0}),
           style({transform: "translateX(0px)",
                opacity: 1,
                offset:1})         
        ]))
    ])
])

export let slideright = trigger('slideright',[
    transition(':enter',[
        animate(750,keyframes([
            style({transform: "translateX(300px)",
                   opacity: 0,
                    offset:0}),
           style({transform: "translateX(0px)",
                opacity: 1,
                offset:1})         
        ]))
    ])
])

export let hinge = trigger('hinge',

      [transition(':leave',[
      animate(2000 , keyframes([
        style( { transform: "rotate(0)",
                 transformOrigin: "top left",
                 animationTimingFunction: "ease-in-out" ,
                 offset:0 } ),
        style( { transform: "rotate(50deg)",
                 transformOrigin: "top left",
                 animationTimingFunction: "ease-in-out",
                 offset:0.2 } ),
        style( { transform: "rotate(30deg)",
                  transformOrigin: "top left",
                  animationTimingFunction: "ease-in-out",
                  offset:0.4 } ),
        style( { transform: "rotate(50deg)",
                 transformOrigin: "top left",
                 animationTimingFunction: "ease-in-out",
                 offset:0.6 } ),
        style( { transform: "rotate(40deg) translateY(0)",
                  opacity: 1,
                  transformOrigin: "top left",
                  animationTimingFunction: "ease-in-out",
                  offset:0.8 } ),
        style( { transform: "translateY(700px)", opacity: 0 ,
                  offset:1} )
      ])) 
    ])
  ])