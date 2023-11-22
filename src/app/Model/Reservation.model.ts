import { NgModule } from '@angular/core';

export class reservation{
    name:String;
    email:String;
    phone?:number;
    check_in:String;
    check_out:String;
    number_guests?:number;
    room_type:String;


    constructor(name:String,
        email:String,
        phone:number,
        check_in:String,
        check_out:String,
        number_guests:number,
        room_type:String)
    {this.name=name;
    this.email=email;
this.phone=phone;
this.check_in=check_in;
this.check_out=check_out;
this.number_guests=number_guests;
this.room_type=room_type;}
}