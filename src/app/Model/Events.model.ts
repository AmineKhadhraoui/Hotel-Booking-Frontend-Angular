export class Events{
    name:String;
    email:String;
    phone?:number;
    reservation_type:String;
    reservation_date ? :Date;

    constructor(name:String,
        email:String,
        phone:number,
        reservation_type:String,
        reservation_date:Date)
    {
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.reservation_type=reservation_type;
        this.reservation_date=reservation_date;
    }
}