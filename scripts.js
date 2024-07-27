document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            // Populate Education section
            const educationSection = document.querySelector('#education');
            educationSection.innerHTML += data.education.map(edu => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${edu.degree}</h5>
                        <p class="card-text">${edu.institution}</p>
                        <p class="card-text"><small class="text-muted">${edu.details}</small></p>
                    </div>
                </div>
            `).join('');

            // Populate Work Experience section
            const workExperienceSection = document.querySelector('#work-experience');
            workExperienceSection.innerHTML += data.workExperience.map(work => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${work.jobTitle} - ${work.company}</h5>
                        <p class="card-text">${work.duration}</p>
                        <p class="card-text">${work.description}</p>
                    </div>
                </div>
            `).join('');

            // Populate Projects section
            const projectsSection = document.querySelector('#projects');
            projectsSection.innerHTML += data.projects.map(project => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text"><a href="${project.githubLink}" target="_blank">GitHub</a></p>
                        <p class="card-text">${project.description}</p>
                        <p class="card-text"><small class="text-muted">Tools: ${project.tools.join(', ')}</small></p>
                    </div>
                </div>
            `).join('');

            const programmingLanguagesSection = document.querySelector('#programming-languages');
programmingLanguagesSection.innerHTML += data.technical.programmingLanguages.map(skill => `
    <p class="list-group-item">${skill}</p>
`).join('');

const machineLearningSection = document.querySelector('#machine-learning');
machineLearningSection.innerHTML += data.technical.machineLearning.map(skill => `
    <p class="list-group-item">${skill}</p>
`).join('');

const developerToolsSection = document.querySelector('#developer-tools');
developerToolsSection.innerHTML += data.technical.developerTools.map(skill => `
    <p class="list-group-item">${skill}</p>
`).join('');

const frameworksBasicsSection = document.querySelector('#frameworks-basics');
frameworksBasicsSection.innerHTML += data.technical.frameworksBasics.map(skill => `
    <p class="list-group-item">${skill}</p>
`).join('');

            const softSkillsSection = document.querySelector('#soft-skills');
            softSkillsSection.innerHTML += data.soft.map(skill => `
                <p class="list-group-item">${skill}</p>
            `).join('');

            // Populate Certifications section
            const certTitles = data.certifications.certTitle;
            const certLinks = data.certifications.certLink;
            const certificationsSection = document.querySelector('#certifications .list-group');
            certificationsSection.innerHTML = certTitles.map((title, index) => `
            <li class="list-group-item">
                <a href="${certLinks[index]}" target="_blank">${title}</a>
            </li>
            `).join('');

            

            // Populate Achievements section
            const achiv=data.achievements.hackathons;
            const achivLinks=data.achievements.hackLink;
            const achievementsSection = document.querySelector('#achievements .list-group');
            achievementsSection.innerHTML += achiv.map((title,index) => `
                <li class="list-group-item">
                <a href="${achivLinks[index]}"target="_blank">${title}</a>
                </li>
            `).join('');
            
            //populate  Community activity
            const comunactivaty=document.querySelector('#Community-Activity .list-group');
            comunactivaty.innerHTML+=data.CommunityActivitys.map(ca=> `
                <li class="list-group-item"> ${ca}</li>
                `).join("");


        })
        .catch(error => console.error('Error loading content:', error));
});
