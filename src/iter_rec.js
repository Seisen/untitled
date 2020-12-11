import * as React from "react";

class Iter_rec extends React.Component{
    numberRec(nmbr){
        let recs=[];
        for(let i= 0; i < nmbr ; i++) {
            recs.push(<div style="height:"+{100/i}+"vh></div>);
        }
    }
    render() {
        return(<div>
                ssssssssssssssssssssssssssssssssssssssssssssssssss
            </div>
        )
    }
}
export default Iter_rec
