import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { DataService } from 'src/app/helper/apiService/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  email: String;
  password: String;
  requestHeader: any = new HttpHeaders();

  constructor(private router: Router, private data: DataService, public alertCtrl: AlertController) { 
    
  }

  ngOnInit() {
    
  }

}
