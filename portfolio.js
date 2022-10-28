function imgageStyle(img1,img2,img3){
    img1.style.position = "absolute";
    img1.style.left = "-6%";
    img1.style.borderRadius = "10px";
    img2.style.position = "absolute";
    img2.style.borderRadius = "10px";
    img2.style.right = "50%";
    img2.style.transform = "translateX(50%)"
    img3.style.position = "absolute";
    img3.style.left = "70%";
    img3.style.borderRadius = "10px";
}

function moveImages(){
    let index1 = 1;
    let index2 = 2;
    let index3 = 3;
    let div = document.getElementById('myPhotos');
    let arrLeft = document.getElementsByClassName('thirdSectionLeftButton');
    let arrRight = document.getElementsByClassName('thirdSectionRightButton');
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    img1.src = "./assets/image-slide-1.jpg";
    img2.src = "./assets/image-slide-2.jpg";
    img3.src = "./assets/image-slide-3.jpg";
    imgageStyle(img1,img2,img3)
    div.appendChild(img1);
    div.appendChild(img2);
    div.appendChild(img3);

    arrLeft[0].addEventListener('click',()=>{
        index1--;
        index2--;
        index3--;
        if (index1<1){
            index1 = 5;
        }
        if (index2<1){
            index2 = 5;
        }
        if (index3<1){
            index3 = 5;
        }
        img1.src = "./assets/image-slide-"+ index1 +".jpg";
        img2.src = "./assets/image-slide-"+ index2 +".jpg";
        img3.src = "./assets/image-slide-"+ index3 +".jpg";
        imgageStyle(img1,img2,img3)
        div.appendChild(img1);
        div.appendChild(img2);
        div.appendChild(img3);
    })

    arrRight[0].addEventListener('click',()=>{
        index1++;
        index2++;
        index3++;
        if (index1>5){
            index1 = 1;
        }
        if (index2>5){
            index2 = 1;
        }
        if (index3>5){
            index3 = 1;
        }
        img1.src = "./assets/image-slide-"+ index1 +".jpg";
        img2.src = "./assets/image-slide-"+ index2 +".jpg";
        img3.src = "./assets/image-slide-"+ index3 +".jpg";
        imgageStyle(img1,img2,img3)
        div.appendChild(img1);
        div.appendChild(img2);
        div.appendChild(img3);
    })

}

moveImages()
