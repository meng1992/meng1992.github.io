function animate(element,attrs,fn) {
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        var isStoped = true;
        for(var attr in attrs) {


            if(attr === "opacity") {
                var current = parseFloat(getStyle(element, attr)) * 100  || 100;
                var target = attrs[attr] * 100;
                var step = (target - current) / 10;
                console.log( "current : " + current + "  target: " + target + "  step:" + step);
                step = step > 0 ? Math.ceil(step):Math.floor(step);

                current += step;
                element.style["opacity"] =  current/100;
                //element.style["filter"] = "alpha(opacity="+ current +")";
                if(parseInt(current)  !== target) {
                    isStoped = false;
                }
            }else if (attr === "zIndex") {
                element.style[attr] = attrs[attr];
            }else{
                var current = parseInt(getStyle(element, attr)) || 0;
                var step = (attrs[attr] - current)/10;
                step = step > 0 ? Math.ceil(step):Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
                if(current !== attrs[attr]) {
                    isStoped = false;
                }
            }


        }
        if(isStoped) {
            clearInterval(element.timerId);
            if(fn) {
                fn();
            }
        }
    },15)
}

//屏蔽浏览器差异
function getStyle(element,attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}