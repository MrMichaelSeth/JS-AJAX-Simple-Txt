var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        document.getElementById("ajax").innerHTML = xhr.responseText
      }
    }
    xhr.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/shakespeare.txt");
    xhr.send();
