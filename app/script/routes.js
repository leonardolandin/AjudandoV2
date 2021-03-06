(function() {
  crossroads.addRoute('/', function() {
    renderPage('assignments')
  });

  crossroads.addRoute('entrar', function() {
    renderPage('login')
  });

  crossroads.addRoute('entrar/cadastrar', function() {
    renderPage('register')
  });

  crossroads.addRoute('entrar/esqueci-minha-senha', function() {
    renderPage('passwordRecover')
  });
 
  function parseHash(newHash, oldHash) {
    crossroads.parse(newHash);
  }

  hasher.initialized.add(parseHash);
  hasher.changed.add(parseHash);
  hasher.init();

  function renderPage(idDiv) {
    resetDocument()
    document.getElementById(idDiv).style.display = 'flex'
  }

  function resetDocument() {
    var allPages = document.querySelectorAll('.divContainer')
    for (i = 0; i < allPages.length; i++) {
      allPages[i].style.display = 'none';
    }
  }
})()