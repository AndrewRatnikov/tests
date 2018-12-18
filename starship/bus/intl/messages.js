import merge from 'deepmerge';

import { messages as navMes } from '../../components/Nav/messages';
import { messages as bridgewMes } from '../../components/Bridge/messages';
import { messages as panelMessages } from '../../components/Panel/messages';
import { messages as starshpTileMessages } from '../../components/StarshipTile/messages';
import { messages as starshipMessages } from '../../components/Starship/messages';
import { messages as profileMessages } from '../../components/Profile/messages';

export const messages = merge.all([
    navMes,
    bridgewMes,
    panelMessages,
    starshpTileMessages,
    starshipMessages,
    profileMessages,
]);
