import SmsDom from "./SmsDom";
import { ISmsData } from "./Typing";

class SmsEvent extends SmsDom{

    private smsData: ISmsData[];

    constructor(smsData : ISmsData[], smsWrapper : HTMLElement){
        super(smsWrapper);
        this.smsData = smsData;
        
    }

    public showSms(id : number) {
        const _data : undefined | ISmsData = this.smsData.find((item :ISmsData) => item.id === id);
        if(!_data){
            // this.smsData.push(data);
            this.showSmsContent(_data);
            return;
        }
    }


}

export default SmsEvent;