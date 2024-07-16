import { ISmsData } from "./Typing";

class SmsTemplate {
    protected smsView ({id, phoneNumber, content} : ISmsData) : string{
        alert(id + ' - ' + phoneNumber + ' - ' + content);
        return ``;
    }

}

export default SmsTemplate;