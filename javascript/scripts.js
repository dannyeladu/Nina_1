function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load", ( ) =>{
    const uploadImage = reader.result
    document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
    })
    reader.readAsDataURL(this.files[0])
 })
}

async function mapImageList(){
    const memesObject = [
        {
          "name": "nina-01",
          "path": "pictures/nina-01.jpg"
        },
        {
          "name": "nina-04",
          "path": "pictures/nina-04.jpg"
        },
        {
          "name": "nina-07",
          "path": "pictures/nina-07.jpg"
        },
        {
          "name": "nina-05",
          "path": "pictures/nina-05.jpg"
        },
        {
           "name": "nina-06",
           "path": "pictures/nina-06.jpg"
        },
        {
            "name": "nina-03",
            "path": "pictures/nina-03.jpg"
        },
        {
            "name": "nina-02",
            "path": "pictures/nina-02.jpg"
        },
        {
            "name": "nina-08",
            "path": "pictures/nina-08.jpg"
        },


    ]

    return memesObject
}
async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main()