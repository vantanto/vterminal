// List of commands that do not require API calls

import * as bin from './index.js';
import config from '../../../config.js';

// Help
export const help = (args) => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = (args) => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = (args) => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = (args) => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = (args) => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = (args) => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = (args) => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = (args) => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = (args) => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = (args) => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = (args) => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = (args) => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = (args) => {
  return args.join(' ');
};

export const whoami = (args) => {
  return `${config.ps1_username}`;
};

export const ls = (args) => {
  return `a
bunch
of
fake
directories`;
};

export const cd = (args) => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = (args) => {
  return new Date().toString();
};

export const vi = (args) => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = (args) => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = (args) => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = (args) => {
  return `you know what? just use vscode.`;
};

export const sudo = (args) => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args) => {
  return `
  █████   █████                      ███████████                       █████            
  ░░███   ░░███                      ░█░░░███░░░█                      ░░███             
   ░███    ░███   ██████   ████████  ░   ░███  ░   ██████   ████████   ███████    ██████ 
   ░███    ░███  ░░░░░███ ░░███░░███     ░███     ░░░░░███ ░░███░░███ ░░░███░    ███░░███
   ░░███   ███    ███████  ░███ ░███     ░███      ███████  ░███ ░███   ░███    ░███ ░███
    ░░░█████░    ███░░███  ░███ ░███     ░███     ███░░███  ░███ ░███   ░███ ███░███ ░███
      ░░███     ░░████████ ████ █████    █████   ░░████████ ████ █████  ░░█████ ░░██████ 
       ░░░       ░░░░░░░░ ░░░░ ░░░░░    ░░░░░     ░░░░░░░░ ░░░░ ░░░░░    ░░░░░   ░░░░░░  

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

export const theme = (args) => {
  if (args == "") {
    args = $("body").hasClass("dark") ? "light" : "dark";
  }
  if (args == "dark" || args == "light") {
    $("body").attr("class", args);
    return `${args} theme applied`;
  } else {
    return 'Only dark and light themes available';
  }
}
