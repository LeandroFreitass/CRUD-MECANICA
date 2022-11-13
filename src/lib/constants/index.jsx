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
		key: 'mecanico',
		label: 'Cadastro Mecanicos',
		path: '/mecanico',
		icon: <FaToolbox />
	},
	{
		key: 'defeitoseserviços',
		label: 'Defeitos e Serviços',
		path: '/DefeitoseServiços',
		icon: <FaCarCrash />
	},
	{
		key: 'orcamentos',
		label: 'Orçamentos',
		path: '/orcamentos',
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
