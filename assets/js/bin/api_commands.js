// // List of commands that require API calls

import { getProjects } from '../api.js';
import { getQuote } from '../api.js';
import { getReadme } from '../api.js';
import { getWeather } from '../api.js';

export const projects = async (args) => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args) => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args) => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args) => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
