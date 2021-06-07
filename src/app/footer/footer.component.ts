import { Component, OnInit } from '@angular/core';
import { userClass } from '../Models/user.model';
import { NewslettersubscriptionService } from '../Services/newslettersubscription.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private newsletterSub:NewslettersubscriptionService) { }

  users=new userClass('');

  ngOnInit(): void {
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
