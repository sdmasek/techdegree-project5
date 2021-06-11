baguetteBox.run('.gallery');

//Commented out initial function because code block kept returning as "undefined"
//function searchGallery() {
//accessing the search bar
let input = document.getElementById("search");
//using keyup function to listen for user input
input.addEventListener("keyup", function (e) {
    //accessing all a tags and putting them in photos var
    //renaming the e value to search and making it lower case
    let photos = document.getElementsByTagName("a");
    let search = e.target.value.toLowerCase();
    //using a for loop to access all photos
    for (let i = 0; i < photos.length; i++) {
        //getting the caption by accessing the data-caption of each photo
        let caption = photos[i].getAttribute("data-caption");
        caption = caption.toLowerCase();
        //comparing the data-caption text to the search text
        if (caption.includes(search)) {
            //displaying each photo as a block level element
            photos[i].style.display = "block";
        }
        else {
            //not displaying the element at all
            photos[i].style.display = "none";

        }
    }
});

//}

// let photos = document.getElementsByTagName("a");
// let input = document.getElementById("search");
// input.addEventListener("keyup", function (e) {
//     for (let i = 0; i < photos.length; i++) {
//         let search = e.target.value.toLowerCase();
//         let caption = photos[i].getAttribute("data-caption");

//         // console.log(caption);
//         if (caption.includes(search.toLowerCase())) {
//             // console.log(caption);
//             photos[i].style.display = "block";
//         }
//         else {
//             photos[i].style.display = "none";
//             // console.log("no caption available");
//         }
//     }
// })