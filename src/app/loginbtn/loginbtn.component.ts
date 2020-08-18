import { Component, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MSConfig, OauthFactory } from "oauthlogin";

//declare var OauthFactory: any;
//declare var MSConfig: any;


@Component({
  selector: 'login-btn',
  template: `
      <ng-content></ng-content>
  `
})
export class loginbtnComponent implements OnInit{
  projectName = 'Task Manager 1.0';
  title = 'Task Managment';
  name = 'User Input';

  private _msal: any;

  @Input() config: MSConfig;
  @Output() success: EventEmitter<Account> = new EventEmitter();
  @Output() error: EventEmitter<Error> = new EventEmitter();

  ngOnInit(): void {
    this._msal = OauthFactory.getMSInstance(this.config);
  }

  @HostListener('click', ['$event.target'])
  OnClick(target){
    console.log(target);
    if(target.classList.contains('signin')) {
      this.SignIn()
    } else if (target.classList.contains('signout')){
      this.SignOut()
    }
  }

  async SignIn(){
    try {
      const data = await this._msal.SignIn();
      this.success.emit(data);
    } catch (error) {
      this.error.emit(error);
    }
  }

  async SignOut(){
    const data = await this._msal.SignOut();
    console.log(data);
  }

}
