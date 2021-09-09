let url = document.location.href;

// if(!url.includes("#hero")){
//     if(url.includes("#")){
//         url = url.split("#");
//         url = url[0];
//         document.location.href = url;
//     }
//     document.location.href = url + "#hero"
// }

if(!url.includes("#")){
    document.location.href = url + "#hero";
}

let lastScrollTop = 0;

let delayOver = true;

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function doDelay(){
    disableScroll();
    delayOver = false;
    await sleep(1000);
    enableScroll();
    delayOver = true
}

function penis(){
    let height = window.innerHeight;
    // if(window.innerWidth < 1514){
    //     return
    // }

    if(delayOver){
        let url = document.location.href;
        let base = document.location.href.split("#")[0];
        let id = document.location.href.split("#")[1];
        
                    // document.reload();
        document.location.replace(base + "#part1");
        // document.documentElement.scrollTop = document.body.scrollTop = height; 
        doDelay()

        lastScrollTop = height;


    }     
}

$(window).scroll(()=>{
    let height = window.innerHeight;
    if(window.innerWidth < 1514){
        return
    }

    let st = $(this).scrollTop();
    if(delayOver){
        let url = document.location.href;
        let base = document.location.href.split("#")[0];
        let id = document.location.href.split("#")[1];
        
        if (st > lastScrollTop){
            switch (id) {
                case "hero":
                    // document.reload();
                    document.location.replace(base + "#part1");
                    document.documentElement.scrollTop = document.body.scrollTop = height; 
                    doDelay()
                    break;
                case "part1":
                    document.location.replace(base + "#part2");
                    document.documentElement.scrollTop = document.body.scrollTop = height*2.5; 
                    doDelay()
                    break;
                case "part2":
                    break;
            }
        } else {
            switch (id) {
                case "hero":
                    break;
                case "part1":
                    document.location.replace(base + "#hero"); 
                    document.documentElement.scrollTop = document.body.scrollTop = 0;   
                    doDelay()
                    break;
                case "part2":
                    document.location.replace(base + "#part1");
                    document.documentElement.scrollTop = document.body.scrollTop = height;
                    doDelay()
                    break;
            }
        }
    }
    lastScrollTop = st;
});
