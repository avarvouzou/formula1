import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Formula1Service } from '../services/formula1.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isSubmitted = true;
  serverError = true;

  public Players: any = [];
  public ID: string;
  public contactForm: FormGroup;
  subscription: Subscription;

  constructor(
    public fb: FormBuilder,
    private formula1Service: Formula1Service ) {}

  ngOnInit() {

    this.contactForm = this.fb.group({
      playerID: '',
      subject: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required])
    })

    this.subscription = this.formula1Service.getDrivers().subscribe((userResp) => {
      this.Players = userResp.MRData.DriverTable.Drivers.map(d => {
        return {
          driverId: d.driverId,
          givenName: d.givenName,
          familyName: d.familyName
        }
      })

    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //optional we usually don't have memory leaks
  }

  changePlayer() {
    this.ID = this.contactForm.get('playerID').value
  }

   // Getter method to access formcontrols
  get playerName() {
    return this.contactForm.get('givenName');
  }

  submit() {
    console.log(this.ID)

    if (this.contactForm.invalid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
      this.formula1Service.sendMessage(this.ID, this.contactForm).subscribe(
        data => console.log('success', data),
        error => this.serverError = false //because we do a fake post with a url that does not work, unless we change it will be always false
      );
    }

  }

}
