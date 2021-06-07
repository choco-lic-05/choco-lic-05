import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'
import { userClass } from '../Models/user.model';
import { NewslettersubscriptionService } from '../Services/newslettersubscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{

  users=new userClass('');

  @ViewChild('tw1') typewriterElement1: ElementRef;
  @ViewChild('tw3') typewriterElement3: ElementRef;

  constructor(private newsletterSub:NewslettersubscriptionService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const target1 = this.typewriterElement1.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;

    const writer1 = new Typewriter(target1, {
      typeColor: 'white'
    })
    const writer3 = new Typewriter(target3, {
      typeColor: 'white'
    })

    writer1
    .type('We Sell ')
    .removeCursor()
    .then(writer1.start.bind(writer3))
    .start()

    writer3
      .removeCursor()
      .type("Fruits")
      .rest(1500)
      .clear()
      .type("Vegetables")
      .rest(1500)
      .clear()
      .type("Snacks")
      .rest(1500)
      .clear()
      .then(writer3.start.bind(writer1))
  }

  addNewLetterSubscription(){
    this.newsletterSub.addNewsLetterSubscription(this.users).subscribe(
      res=>{
      },
      err=>{
        console.log('err in adding email subscription',err)
      }
    )
  }

}
