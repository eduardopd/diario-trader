import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Resumo from './pages/resumos/resumo';
import Emocional from './pages/resumos/emocional/emocional';
import Mercado from './pages/resumos/mercado/mercado';
import Operacional from './pages/resumos/operacional/operacional';

const AppNavigator = createStackNavigator({
    Main, Resumo, Emocional, Mercado, Operacional
 });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;