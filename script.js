window.addEventListener('load',init);

async function init() {
    const memen = await fetch('https://api.imgflip.com/get_memes')
    const res = await memen.json();
    console.log(res.data.memes);
    showMemes(res.data.memes);
}

async function showMemes(data){

    var memes = await data 
    var id = 0;
    const content = document.querySelector("#content")
    content.innerHTML = ""
    while (id<100){
        _createMemes(memes,id, content);
        id++;
    }
}

function _createMemes(data,id,content){
    var div = document.createElement("div");
    div.setAttribute('id',id)

    var memeName = document.createElement("p");
    memeName.textContent = data[id].name.toUpperCase();
    memeName.setAttribute('class','memeName');

    var memeImg = document.createElement("img");
    memeImg.setAttribute("src",data[id].url);
    
    var memeDesc = document.createElement("p");
    memeDesc.textContent = `Legenda de meme genérica nº ${id+1}`.toUpperCase();
    memeDesc.setAttribute('class','memeDesc');

    div.appendChild(memeName);
    div.appendChild(memeImg);
    div.appendChild(memeDesc);

    content.appendChild(div)
}