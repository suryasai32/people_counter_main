let count=0;
let past=document.getElementById("past-data").innerText;
function increment() {

  count=count+1;
  document.getElementById("counter").innerText=count;
}
function save()
{
  console.log(count);
  alert("Your data of is saved");
  past=past+"-"+count;
  count=0;
  document.getElementById("past-data").innerText=past;
}
