
(function(){
  "use strict";
  var root=document.documentElement;
  var themeButton=document.getElementById("theme-toggle");
  var menuButton=document.getElementById("menu-toggle");
  var links=document.getElementById("nav-links");
  var savedTheme;
  try { savedTheme=localStorage.getItem("character-distillation-theme"); } catch(e) {}
  var prefersLight=window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  function setTheme(theme) {
    root.setAttribute("data-theme",theme);
    themeButton.textContent=theme==="dark"?"☼":"◑";
    themeButton.setAttribute("aria-label",theme==="dark"?"切换为浅色模式":"切换为深色模式");
    themeButton.setAttribute("title",theme==="dark"?"切换为浅色模式":"切换为深色模式");
  }
  setTheme(savedTheme==="light"||savedTheme==="dark"?savedTheme:(prefersLight?"light":"dark"));
  themeButton.addEventListener("click",function(){
    var next=root.getAttribute("data-theme")==="dark"?"light":"dark";
    setTheme(next);
    try { localStorage.setItem("character-distillation-theme",next); } catch(e) {}
  });
  function setMenu(isOpen){
    links.classList.toggle("is-open",isOpen);
    menuButton.setAttribute("aria-expanded",String(isOpen));
    menuButton.setAttribute("aria-label",isOpen?"关闭导航菜单":"打开导航菜单");
    menuButton.textContent=isOpen?"✕":"☰";
  }
  menuButton.addEventListener("click",function(){setMenu(!links.classList.contains("is-open"));});
  links.addEventListener("click",function(e){if(e.target.closest("a"))setMenu(false);});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false);});
  var year=document.getElementById("year");
  if(year)year.textContent=String(new Date().getFullYear());
})();
