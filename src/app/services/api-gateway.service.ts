import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  private baseUrl = "/mydev/mydemoresource";

  constructor(private http: HttpClient) { }

  apiPost(): void {

    console.log("apiC called");
    let body = {"base":4, "exponent":5};
    const headers = new HttpHeaders({
      "Content-Type": ["application/json", "text/plain"],
          });

    this.http.post<any>(this.baseUrl, body, {headers: headers}).subscribe(response=>{
      console.log("response: ", response);
    }, error => {
      console.log("my error: ", error);
    });
  }
}
/*
myHeaders.append("Content-Type", "application/json");
            // using built in JSON utility package turn object to string and store in a variable
            var raw = JSON.stringify({"base":base,"exponent":exponent});
            // create a JSON object with parameters for API call and store in a variable
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
       
            var path = ""
            fs.readFile("./output.txt", "utf8", (err,data) => {
                path = data;
            })
            // make API call with parameters and use promises to get response
            fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => alert(JSON.parse(result).body))
            .catch(error => console.log('error', error));
 */