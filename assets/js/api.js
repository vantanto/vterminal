import config from '../../../config.js';

export const getProjects = async () => {
  const data = await fetch(`https://api.github.com/users/${config.social.github}/repos`)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

export const getReadme = async () => {
  const data = await fetch(config.readmeUrl)
    .then((response) => response.text())
    .then((data) => data);
  return data;
};

export const getWeather = async (city) => {
  try {
    const data = await fetch(`https://wttr.in/${city}?ATm`)
      .then((response) => response.text())
      .then((data) => data);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const data = await fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => data);
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};