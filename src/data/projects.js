import { FaReact,FaSass,FaFigma, FaNodeJs, FaRProject } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import { AiFillApi } from 'react-icons/ai'
import { DiMongodb } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'

export const projectData = [
    {
      name: 'Your Specialist',
      image: 'images/projects/project_6.png',
      description: 'Jelenleg aktív projektem, ami szakemberek település és szakma szerinti keresését teszi lehetővé, és az ehhez szükséges funkciókat valósítja meg. Mivel a projekt kb 60%-os ezért a linkek nem aktívak még.',
      deploy_link: '/',
      github_link: '/',
      tech_tags: [{ icon: <FaReact className='icon' />, name: 'React'},{ icon: <SiRedux className='icon' />, name: 'Redux'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}, { icon: <FiFramer className='icon'/>, name: 'Framer Motion'},{ icon: <FaNodeJs className='icon' />, name: 'NodeJs'},{ icon: <DiMongodb className='icon' />, name: 'MongoDB'}]
    },
    {
      name: 'Gym site',
      image: 'images/projects/project_1.png',
      description: 'Egyoldalas weboldal megoldás egy kitalált edzőterem számára. Az oldal tartalmaz egy reszponzív navigációs menüt, informácios kártyákat, és egy kapcsolat formot.',
      deploy_link: 'https://kristof-gym-2.netlify.app',
      github_link: 'https://github.com/Gkristof96/Brand_v2',
      tech_tags: [{ icon: <FaReact className='icon' />, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}, { icon: <FiFramer className='icon'/>, name: 'Framer Motion'}]
    },
    {
      name: 'Todo app',
      image: 'images/projects/project_2.png',
      description: 'Az elvégzendő fontos teendőink nyilvántartására, és kezelésére használható webes alkalmazás, lehetőség van új teendők hozzáadására, a meglévők törlésére, vagy elvégzetre állítására.',
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
      name: 'Old Gym site',
      image: 'images/projects/project_5.png',
      description: 'Régebbi verzió az egyoldalas fiktiv edzőtermi weboldalra, reszponzív navigációs menü, információs kártyák, üzenetküldő formot tartalmaz.',
      deploy_link: 'https://kristof-gym.netlify.app',
      github_link: 'https://github.com/Gkristof96/Brand',
      tech_tags: [{ icon: <FaReact className='icon'/>, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}]
    },
    {
      name: 'Old Portfolio',
      image: 'images/projects/project_4.png',
      description: 'Ennek a portfolió oldalnak a régebbi verziója, egyszerűbb, de reszponzív designal, kontakt űrlappal.',
      deploy_link: 'https://kristof-portfolio.netlify.app',
      github_link: 'https://github.com/Gkristof96/Portfolio',
      tech_tags: [{ icon: <FaReact className='icon'/>, name: 'React'}, { icon: <FaSass className='icon'/>, name: 'SCSS'},{ icon: <FaFigma className='icon'/>, name: 'Figma'}]
    },
];