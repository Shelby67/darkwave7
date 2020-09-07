import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IForm } from 'src/app/products/product';
import { CrudServiceService } from 'src/app/shared/crud-service.service';
import { HttpClient } from '@angular/common/http';
declare function setDim(w,h): any;
export type EditorType = 'login' | 'signup';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit,OnChanges {

  constructor(public fb: FormBuilder, public crudService: CrudServiceService, public hc: HttpClient) { }
  productForm : FormGroup;
  editor: EditorType = 'signup';
  testData : any; 
  widd: number;
  htt: number;
  key: string; 
  inputtKey: string;

  get showLoginEditor() {
    return this.editor === 'login';
  }

  get showSignupEditor() {
    return this.editor === 'signup';
  }
 
  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  ngOnInit(): void {

  }
  ngOnChanges(): void {
    
  }
  HTML5playing(e){
    
    console.log("HTML5 video is playing",e);
  }
  insertVideoYT() {
    this.key = '';
    if(document.querySelector('.right-vid iframe'))
      document.querySelector('.right-vid iframe').remove();
    this.key = this.inputtKey;
    console.log(this.key);

    document.querySelector('.right-vid').innerHTML = `<iframe width="420" height="315"
src="https://www.youtube.com/embed/${this.key}">
</iframe>`;

    console.log('%cVideo inserted using YouTube ID' + this.key + '!!!', "font-size: 16px;color:red");
    this.widd = document.querySelector('.left-vid').clientWidth;
    this.htt = document.querySelector('.left-vid').clientHeight;
    console.log(this.widd, this.htt);
    setDim(this.widd, this.htt);

  } 
  insertVideoL(){
    if (document.querySelector('.right-vid iframe'))
      document.querySelector('.right-vid iframe').remove(); 
    console.log('%cVideo inserted using Launch!!!',"font-size: 16px;color:blue");
    this.widd = document.querySelector('.left-vid').clientWidth;
    this.htt = document.querySelector('.left-vid').clientHeight;
    console.log(this.widd, this.htt);
    setDim(this.widd, this.htt);

  }
  submitForm() {
    //this.crudService.create(this.productForm.value).subscribe(res => {
      console.log('Product created!')
      //this.router.navigateByUrl('/crud/home/'))

  }
}
