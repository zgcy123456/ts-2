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

    protected initList(smsData : ISmsData[]){
        if(smsData.length){
            const oFrag : DocumentFragment = document.createDocumentFragment();
            smsData.map((todo:ISmsData) => {
                const oItem : HTMLElement = createItem('div', 'sms-item', this.smsList(todo));
                oFrag.appendChild(oItem);
            });
            this.smsWrapper.appendChild(oFrag);
        }
    }

}

export default SmsDom;