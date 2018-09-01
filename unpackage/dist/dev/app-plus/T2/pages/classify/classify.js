
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,3],],undefined,{path:"./pages/classify/classify.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/classify/classify.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      