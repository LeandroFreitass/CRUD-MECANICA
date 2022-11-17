import { FaCar, FaHome, FaUser, FaToolbox, FaMoneyBill, FaCarCrash } from 'react-icons/fa';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'home',
		label: 'Home',
		path: '/',
		icon: <FaHome />
	},
	{
		key: 'clientes',
		label: 'Cadastro Clientes',
		path: '/clientes',
		icon: <FaUser />
	},
	{
		key: 'veiculos',
		label: 'Cadastro Veiculos',
		path: '/veiculos',
		icon: <FaCar />
	},
	{
		key: 'ordemDeServico',
		label: 'Ordem De Serviço',
		path: '/ordemDeServico',
		icon: <FaMoneyBill />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <FaCar />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <FaCar />
	}
]
