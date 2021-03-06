import {IProjectCard} from '../IProjectCard';
import {Tags} from '../Tags';
import {CardName} from '../../CardName';
import {CardType} from '../CardType';
import {Player} from '../../Player';
import {Resources} from '../../Resources';
import {Game} from '../../Game';
import {PartyName} from '../../turmoil/parties/PartyName';
import {PlaceCityTile} from '../../deferredActions/PlaceCityTile';
import {SendDelegateToArea} from '../../deferredActions/SendDelegateToArea';

export class CulturalMetropolis implements IProjectCard {
    public cost = 20;
    public tags = [Tags.CITY, Tags.STEEL];
    public name = CardName.CULTURAL_METROPOLIS;
    public cardType = CardType.AUTOMATED;

    public canPlay(player: Player, game: Game): boolean {
      if (game.turmoil !== undefined) {
        // This card requires player has 2 delegates available
        return game.turmoil.canPlay(player, PartyName.UNITY) && player.getProduction(Resources.ENERGY) >= 1 && (game.turmoil.getDelegates(player.id) > 1 || (game.turmoil.getDelegates(player.id) === 1 && game.turmoil.lobby.has(player.id)));
      }
      return false;
    }

    public play(player: Player, game: Game) {
      player.addProduction(Resources.ENERGY, -1);
      player.addProduction(Resources.MEGACREDITS, 3);
      game.defer(new PlaceCityTile(player, game));
      const title = 'Select where to send two delegates';

      if (game.turmoil!.getDelegates(player.id) > 1) {
        game.defer(new SendDelegateToArea(player, game, title, 2, undefined, undefined, false));
      } else if (game.turmoil!.getDelegates(player.id) === 1 && game.turmoil!.lobby.has(player.id)) {
        game.defer(new SendDelegateToArea(player, game, title, 2, undefined, undefined, true));
      }
      return undefined;
    }
}
