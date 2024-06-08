fetch("https://raw.githubusercontent.com/onucsecu2/onucsecu2.github.io/remaster/assets/data/information.yaml")
    .then(response => response.text())
    .then(data => {
        const yaml = jsyaml.load(data);
        yaml["SECTIONS"].forEach((section) => {

        })
    })
    .catch(error => {
        console.error("Error loading YAML file:", error);
        // const yamlContentElement = document.getElementById("yaml-content");
        // yamlContentElement.textContent = "Error loading YAML file";
    });

