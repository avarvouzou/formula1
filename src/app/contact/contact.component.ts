import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Formula1Service } from '../services/formula1.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isSubmitted = false;

  public Players: any = [];
  public ID: string;
  public contactForm: FormGroup;
  mes: string;


  constructor(
    public fb: FormBuilder,
    private formula1Service: Formula1Service ) {}


  changePlayer() {
   this.ID = this.contactForm.get('playerName').value
  }

  // Getter method to access formcontrols
  get playerName() {
    return this.contactForm.get('playerName');
  }


  submit() {
    console.log(this.ID)
    this.isSubmitted = true;
    if (this.ID = '') {
      console.log('ok')
    } else {
      console.log(this.ID)
      this.formula1Service.sendMessage(this.Players.driverId, this.mes).subscribe() //the message from textarea thatr will be connected to the form)
    }

  }

  ngOnInit() {

    this.contactForm = this.fb.group({
      playerName: ['', [Validators.required]],
      message: ''
    })

    this.formula1Service.getDrivers().subscribe((userResp) => {
      this.Players = userResp.MRData.DriverTable.Drivers.map(d => {
        return {
          driverId: d.driverId,
          givenName: d.givenName,
          familyName: d.familyName
        }
      })

    })


  }


}
