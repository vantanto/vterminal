import config from '../../../config.js';

const sumfetch = (args) => {
  if (config.ascii === 'cveinnt' || args == "cveinnt") {
    return `                                                  
             @@@@@@@@@@@@@                  <i class="fa-regular fa-address-card fa-sm"></i> sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@           <i class="fa-solid fa-terminal fa-sm"></i> ABOUT
    @@                           @@         <i class="fa-solid fa-user fa-sm"></i> ${config.name}
  @@                               @@       <i class="fa-solid fa-cube fa-sm"></i> ${config.ps1_hostname}
 @@                         @@@     @@      <i class="fa-solid fa-globe fa-sm"></i> <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     <i class="fa-solid fa-indent fa-sm"></i> <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@     <i class="fa-solid fa-at fa-sm"></i> CONTACT 
 @@           @@          @@        @@      <i class="fa-regular fa-envelope fa-sm"></i> <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@       <i class="fa-brands fa-github fa-sm"></i> <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@        <i class="fa-brands fa-linkedin-in fa-sm"></i> <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 <i class="fa-solid fa-address-card fa-sm"></i> sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            <i class="fa-solid fa-terminal fa-sm"></i> ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           <i class="fa-solid fa-user fa-sm"></i> ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          <i class="fa-solid fa-globe fa-sm"></i> <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       <i class="fa-solid fa-indent fa-sm"></i> <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > V A N T A N T O        ▐▓       <i class="fa-solid fa-at fa-sm"></i> CONTACT 
▐▓                                 ▐▓       <i class="fa-regular fa-envelope fa-sm"></i> <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       <i class="fa-brands fa-github fa-sm"></i> <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          <i class="fa-brands fa-linkedin-in fa-sm"></i> <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};

export default sumfetch;
