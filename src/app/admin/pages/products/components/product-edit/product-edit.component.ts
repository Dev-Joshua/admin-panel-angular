import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MyValidators } from 'src/app/utils/validators';
import { ProductsService } from 'src/app/services/products/products.service';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  form!: FormGroup;
  productId!: string;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
      this.productsService.getProduct(this.productId).subscribe((product) => {
        this.form.patchValue(product);
      });
    });
  }

  // getProduct() {
  //   this.productsService.getProduct(this.id).subscribe((data) => {
  //     console.log(data);
  //     this.form.patchValue(data);
  //   });
  // }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService
        .updateProduct(this.productId, product)
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      images: [Array<string>(), Validators.required],
      description: ['', [Validators.required]],
    });
  }

  uploadFile(event: any) {
    const files = [...event.target.files];
    files.forEach((item) => {
      const name = `${item.name}`;
      const fileRef = this.storage.ref(name);
      const task = this.storage.upload(name, item);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.image$ = fileRef.getDownloadURL();
            this.image$.subscribe((url) => {
              const fileList = this.imagesField?.value as string[];
              this.imagesField?.setValue([...fileList, url]);
            });
          })
        )
        .subscribe();
    });

    if (files) {
      this.imagesField?.setValue([] as string[]);
    }
  }

  get titleField() {
    return this.form.get('title');
  }
  get priceField() {
    return this.form.get('price');
  }
  get imagesField() {
    return this.form.get('images');
  }
}
