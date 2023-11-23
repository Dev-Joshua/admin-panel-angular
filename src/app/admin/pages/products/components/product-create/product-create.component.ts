import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MyValidators } from 'src/app/utils/validators';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService
        .createProduct({
          title: product.title,
          description: product.description,
          images: [product.images],
          price: product.price,
          categoryId: product.categoryId,
        })
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
    }
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const title = 'image.png';
    const fileRef = this.storage.ref(title);
    const task = this.storage.upload(title, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            console.log(url);
            this.form.get('images')?.setValue(url);
          });
        })
      )
      .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      images: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }

  get titleField() {
    return this.form.get('title');
  }

  get imageField() {
    return this.form.get('image');
  }
}
