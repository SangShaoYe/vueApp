export function  diyHead() {
    let ntitlebar = new plus.nativeObj.View('ntitlebar',
        {top:'0px',left:'0px',height:'44px',width:'100%',backgroundColor:'rgba(0,0,0,0)',statusbar:{background:'#D43030'}},
        [
            // {tag:'rect',id:'rect',color:'#FF0000',position:{top:'12px',left:'12px',width:'24px',height:'24px'}},
            {tag:'font',id:'font',text:'编辑'
                ,position: {top: "0",right: "20px"}
                ,textStyles:{align:'right',size:'18px',color:'#FFFFFF'}}
        ]
    );
    return ntitlebar;
}