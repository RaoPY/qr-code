document.getElementById("btn").addEventListener("click", generateBtn);

function generateBtn() {
    var size;
    var data = document.getElementById("inputBox").value;
    
    if (document.getElementById("size1").checked) {
        size = 150;
    }
    else if (document.getElementById("size2").checked) {
        size = 512;
    }
    else if (document.getElementById("size3").checked) {
        size = 1000;
    }
    
    if (data == "") {
        alert("Enter some text...");
    }
    else {
        document.getElementById("noteTxt").remove();
        document.getElementById("qrImg").style.display = "inline-block";

        // https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

        var url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`;
        // window.open(url);
        document.getElementById("qrLink").setAttribute("href", url);
        document.getElementById("qrImg").setAttribute("src", url);
    }
}