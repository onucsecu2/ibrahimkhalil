const LANG = 'en'
const DEFAULT_LANG = 'en'
const sectionIds = ['aboutme', 'skills', 'cocurriculum', 'education', 'projects']

function getLineWidth(str) {
    return (str.length)*20;
}

function generateSectionHeading(title) {
    const lineWidth = getLineWidth(title).toString();

    let sectionHeadingElement = document.createElement('div');
    sectionHeadingElement.className = 'section-heading';

    let sectionHead = document.createElement('h1');
    sectionHead.textContent = title

    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('height', '4');
    svgElement.setAttribute('width', lineWidth);

    let lineElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineElement.setAttribute('x1', '0');
    lineElement.setAttribute('y1', '0');
    lineElement.setAttribute('x2', lineWidth);
    lineElement.setAttribute('y2', '0');


    svgElement.appendChild(lineElement)
    sectionHeadingElement.appendChild(sectionHead)
    sectionHeadingElement.appendChild(svgElement)
    return sectionHeadingElement
}


function addSectionHeadingElementToSection(sectionHeading, index) {
    let sectionElem = document.getElementById(sectionIds[index]);
    sectionElem.insertBefore(sectionHeading, sectionElem.firstChild);
}

function populateAboutMe(content, contacts) {
    let myselfElem = document.querySelector('#aboutme > div > div > div:nth-child(1)');
    let contactsElem = document.querySelector('#aboutme > div > div > div:nth-child(2)');
    myselfElem.innerHTML = content;

    contacts.forEach((contact) => {
        let iconElem = document.createElement('a');
        iconElem.setAttribute('href', contact.href);
        iconElem.setAttribute('target', '_blank');
        iconElem.innerHTML=contact.icon;
        contactsElem.appendChild(iconElem);
    })
}

fetch('https://raw.githubusercontent.com/onucsecu2/onucsecu2.github.io/remaster/assets/data/information.yaml')
    .then(response => response.text())
    .then(data => {
        const yaml = jsyaml.load(data);
        console.log(yaml)
        yaml['SECTIONS'].forEach((section, index) => {
            const sectionHeading = generateSectionHeading(section.title[LANG]? section.title[LANG]:section.title[DEFAULT_LANG])
            addSectionHeadingElementToSection(sectionHeading, index)
            switch(index) {
                case 0:
                    populateAboutMe(section.content[LANG]? section.content[LANG]:section.content[DEFAULT_LANG],
                        yaml['MISCELLANEOUS']['contacts']
                        )
                    break;
                case 1:
                    // code block
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:
                // code block
            }
        })
        console.log(yaml)
    })
    .catch(error => {
        console.error('Error loading YAML file:', error);
        // const yamlContentElement = document.getElementById('yaml-content');
        // yamlContentElement.textContent = 'Error loading YAML file';
    });

