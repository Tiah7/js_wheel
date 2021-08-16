const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;

window.onload = showContent(); 

function showContent() {
    setTimeout(() => {
        
        content.style.display = "block";
        loading.style.display = "none";

    }, 3000);
 
}
