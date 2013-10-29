
    // Triskell's derping with 3D and others fun web technos.
    //
    // WEBGL part inspired from the three.js "getting started" web page (www.aerotwist.com/tutorials/getting-started-with-three-js/)
    // ANNYANG websita (www.talater.com/annyang/)
    // HEADTRACKR part inspired from the headtrackr.js web page on github (github.com/auduno/headtrackr/)
    //
    // Recommened on Chrome
    // Allow micro and camera capture
    // Speech recognition can up to 3 seconds on my computer, maybe it is the same on your.



(function(THREE, annyang, $){

    
    //WEBGL
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    var geometry = new THREE.CubeGeometry(3,3,3);
    var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    scene.add( camera );
    
    // create a point light
    var pointLight =
      new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    
    
    
    //Voice recognotion
    if (annyang) {
        // Let's define our first command. First the text we expect, and then the function it should call
        
        annyang.setLanguage('fr-FR');
        var commands = {
          'Bonjour' : function (){
              console.log('Salut toi !');
              alert('Bonjour à vous aussi !\nNhésitez pas à déplacer votre tête selon x, y ET z\nDites "couleur rouge", "couleur bleu" ou "couleur vert" pour changer la couleur du cube.');
          },
          'Couleur rouge' : function() {
              material.color.setHex(0xFF0000);
              console.log('red material !');
          },
          'Couleur vert' : function() {
              material.color.setHex(0x00FF00);
              console.log('green material !');
          },
          'Couleur Bleu' : function() {
              material.color.setHex(0x0000FF);
              console.log('blue material !');
          },
          ':attr' : function(attr) {
            console.log(attr);
          }
        };

        // Initialize annyang with our commands
        annyang.init(commands);

        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();
        console.log('Voice recognition started !');
        alert('Pour commencez dites "Bonjour" à voix haute.');
        
        
        
        
        //HEADTRACKING
    
        var videoInput = document.getElementById('inputVideo');
        var canvasInput = document.getElementById('inputCanvas');

        var htracker = new headtrackr.Tracker();
        htracker.init(videoInput, canvasInput);
        htracker.start();
        
        /*document.addEventListener("facetrackingEvent", function(event){
           cube.rotation.y = event.x/150-150;
           cube.rotation.z = -event.y/150+150;
        });*/
        document.addEventListener("headtrackingEvent", function(event){
           cube.rotation.y = -event.x/50;
           cube.rotation.x = event.y/50;
           camera.position.z = event.z/50+4.5;
        });
    
        
    }
    
    
    
    
    
    function render() {
        requestAnimationFrame(render);
        
        //cube.rotation.x += 0.05;
        //cube.rotation.y += 0.05;
        
        renderer.render(scene, camera);
    }
    render();
    
    
    
})(THREE, annyang, jQuery);