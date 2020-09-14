import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('txtConfigFile') txtConfigFile: ElementRef;
  title: string = 'parse-name';
  result: {
    code: string;
    total: string;
    cost: string;
    length: string;
    width: string;
    description: string;
    isReady: boolean;
  } = {
    code: '',
    total: '',
    cost: '',
    length: '',
    width: '',
    description: '',
    isReady: false,
  };
  form = new FormGroup({
    name: new FormControl(''),
  });
  copyToCB() {
    if (this.txtConfigFile) {
      // Select textarea text
      this.txtConfigFile.nativeElement.select();

      // Copy to the clipboard
      document.execCommand('copy');

      // Deselect selected textarea
      this.txtConfigFile.nativeElement.setSelectionRange(0, 0);
    }
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    const temp = this.form.value.name.split(' ');
    const desctiption = this.form.value.name.split(' ');
    desctiption.splice(0, 1);
    desctiption.splice(desctiption.length - 1, 1);
    desctiption.splice(desctiption.length - 1, 1);
    desctiption.splice(desctiption.length - 1, 1);
    desctiption.splice(desctiption.length - 1, 1);
    this.result = {
      code: temp[0],
      cost: temp[temp.length - 2],
      total: temp[temp.length - 1],
      length: temp[temp.length - 3],
      width: temp[temp.length - 4],
      description: desctiption.join(' '),
      isReady: true,
    };
  }
}
