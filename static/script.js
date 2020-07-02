var x = 0;
var namelist = ['Akeno','Kojima','Megumin','Boa','Hinata'];
function changePicnName()
{
    if (x == 5)
    {
        x = 0;
    }
    var img = "url('media/" + namelist[x] +".jpg')";
    document.getElementById('waifu').style.backgroundImage = img ;
    document.getElementById('name').innerHTML = namelist[x];
    x += 1;
}