import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiDocker, DiGit, DiJava, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiNpm, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiFigma, SiJest, SiPandas, SiSocketdotio, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';

export const technologies = [
    {
        id:uuidv4(),
        nome:"Html 5",
        icon:<AiFillHtml5/>,
        cor: "#E34F26"
    },
    {
        id:uuidv4(),
        nome:"React",
        icon:<DiReact/>,
        cor: "#61DAFB"
    },
    {
        id:uuidv4(),
        nome:"JavaScript",
        icon:<DiJavascript/>,
        cor: "#F7DF1E"
    },
    {
        id:uuidv4(),
        nome:"Css 3",
        icon:<DiCss3/>,
        cor: "#1572B6"
    },
    {
        id:uuidv4(),
        nome:"Tailwind CSS",
        icon:<SiTailwindcss/>,
        cor: "#06B6D4"
    },
    {
        id:uuidv4(),
        nome:"Next.js",
        icon:<RiNextjsFill/>,
        cor: "#000000"
    },
    {
        id:uuidv4(),
        nome:"React Native",
        icon:<TbBrandReactNative/>,
        cor: "#61DAFB"
    },
    {
        id:uuidv4(),
        nome:"Figma",
        icon:<SiFigma/>,
        cor: "#F24E1E"
    },
    {
        id:uuidv4(),
        nome:"TypeScript",
        icon:<SiTypescript/>,
        cor: "#3178C6"
    },
    {
        id:uuidv4(),
        nome:"Node.js",
        icon:<DiNodejs/>,
        cor: "#339933"
    },
    {
        id:uuidv4(),
        nome:"Express",
        icon:<SiExpress/>,
        cor: "#000000"
    },
    {
        id:uuidv4(),
        nome:"Socket.IO",
        icon:<SiSocketdotio/>,
        cor: "#010101"
    },
    {
        id:uuidv4(),
        nome:"Jest",
        icon:<SiJest/>,
        cor: "#C21325"
    },
    {
        id:uuidv4(),
        nome:"Docker",
        icon:<DiDocker/>,
        cor: "#2496ED"
    },
    {
        id:uuidv4(),
        nome:"Git",
        icon:<DiGit/>,
        cor: "#F05032"
    },
    {
        id:uuidv4(),
        nome:"Npm",
        icon:<DiNpm/>,
        cor: "#CB3837"
    },
    {
        id:uuidv4(),
        nome:"MySQL",
        icon:<DiMysql/>,
        cor: "#4479A1"
    },
    {
        id:uuidv4(),
        nome:"MongoDB",
        icon:<DiMongodb/>,
        cor: "#47A248"
    },
    {
        id:uuidv4(),
        nome:"Postgresql",
        icon:<DiPostgresql/>,
        cor: "#336791"
    },
    {
        id:uuidv4(),
        nome:"Python",
        icon:<DiPython/>,
        cor: "#3776AB"
    },
    {
        id:uuidv4(),
        nome:"Pandas",
        icon:<SiPandas/>,
        cor: "#150458"
    },
    {
        id:uuidv4(),
        nome:"Java",
        icon:<DiJava/>,
        cor: "#007396"
    },
]