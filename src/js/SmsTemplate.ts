import { ISmsData } from "./Typing";

class SmsTemplate {

    protected smsList({id, phoneNumber, content} : ISmsData) : string{



        return `
            
                <span class="sms-item-pic"><img src="./image/item1.png" alt="item1" /> </span>
                <div class="sms-item-des">
                    <div class="sms-title">
                        <span class="sms-number">${phoneNumber}</span>
                        <span class="sms-time">7/8</span>
                    </div>
                    <div class="sms-con">${content}</div>
                </div>
            
        `;
    }

    protected smsView ({id, phoneNumber, content} : ISmsData) : string{
        alert(id + ' - ' + phoneNumber + ' - ' + content);
        return ``;
    }

}

export default SmsTemplate;