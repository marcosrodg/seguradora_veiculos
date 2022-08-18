import React from 'react';
import * as FaIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/Login',
    icon: <AiIcons.AiOutlineLogin />,
    cName: 'nav-text'
  },
  {
    title: 'Socorro 24 horas',
    path: '/help',
    icon: <AiIcons.AiTwotoneAlert />,
    cName: 'nav-text'
  },
  {
    title: 'Cadastrar Veiculo',
    path: '/cadastro',
    icon: <AiIcons.AiTwotoneContainer />,
    cName: 'nav-text'
  },
  {
    title: 'Ajuda',
    path: '/suport',
    icon: <AiIcons.AiOutlineTool />,
    cName: 'nav-text'
  },
  {
    title: 'Quem Somos',
    path: '/sobre',
    icon: <AiIcons.AiFillInfoCircle />,
    cName: 'nav-text'
  },
  
];
