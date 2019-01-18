import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload} from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-rem-cards',
  templateUrl: './rem-cards.component.html',
  styleUrls: ['./rem-cards.component.css']
})
export class RemCardsComponent implements OnInit {

  credentialsID: TokenPayload={
    twitterID: ''
  }

  flipped = false;
 
  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit() {
  }
  flipIt() {
    this.flipped = !this.flipped;
  }

  submit(){
    this.auth.postTwitterID(this.credentialsID).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        console.error(err);
      }
    )
  }


}
