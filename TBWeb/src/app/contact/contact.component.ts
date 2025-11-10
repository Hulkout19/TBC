import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
constructor(private http:HttpClient){

}

  onSubmit(data: {access_key: string, name: string, email: string, message: string, messageType:string})
  {
    data.messageType = "Contact";
    if(data.name == null || data.email == null || data.message == null || data.name.trim() == "" || data.email.trim() == "" || data.message.trim() == ""){
      alert("Please fill out all required fields before submitting.");
      return;
    }
    //sven
    data.access_key = "636fd68f-5b13-4f70-8411-9d769c20ebb2";
    console.log(data);
    this.http.post('https://api.web3forms.com/submit', data)
    .subscribe((res) =>{
      console.warn("result",res)
    });


  }
}

