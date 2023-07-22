import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://suhas991.github.io/Suhas-folio/',
  title: '‽Ο.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'SUHAS N H',
  role: 'Full Stack Developer',
  description:
    'A dynamic coder at NMIT, crafting digital realms with a passion for both frontend finesse and backend wizardry.',
  resume: 'https://drive.google.com/file/d/1NnvRNeSYRDmZeMbmB46KpihxqdJ9qmL3/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/suhas-n-h-101610205/',
    github: 'https://github.com/suhas991',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Crypt Cabs',
    description:
      'CryptCabs is a revolutionary blockchain-based mobility platform that aims to transform the traditional riding system by introducing decentralization and security to the taxi industry. The platforms primary goal is to offer a hassle-free and user-centric taxi service, providing a seamless experience for both passengers and drivers.',
    stack: ['React.js', 'Solidity','BlockChain','express','nodejs','Google Map API'],
    sourceCode: 'https://github.com/suhas991/CrytoCabs',
  },
  {
    name: 'Crypt Store',
    description:
      'CryptStore is an innovative and decentralized marketplace that operates on the Ethereum blockchain, allowing users to buy tokens and NFTs (Non-Fungible Tokens) based on their preferences and desires. CryptStore offers a seamless and secure platform for users to explore, purchase, and trade various digital assets.',
    stack: ['React.js','express','nodejs','Blockchain', 'MongoDB'],
    sourceCode: 'https://github.com/suhas991/CryptStore',
  },
  {
    name: 'Robo Craft',
    description:
      'RoboCraft is an web application that serves as a showcase platform for a robotic workshop. The website aims to promote and display the various robotic innovations developed within the workshop.RoboCraft provides a seamless and interactive user experience, allowing visitors to explore the world of robotics.',
    stack: ['React,js', 'Express', 'Node.js','NodeMailer','MongoDB'],
    sourceCode: 'https://github.com/anmaya1/RoboCraft_be',
  },
  {
    name: 'Transmission Tech',
    description:
      'The Transmission Tech Webpage is a dynamic and informative website designed to showcase and highlight the innovative transmission technologies developed by our company. As a leading player in the automotive industry, we aim to present our cutting-edge solutions, research, and developments in a user-friendly and visually appealing manner.',
    stack: ['HTML', 'CSS', 'Javascript','Bootstrap'],
    sourceCode: 'https://github.com/suhas991/TransmissionTech',
    
  },
  {
    name: 'Grow-More',
    description:
      'Grow More is a static stock market project designed to provide users with a user-friendly and informative platform to explore and analyze stock market data. The project aims to offer a simplified interface for tracking stock prices, historical data, and visualizing trends, empowering users to make informed investment decisions.',
    stack: ['C++','File-Handling'],
    sourceCode: 'https://github.com/suhas991/Grow-more',
  },
  {
    name: 'Venture Tank',
    description:
      'Venture Tank is a front-end web application designed to showcase and promote an initiative taken by the Computer Science Department. The main objective of the initiative is to encourage students from all branches to present their innovative ideas. The web application serves as an online platform for participants and visitors to explore and engage with the event.',
    stack: ['Vue.js','Bootstrap'],
    sourceCode: 'https://github.com/suhas991/VentureTank',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vue',
  'Express',
  'MySQL',
  'MongoDB',
  'C/C++',
  'Node',
  'MERN',
  'Git',
  'Vscode',
  'Java',
  'Python',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'suhas4497@gmail.com',
}

export { header, about, projects, skills, contact }
