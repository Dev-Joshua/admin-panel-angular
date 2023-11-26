import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  form!: FormGroup;
  image$!: Observable<string>;
  categoryId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
      if (this.categoryId) {
        this.getCategory();
      }
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      image: ['', Validators.required],
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  save() {
    if (this.form.valid) {
      if (this.categoryId) {
        this.updateCategory();
      } else {
        this.createCategory();
        console.log(this.categoryId);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createCategory() {
    const data = this.form.value;
    this.categoriesService
      .createCategory({
        name: data.name,
        image: data.image,
      })
      .subscribe((newCategory) => {
        console.log(newCategory);
        this.router.navigate(['./admin/categories']);
      });
  }

  private getCategory() {
    this.categoriesService.getCategory(this.categoryId).subscribe((data) => {
      console.log(data);
      this.form.patchValue(data);
    });
  }

  private updateCategory() {
    const data = this.form.value;
    this.categoriesService
      .updateCategory(this.categoryId, data)
      .subscribe((rta) => {
        console.log(rta);
        this.router.navigate(['./admin/categories']);
      });
  }

  uploadFile(event: any) {
    const image = event.target.files[0];
    const name = 'category.png';
    const ref = this.storage.ref(name);
    const task = this.storage.upload(name, image);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = ref.getDownloadURL();
          this.image$.subscribe((url) => {
            console.log(url);
            this.imageField?.setValue(url);
          });
        })
      )
      .subscribe();
  }

  goToBack() {
    this.location.back();
  }
}
