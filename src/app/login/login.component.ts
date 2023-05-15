import { Component ,OnInit} from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
data="Your Perfect Banking Partner"
placeHolderData="enter account number"
uname:any
psw:any

constructor(private ds:DataService){}
ngOnInit(): void {
    
}
login(){
  
  
  // alert("login clicked")
  console.log(this.uname,this.psw);
  
//  alert(this.ds.checkData())
 alert(`${this.ds.checkData()} ${this.ds.sdata}`)
}

}
