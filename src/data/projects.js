import { FaReact,FaSass,FaFigma } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import { AiFillApi } from 'react-icons/ai'

export const projectData = [
    {
      name: 'Brand site',
      image: 'images/projects/project_1.png',
      description: 'Egyszerű egylapos weboldal megoldás egy fiktiv edzőterem számára. Az oldal tartalmaz egy reszponzív navigációs menüt, informácios kártyákat, és egy kapcsolat formot.',
      deploy_link: 'https://kristof-gym-2.netlify.app',
      github_link: 'https://github.com/Gkristof96/Brand_v2',
      tech_tags: [{ icon: <FaReact className='icon' />, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}, { icon: <FiFramer className='icon'/>, name: 'Framer Motion'}]
    },
    {
      name: 'Todo app',
      image: 'images/projects/project_2.png',
      description: 'Feladatlista a teendőink összeírására, egyszerű kezelőfelülettel. Három alapvető funkcióval, ezek a feladat hozzáadása, törlése, és becsekkolása',
      deploy_link: 'https://kristof-todo.netlify.app',
      github_link: 'https://github.com/Gkristof96/Todo-app',
      tech_tags: [{ icon: <FaReact className='icon' />, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}]
    },
    {
      name: 'Weather app',
      image: 'images/projects/project_3.png',
      description: 'Időjárás lekérdező alkalmazás, amely képes megmutatni az aktuális időjárási viszonyokat településenként. Az adatok forrása az OpenWeather Api.',
      deploy_link: 'https://kristof-weather.netlify.app',
      github_link: 'https://github.com/Gkristof96/Weather-app',
      tech_tags: [{ icon: <FaReact className='icon'/>, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'},{ icon: <AiFillApi className='icon'/>, name: 'OpenWeather API'}]
    },
    {
      name: 'Old Brand site',
      image: 'images/projects/project_5.png',
      description: 'Régebbi, egyszerűbb verzió a fiktiv edzőterem egylapos weboldal megvalósítására, reszponzív navigációs menü, információs kártyák, üzenetküldő formot tartalmaz.',
      deploy_link: 'https://kristof-gym.netlify.app',
      github_link: 'https://github.com/Gkristof96/Brand',
      tech_tags: [{ icon: <FaReact className='icon'/>, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}]
    },
    {
      name: 'Old Portfolio',
      image: 'images/projects/project_4.png',
      description: 'Ennek a portfolió oldalnak a korábbi verziója, reszponzív megjelenítés, és egyszerűbb design jellemzi.',
      deploy_link: 'https://kristof-portfolio.netlify.app',
      github_link: 'https://github.com/Gkristof96/Portfolio',
      tech_tags: [{ icon: <FaReact className='icon'/>, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}]
    },
];