import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  bgColor:string='grey'
  allUseres:any[]=[]
  num:any
  name:string=''
  gender:string=''
  photo:string=''
  address:string=''
  constructor(private activateRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {

    this.api.viewDetail().subscribe((data:any)=>{
      this.allUseres=data.users
      this.num=Math.floor((Math.random()*29)+1)

      this.name=this.allUseres[this.num].firstName
      this.gender=this.allUseres[this.num].gender
      this.photo=this.allUseres[this.num].image
      this.address=this.allUseres[this.num].address.address
      this.changeColor()
    })
    
  }

 reload(){window.location.reload()}

 changeColor(){
  this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  
}
}
