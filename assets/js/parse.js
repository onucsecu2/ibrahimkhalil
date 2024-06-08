fetch("")
    .then(response => response.text())
    .then(data => {
        // const yamlContentElement = document.getElementById("yaml-content");
        // yamlContentElement.textContent = data;
        console.log(data)
    })
    .catch(error => {
        console.error("Error loading YAML file:", error);
        // const yamlContentElement = document.getElementById("yaml-content");
        // yamlContentElement.textContent = "Error loading YAML file";
    });