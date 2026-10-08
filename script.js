
function submitLead(e){
  e.preventDefault();
  const f=e.target;
  const data=new FormData(f);
  const subject=encodeURIComponent("SKYRENZA business enquiry - "+(data.get("service")||""));
  const body=encodeURIComponent(
    "Name: "+data.get("name")+"\n"+
    "Business email: "+data.get("email")+"\n"+
    "Company: "+data.get("company")+"\n"+
    "Service: "+data.get("service")+"\n\n"+
    "Requirement:\n"+data.get("message")
  );
  window.location.href="mailto:skyrenzaglobal@gmail.com?subject="+subject+"&body="+body;
  document.getElementById("form-note").textContent="Your email app should now open with the requirement prepared.";
  return false;
}
document.querySelector(".menu")?.addEventListener("click",()=>{
  document.querySelector(".links").style.display =
    document.querySelector(".links").style.display==="flex" ? "none" : "flex";
});
