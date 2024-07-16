import SmsTemplate from "./SmsTemplate";
import { ISmsData } from "./Typing";
import { createItem } from "./Utils";

class SmsDom extends SmsTemplate{
    
    private smsWrapper : HTMLElement;

    constructor(smsWrapper: HTMLElement){
        super();
        this.smsWrapper = smsWrapper;
    }

    protected showSmsContent(data : ISmsData){
        const oSmsCon : HTMLElement = createItem('div', '', this.smsView(data))
        this.smsWrapper.appendChild(oSmsCon);
    }

}

export default SmsDom;