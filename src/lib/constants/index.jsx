import { FaCar, FaHome, FaUser, FaMoneyBill, FaTicketAlt} from 'react-icons/fa';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'home',
		label: 'Ticket',
		path: '/',
		icon: <FaTicketAlt />
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
		key: 'entrarUsuario',
		label: 'Fazer login',
		path: '/entrarusuario',
		icon: <FaCar />
	},
	{
		key: 'registrarUsuario',
		label: 'Registrar-se',
		path: '/registrarusuario',
		icon: <FaCar />
	},
	
	{
		key: 'usuarios',
		label: 'Config Usuario',
		path: '/usuarios',
		icon: <FaCar />
	}
]
