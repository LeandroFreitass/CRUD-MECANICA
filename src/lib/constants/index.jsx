import { FaCar, FaHome, FaUser, FaMoneyBill, FaTicketAlt} from 'react-icons/fa';
import AuthService from './services/AuthService'


export function Index() {

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
	
 DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
		const [currentUser, setCurrentUser] = useState(undefined);
	
		useEffect(() => {
			const user = AuthService.getCurrentUser();
			if(user){
				setCurrentUser(user);
			}
		},[]);
	
		
		
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
		},
	
		
		
		{currentUser ? ({
			key: 'logout',
			label: 'Fazer logout',
			path: '/logout',
			icon: <FaCar />
		}) : ({
			key: 'login',
			label: 'Fazer login',
			path: '/login',
			icon: <FaCar />
		}
	)},
	
		]
	

}

