import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product-services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.scss']
})
export class NewBusinessComponent implements OnInit {

  constructor(productService: ProductService) {
    console.log("NewBusinessComponent.constructor");
    productService.createNewBusiness().subscribe(response => {

      if (response) {
        console.log(response);
      }

    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Internal Server error.',
        text: error.error,
      })

    });
  }

  ngOnInit() {
    console.log("NewBusinessComponent.ngOnInit");

  }

}
