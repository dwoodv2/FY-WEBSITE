// Function which darkens navbar and other elements
function darkMode() {
    // Darkening or lightening all elements depending on the toggle switch
    if (document.getElementById("dm-toggle").checked) {  // Switching to dark mode if the switch is toggled.
        if (document.getElementById("hc-toggle").checked){
            document.getElementById('hc-toggle').checked = false;
            highContrast(); 
        }
        document.querySelectorAll('hc-toggle').checked = false;
        document.querySelectorAll('.navbar-light').forEach((element) =>{
            element.className = element.className.replace(/-light/g, '-dark'); // Using custom css for dark mode navbar
        });
        document.documentElement.setAttribute("data-bs-theme","dark") // Using data-bs-theme to change all elements to dark mode
    } else { // Switching to light mode if the switch is untoggled
        document.querySelectorAll('.navbar-dark').forEach((element) =>{
            element.className = element.className.replace(/-dark/g, '-light');
        }); 
        document.documentElement.setAttribute("data-bs-theme","light")  
    }
}
function highContrast() {
    if (document.getElementById("hc-toggle").checked){
        if (document.getElementById("dm-toggle").checked){ 
            console.log("dark mode toggled");
            document.getElementById('dm-toggle').checked = false;
            darkMode(); // Dark mode makes high contrast mode have much less contrast, so disabling dark mode
        }
        // Changing navbar colours
        document.querySelectorAll('.navbar').forEach((element) =>{
            element.className = element.className.replace('navbar-light', 'navbar-hc')
            element.className = element.className.replace('navbar-dark', 'navbar-hc')
            console.log(element.className)
        }); 
        if (location.pathname === "/index.html") {
            var compLogoOld = document.getElementById("comp-logo").style;
            console.log(compLogoOld)
            var compLogo = compLogoOld
            compLogo.backgroundColor = "rgba(0, 0, 0, 0.01)";
            // CSS filters target transparent pixels so the opacity needs to change.
            compLogo.filter = "brightness(0%) invert(100%)";
            // Changing the background color to white with 100% transparency
            compLogo.backgroundColor = "rgba(0, 0, 0, 0)";
            // Changing home page styles
            var compThinkIntroOld = document.getElementById("comp-think-intro").style;
            var compThinkIntro = compThinkIntroOld; // There is got to be a more efficient way of doing this...
            compThinkIntro.backgroundImage = "none";
            compThinkIntro.backgroundColor = "#000000";
            compThinkIntro.borderStyle = "solid";
            var algorithmsOld = document.getElementById("algorithms").style;
            var algorithms = algorithmsOld;
            algorithms.backgroundColor = "#000000";
            algorithms.borderStyle = "solid";
            var graphsOld = document.getElementById("graphs").style;
            var graphs = graphsOld;
            graphs.backgroundColor = "#000000";
            graphs.borderStyle = "solid";
            var complexityOld = document.getElementById("complexity").style;
            var complexity = complexityOld;
            complexity.backgroundColor = "#000000";
            complexity.borderStyle = "solid" ;
            var recursionOld = document.getElementById("recursion").style;
            var recursion = recursionOld;
            recursion.backgroundColor = "#000000";
            recursion.borderStyle = "solid" ;
            document.querySelectorAll('.btn-primary').forEach((element) =>{
                element.className = "btn btn-lg btn-hc";        
            });
        }
        else {
            var maincontentold = document.getElementById("maincontent").style;
            var maincontent = maincontentold
            maincontent.backgroundColor = "#000000";
            maincontent.color = "#FFFFFF"
            maincontent.borderStyle = "solid" ;
        }
        
        

    }
    else {
        if (document.getElementById("dm-toggle").checked) { // Restoring non high contrast styles
            document.querySelectorAll('.navbar').forEach((element) =>{
                element.className = element.className.replace('navbar-hc', 'navbar-dark');// Switch to dark mode navbar style if switch is on
            });
        } else { 
            document.querySelectorAll('.navbar').forEach((element) =>{
                element.className = element.className.replace('navbar-hc', 'navbar-light');
            });  
        }
        // Reverting changes to the content of the page
        if (location.pathname === "/index.html") {
            document.getElementById("comp-logo").style = compLogoOld;
            document.getElementById("comp-think-intro").style = compThinkIntroOld;
            document.getElementById("algorithms").style = algorithmsOld;
            document.getElementById("graphs").style = graphsOld;
            document.getElementById("complexity").style = complexityOld;
            document.getElementById("recursion").style = recursionOld;
            document.querySelectorAll('.btn-hc').forEach((element) =>{
                element.className = "btn btn-primary btn-lg";        
            });
        }
        else {
            document.getElementById("maincontent").style = maincontentold
        }
    }
}
