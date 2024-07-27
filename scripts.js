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

            // Populate Skills section
            const skillsSection = document.querySelector('#skills .list-group');
            skillsSection.innerHTML += data.skills.map(skill => `
                <li class="list-group-item">${skill}</li>
            `).join('');

            // Populate Certifications section
            const certificationsSection = document.querySelector('#certifications .list-group');
            certificationsSection.innerHTML += data.certifications.map(cert => `
                <li class="list-group-item">${cert}</li>
            `).join('');

            // Populate Achievements section
            const achievementsSection = document.querySelector('#achievements .list-group');
            achievementsSection.innerHTML += data.achievements.map(achievement => `
                <li class="list-group-item">${achievement}</li>
            `).join('');
        })
        .catch(error => console.error('Error loading content:', error));
});
