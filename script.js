// const urlField = document.querySelector(".field input"),
//       previewArea = document.querySelector(".preview-area"),
//       imgTag = previewArea.querySelector(".thumbnail"),
//       hiddenInput = document.querySelector(".hidden-input");



// urlField.onkeyup = ()=>{
//     let imgurl = urlField.value; //getting user entered value
//     // console.log(imgurl);
//     previewArea.classList.add("active");

// // https://www.youtube.com/watch?v=lqwdD2ivIbM example of video url lqwdD2ivIbM this is a video id and it's unique

//     if(imgurl.indexOf("https://www.youtube.com/watch?v=")!= -1){ //if enterd value is yt video url
//         let vidId = imgurl.split("v=")[1].substring(0,11); //splitting yt video url from v= so we can get only video id
//         let ytThumburl = 'https://img.youtube.com/vi/${vidId}/maxresdefault.jpg'; // passing enterd yrl video id inside ty thumbnail url
//         imgTag.src = ytThumburl;//passing yt thumb url inside img src
//     }else if(imgurl.indexOf("https://youtu.be/")!=-1){ // if video url is looke like this
//         let vidId = imgurl.split("be/")[1].substring(0,11);//splitting yt video url from v= so we can get only video id
//         let ytThumburl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;// passing enterd yrl video id inside ty thumbnail url
//         imgTag.src = ytThumburl;//passing yt thumb url inside img src
//     }else if(imgurl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){ //if entered value is other image file url
//         imgTag.src = imgurl; //passing user entered url inside img src
//     }
//     else{
//         imgTag.src = "";
//         previewArea.classList.remove("active");
//     }
//     hiddenInput.value = imgTag.src; //passing img src
// }


const urlField = document.querySelector(".field input"),
      previewArea = document.querySelector(".preview-area"),
      imgTag = previewArea.querySelector(".thumbnail"),
      hiddenInput = document.querySelector(".hidden-input");

urlField.onkeyup = () => {
    let imgurl = urlField.value;
    previewArea.classList.add("active");

    if (imgurl.indexOf("https://www.youtube.com/watch?v=") != -1) {
        let vidId = imgurl.split("v=")[1].substring(0, 11);
        let ytThumburl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src = ytThumburl;
    } else if (imgurl.indexOf("https://youtu.be/") != -1) {
        let vidId = imgurl.split("be/")[1].substring(0, 11);
        let ytThumburl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src = ytThumburl;
    } else if (imgurl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
        imgTag.src = imgurl;
    } else {
        imgTag.src = "";
        previewArea.classList.remove("active");
    }

    hiddenInput.value = imgTag.src;
}