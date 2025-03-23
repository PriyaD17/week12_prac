//Exclude

type event= 'click' | 'mouseover' | 'scroll' ;
type excludeevent= Exclude<event, 'mouseover'>; // 'click' | 'scroll'

const handleevent= (event: excludeevent)=>{
    console.log(`Event: ${event}`);
}
handleevent('click');
