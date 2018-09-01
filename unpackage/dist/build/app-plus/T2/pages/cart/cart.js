
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,2],],undefined,{path:"./pages/cart/cart.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/cart/cart.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      