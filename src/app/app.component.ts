import {OnInit, Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    async ngOnInit() {
    return await axios.get('http://localhost:49452/api/getAll')
    .then(function (response) {
      var dataToFind=response.data;
      //this.dataToFind=dataToFind;
      console.log('response.data');
      //this.setDataToFind(this.dataToFind);
      console.log( dataToFind);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  filterSearch(filterSearch:any){
    console.log('filterSearch');
    console.log(filterSearch);
  }
}
