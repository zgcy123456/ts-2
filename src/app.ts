import { ISmsData } from "./js/Typing";
import SmsEvent from "./js/SmsEvent"

;((doc) => {

    const oSmsEach : HTMLElement = document.querySelector('.item-sms-each') as HTMLElement;


    const smsData : ISmsData[] =[
        {
            id:1,
            phoneNumber:'02989580215',
            content:'感谢您致电高新区枫叶惠人社区综合服务站，我们将竭诚为您服务。地址：西安市雁塔区高新区科技六路200号枫林意树2号楼商铺'
        },
        {
            id:2,
            phoneNumber:'02989580215',
            content:'感谢您致电高新区枫叶惠人社区综合服务站，我们将竭诚为您服务。地址：西安市雁塔区高新区科技六路200号枫林意树2号楼商铺'
        },
        {
            id:3,
            phoneNumber:'02989580215',
            content:'感谢您致电高新区枫叶惠人社区综合服务站，我们将竭诚为您服务。地址：西安市雁塔区高新区科技六路200号枫林意树2号楼商铺'
        },
        {
            id:4,
            phoneNumber:'02989580215',
            content:'感谢您致电高新区枫叶惠人社区综合服务站，我们将竭诚为您服务。地址：西安市雁塔区高新区科技六路200号枫林意树2号楼商铺'
        },
        {
            id:5,
            phoneNumber:'02989580215',
            content:'感谢您致电高新区枫叶惠人社区综合服务站，我们将竭诚为您服务。地址：西安市雁塔区高新区科技六路200号枫林意树2号楼商铺'
        }
    ];


    const smsEvent :SmsEvent = new SmsEvent(smsData, oSmsEach);

    const init=():void =>{
        buildEvent();
    }


    function buildEvent():void{
        oSmsEach.addEventListener('click', handleListClick, false);
    }

    function handleListClick(e: MouseEvent) : void{
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLowerCase();
        if(tagName === 'div' || tagName=== 'button'){
            const id = parseInt(tar.dataset.id);
            switch(tagName){
                case 'div' :
                    smsEvent.showSms(id);
            }

        }
    }

})(document)