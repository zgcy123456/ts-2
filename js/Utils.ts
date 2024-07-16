export function findParentNode(target: HTMLElement, className : string) : HTMLElement{
    while(target = target.parentNode as HTMLElement){
        if(target.className === className){
            return target;
        }
    }
}

export function createItem(tagName: string, className :string, smsItem: string) : HTMLElement{
    const sItem : HTMLElement = document.createElement(tagName);
    sItem.className = className;
    sItem.innerHTML = smsItem;
    return sItem;
}