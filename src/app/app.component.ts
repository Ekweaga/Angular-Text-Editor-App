import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {  ElementRef, ViewChild } from "@angular/core"
import KeenSlider from "keen-slider"

import { MovellaService } from './movella.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'movella';
  appinput:any;
  payLoad:any;
  forminput:any;
  formvalue:any;
  latest:any;
  popular:any;
  ok:boolean = false;
  people: any;
  
  slider= [
    {
      image:"./assets/flash.jpeg"
    },{
      image:"./assets/avengers.png"
    },{
      image:"./assets/images.png"
    }
  ]
  images = this.slider.map((n) => n);
  slideConfig = 
  { "slidesToShow": 3,
  "slidesToScroll": 1,
  "dots": true,
  "infinite": true,
  "autoplay" : true,
  "autoplaySpeed" : 1000};
  
 constructor(private route:Router ,private dialogref:MatDialog, private movellaservice:MovellaService) { }
  
    ngOnInit(): void {
     
      
     }
    
   

}


