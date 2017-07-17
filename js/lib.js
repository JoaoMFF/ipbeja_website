var loadXMLDoc = function (file) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET",file,false);
  xhttp.send();

  if (xhttp.readyState === 4 && xhttp.status === 200) {
    return xhttp.responseXML;
  }
  return {error : 'no file'};
}

$(function(){
  if($('body').is('.body-index')){
    window.onload = function () {
      loadSliderCursos();
      loadSliderNoticias();
    }
  }
  if($('body').is('.body-contactos')){
    window.onload = function () {
      loadApoio();
      loadEscolas();
      loadDepartamentos();
    }
  }
  if($('body').is('.body-cursos')){
    window.onload = function () {
      loadCursos();
    }
  }
  if($('body').is('.body-ei')){
    window.onload = function () {
      loadEI();
    }
  }
  if($('body').is('.body-noticias')){
    window.onload = function () {
      loadNoticias();
    }
  }
});

function loadSliderCursos(){
  
  xmlDoc = loadXMLDoc("xml/Cursos.xml"),
  testObj = xmlDoc,
  cursosSlide = testObj.getElementsByTagName("Curso");

  for (var i=0; i<5; i++) {

    var name = (cursosSlide[i].getElementsByTagName("Nome")[0].textContent),
    url = (cursosSlide[i].getElementsByTagName("URL")[0].textContent),
    page = (cursosSlide[i].getElementsByTagName("Page")[0].textContent),
    tipo = (cursosSlide[i].getElementsByTagName("Tipo")[0].textContent),
    desc = (cursosSlide[i].getElementsByTagName("Descricao")[0].textContent);

    slide = '<div class="item">';
    slide += '<a href="'+page+'"><img src="'+url+'" alt="'+name+'"width="260" height="145"></a>';
    slide += '<div class="carousel-caption">';
    slide += '<h3>'+name+'</h3>';
    slide += '<p style="text-transform: uppercase;">'+tipo+'</p>';
    slide += '</div>';
    slide += '</div>';

    document.getElementById("Slider").innerHTML += slide;
  }
}

function loadSliderNoticias(){
  
  xmlDoc = loadXMLDoc("xml/Noticias.xml"),
  testObj = xmlDoc,
  newsSlide = testObj.getElementsByTagName("Noticia");

  for (var i=0; i<4; i++) {

    var title = (newsSlide[i].getElementsByTagName("Titulo")[0].textContent),
    url = (newsSlide[i].getElementsByTagName("URL")[0].textContent),
    info = (newsSlide[i].getElementsByTagName("Descricao")[0].textContent);

    slidenews = '<div class="item">';
    slidenews += '<img src="'+url+'" alt="'+title+'"width="260" height="145">';
    slidenews += '<div class="carousel-caption">';
    slidenews += '<h3>'+title+'</h3>';
    slidenews += '<a>Ler</a>';
    slidenews += '</div>';
    slidenews += '</div>';

    document.getElementById("SliderNews").innerHTML += slidenews;
  }
}

function loadEscolas(){
  xmlDoc = loadXMLDoc("xml/Contactos.xml"),
  testObj = xmlDoc,
  escolas = testObj.getElementsByTagName("Escola");

  for (var i=0; i<escolas.length; i++) {

    var id = (escolas[i].getElementsByTagName("Id")[0].textContent),
    name = (escolas[i].getElementsByTagName("Nome")[0].textContent),
    tlm = (escolas[i].getElementsByTagName("Telf")[0].textContent),
    fax = (escolas[i].getElementsByTagName("Fax")[0].textContent),
    morada = (escolas[i].getElementsByTagName("Morada")[0].textContent),
    email = (escolas[i].getElementsByTagName("Email")[0].textContent),
    site = (escolas[i].getElementsByTagName("Site")[0].textContent);

    par = '<div class="panel-heading">';
    par += '<h4 class="panel-title">';
    par += '<a data-toggle="collapse" data-parent="#" href="#'+id+'">'+name+'</a></h4>';
    par += '</div>';
    par += '<div id="'+id+'" class="panel-collapse collapse">';
    par += '<div class="panel-body">';
    par += '<p> <b>Telf.:</b> '+tlm+'</br><b>Fax:</b> '+fax+'</br><b>Morada:</b>'+morada+'</br><b>E-Mail:</b> <a href="'+email+'">'+email+'</a></br><b>Sitio Web:</b> <a href="'+site+'">ver site</a></p>';
    par += '</div>';
    par += '</div>';
    par += '</div>';
    
    document.getElementById("escolas").innerHTML += par;
  }
}

function loadApoio(){
  
  xmlDoc = loadXMLDoc("xml/Contactos.xml"),
  testObj = xmlDoc,
  apoios = testObj.getElementsByTagName("Apoio");

    for (var i=0; i<apoios.length; i++) {

      var id = (apoios[i].getElementsByTagName("Id")[0].textContent),
      name = (apoios[i].getElementsByTagName("Nome")[0].textContent),
      tlm = (apoios[i].getElementsByTagName("Telf")[0].textContent),
      fax = (apoios[i].getElementsByTagName("Fax")[0].textContent),
      morada = (apoios[i].getElementsByTagName("Morada")[0].textContent),
      email = (apoios[i].getElementsByTagName("Email")[0].textContent),
      site = (apoios[i].getElementsByTagName("Site")[0].textContent);

      apoio = '<div class="panel-heading">';
      apoio += '<h4 class="panel-title">';
      apoio += '<a data-toggle="collapse" data-parent="#" href="#'+id+'">'+name+'</a></h4>';
      apoio += '</div>';
      apoio += '<div id="'+id+'" class="panel-collapse collapse">';
      apoio += '<div class="panel-body">';
      apoio += '<p> <b>Telf.:</b> '+tlm+'</br><b>Fax:</b> '+fax+'</br><b>Morada:</b> '+morada+'</br><b>E-Mail:</b> <a href="'+email+'">'+email+'</a></br><b>Sitio Web:</b> <a href="'+site+'">ver site</a></p>';
      apoio += '</div>';
      apoio += '</div>';
      apoio += '</div>';
      
      document.getElementById("apoio").innerHTML += apoio;
  }
}

function loadDepartamentos(){
  
  xmlDoc = loadXMLDoc("xml/Contactos.xml"),
  testObj = xmlDoc,
  depart = testObj.getElementsByTagName("Departamento");

    for (var i=0; i<depart.length; i++) {

      var id = (depart[i].getElementsByTagName("Id")[0].textContent),
      name = (depart[i].getElementsByTagName("Nome")[0].textContent),
      tlm = (depart[i].getElementsByTagName("Telf")[0].textContent),
      morada = (depart[i].getElementsByTagName("Morada")[0].textContent),
      dir = (depart[i].getElementsByTagName("Director")[0].textContent),
      site = (depart[i].getElementsByTagName("Site")[0].textContent);

      dep = '<div class="panel-heading">';
      dep += '<h4 class="panel-title">';
      dep += '<a data-toggle="collapse" data-parent="#" href="#'+id+'">'+name+'</a></h4>';
      dep += '</div>';
      dep += '<div id="'+id+'" class="panel-collapse collapse">';
      dep += '<div class="panel-body">';
      dep += '<p> <b>Director:</b> '+dir+'</br><b>Telf.:</b> '+tlm+'</br><b>Localização:</b> '+morada+'</br><b>Sitio Web:</b> <a href="'+site+'">ver site</a></p>';
      dep += '</div>';
      dep += '</div>';
      dep += '</div>';
      
      document.getElementById("departamento").innerHTML += dep;
  }
}

function loadCursos(){
  
  xmlDoc = loadXMLDoc("xml/Cursos.xml"),
  testObj = xmlDoc,
  cursos = testObj.getElementsByTagName("Curso");

  for (var i=0; i<cursos.length; i++) {

    var id = (cursos[i].getElementsByTagName("Id")[0].textContent),
    name = (cursos[i].getElementsByTagName("Nome")[0].textContent),
    tipo = (cursos[i].getElementsByTagName("Tipo")[0].textContent),
    url = (cursos[i].getElementsByTagName("URL")[0].textContent),
    page = (cursos[i].getElementsByTagName("Page")[0].textContent),
    desc = (cursos[i].getElementsByTagName("Descricao")[0].textContent);

    par = '<div course="'+tipo+'" class="col-md-6 curso">';
    par += '<div class="card ">';
    par += '<a href="'+page+'"><img class="card-img-top" src="'+url+'" alt="'+name+'"></a>';
    par += '<div class="card-block">';
    par += '<h4 class="card-title">'+name+'</h4>';
    par += '<p>'+desc+'</p>';
    par += '<a href="'+page+'" class="btn btn-primary">Saber Mais</a>';
    par += '</div>';
    par += '</div>';
    par += '</div>';

    document.getElementById("cursos").innerHTML += par;
  }

  var color = 'color';

  $('.divs').click(function() 
  {
    var tipo = $(this).attr('filter');
    $('.curso').each(function() 
    {
      if(tipo=="all")
      {
        $(this).fadeIn();
        $(this).removeClass('hide');
        $('.divs').removeClass(color);
      }
      else
      {
        if($(this).attr('course')!=tipo) 
        { 
          $(this).fadeOut();
            $(this).addClass('hide');
            $('.divs').removeClass(color);
        }
        else
          $(this).fadeIn();
          $(this).removeClass('hide');
          $('.divs').removeClass(color);
      }
    });
    $('.divs').removeClass(color);
      $(this).addClass(color);
  });
}

function loadEI(){
  
  xmlDoc = loadXMLDoc("xml/EI.xml"),
  testObj = xmlDoc,
  ei = testObj.getElementsByTagName("EI");

    for (var i=0; i<ei.length; i++) {

      var nome = (ei[i].getElementsByTagName("Nome")[0].textContent),
      url = (ei[i].getElementsByTagName("URL")[0].textContent),
      title1 = (ei[i].getElementsByTagName("T1")[0].textContent),
      info1 = (ei[i].getElementsByTagName("T1Info")[0].textContent),
      title2 = (ei[i].getElementsByTagName("T2")[0].textContent),
      info2 = (ei[i].getElementsByTagName("T2Info")[0].textContent),
      line1 = (ei[i].getElementsByTagName("T2L1")[0].textContent),
      line2 = (ei[i].getElementsByTagName("T2L2")[0].textContent),
      line3 = (ei[i].getElementsByTagName("T2L3")[0].textContent),
      line4 = (ei[i].getElementsByTagName("T2L4")[0].textContent),
      line5 = (ei[i].getElementsByTagName("T2L5")[0].textContent),
      line6 = (ei[i].getElementsByTagName("T2L6")[0].textContent),
      line7 = (ei[i].getElementsByTagName("T2L7")[0].textContent),
      line8 = (ei[i].getElementsByTagName("T2L8")[0].textContent),
      title3 = (ei[i].getElementsByTagName("T3")[0].textContent),
      info3 = (ei[i].getElementsByTagName("T3Info")[0].textContent),
      info32 = (ei[i].getElementsByTagName("T3Info2")[0].textContent),
      line9 = (ei[i].getElementsByTagName("T3L1")[0].textContent),
      line10 = (ei[i].getElementsByTagName("T3L2")[0].textContent),
      line11 = (ei[i].getElementsByTagName("T3L3")[0].textContent),
      line12 = (ei[i].getElementsByTagName("T3L4")[0].textContent);

      par = '<div class="informacao">';
      par += '<h6>'+nome+'</h6>';
      par += '<span class="banner"></span>';
      par += '<h5>'+title1+'</h5>';
      par += '<p>'+info1+'</p>';
      par += '<hr>';
      par += '<h5>'+title2+'</h5>';
      par += '<p>'+info2+'</p>';
      par += '<ul>';
      par += '<li>'+line1+'</li>';
      par += '<li>'+line2+'</li>';
      par += '<li>'+line3+'</li>';
      par += '<li>'+line4+'</li>';
      par += '<li>'+line5+'</li>';
      par += '<li>'+line6+'</li>';
      par += '<li>'+line7+'</li>';
      par += '<li>'+line8+'</li>';
      par += '</ul>';
      par += '<hr>';
      par += '<h5>'+title3+'</h5>';
      par += '<p>'+info3+'</p>';
      par += '<ul>';
      par += '<li>'+line9+'</li>';
      par += '<li>'+line10+'</li>';
      par += '<li>'+line11+'</li>';
      par += '<li>'+line12+'</li>';
      par += '</ul>';
      par += '<p>'+info32+'</p>';
      par += '</div>';
      
      document.getElementById("EI").innerHTML += par;
  }
}

function loadNoticias(){
  
  xmlDoc = loadXMLDoc("xml/Noticias.xml"),
  testObj = xmlDoc,
  noticias = testObj.getElementsByTagName("Noticia");

  for (var i=0; i<noticias.length; i++) {

    var id = (noticias[i].getElementsByTagName("Id")[0].textContent),
    title = (noticias[i].getElementsByTagName("Titulo")[0].textContent),
    mes = (noticias[i].getElementsByTagName("Mes")[0].textContent),
    url = (noticias[i].getElementsByTagName("URL")[0].textContent),
    date = (noticias[i].getElementsByTagName("Data")[0].textContent),
    desc = (noticias[i].getElementsByTagName("Descricao")[0].textContent);

    par = '<div month="'+mes+'" class="col-md-6 noticia hide">';
    par += '<div class="card">';
    par += '<a href=""><img class="card-img-top" src="'+url+'" alt="'+title+'"></a>';
    par += '<div class="card-block">';
    par += '<h4 class="card-title">'+title+'</h4>';
    par += '<p>'+desc+'</p>';
    par += '<p class="date">'+date+'</p>';
    par += '<a href="#" class="btn btn-primary">Ler Mais</a>';
    par += '</div>';
    par += '</div>';
    par += '</div>';

    document.getElementById("noticias").innerHTML += par;
  }

  var color = 'color';

  $('.color').each(function() 
  {
    var tipo = $(this).attr('filter');
    $('.noticia').each(function() 
    { 
      if($(this).attr('month')!=tipo)
      {
        $(this).fadeOut();
        $(this).addClass('hide');
      }
      else
      {
        $(this).fadeIn();
        $(this).removeClass('hide');
      }
    });
  });

$('.divs').click(function() 
{
  var tipo = $(this).attr('filter');
  $('.noticia').each(function() 
  { 
    if($(this).attr('month')!=tipo)
    {
      $(this).fadeOut();
          $(this).addClass('hide');
          $('.divs').removeClass(color);
    }
    else
    {
      $(this).fadeIn();
      $(this).removeClass('hide');
      $('.divs').removeClass(color);
    }
  });
  $('.divs').removeClass(color);
  $(this).addClass(color);
});
}

$(function() {

    $("#nav").before(function() {

        nav = '<div class="container">';
        nav += '<div class="navbar-header">';
        nav += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">';
        nav += '<i class="fa fa-bars"></i>';
        nav += '</button>';
        nav += '<a class="navbar-brand page-scroll" href="index.html">';
        nav += '<i class="icon icon-ipbeja fa-lg"></i> IPBeja';
        nav += '</a>';
        nav += '</div>';
        nav += '<div class="collapse navbar-collapse navbar-right navbar-main-collapse">';
        nav += '<ul class="nav navbar-nav">';
        nav += '<li class="hidden">';
        nav += '<a href="#page-top"></a>';
        nav += '</li>';
        nav += '<li>';
        nav += '<a class="page-scroll" href="noticias.html">Notícias</a>';
        nav += '</li>';
        nav += '<li>';
        nav += '<a class="page-scroll" href="cursos.html">Cursos</a>';
        nav += '</li>';
        nav += '<li class="dropdown">';
        nav += '<a href="#" data-toggle="dropdown" class="dropdown-toggle">Serviços<b class="caret"></b></a>';
        nav += '<ul class="dropdown-menu">';
        nav += '<li><a href="#">Serviços academicos</a></li>';
        nav += '<li><a href="Servicos.html">Serviços de acção social</a></li>';
        nav += '</ul>';
        nav += '<li>';
        nav += '<a class="page-scroll" href="contactos.html">Contactos</a>';
        nav += '</li>';
        nav += '</ul>';
        nav += '</div>';
        nav += '</div>';
        nav += '</nav>';

        $(this).append(nav);
    });  

}); 

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});