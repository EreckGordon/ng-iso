import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/take';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  
    constructor(private http: HttpClient) {}

    ngOnInit() {}

	helloWorld(){
		const headers = new HttpHeaders({'Content-Type': 'application/json'});
		const options = {
			headers, 
			withCredentials:true
		};
		const body = {
			hello: 'world'
		};
		const helloWorld = this.http.post('http://localhost:8000/api/data', body, options)
	    .take(1).subscribe(result => {
	    	console.log(result)
	    }, (error) => console.log(error));

	}  

}
