import { Stratagem } from '../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface RapidIngressProps extends Simplified, PhaseOnly, TurnOnly {}

export default function RapidIngress(props: RapidIngressProps) {
  const { simplified, phase, turn } = props;

  if (turn === "Opponent's Turn" && phase !== 'Movement Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='RapidIngress'
        subtitle="Deep strike on your opponent's turn"
        cost={1}
        detatchment='Core'
        type='Strategic Ploy'
        timing='enemy'
        when="End of your opponent's Movement phase."
        target='One unit from your army that is in Reserves.'
        effect='Your unit can arrive on the battlefield as if it were the reinforcements step of your Movement phase, and if every model in that unit has the Deep Strike ability, you can set that unit up as described in the Deep Strike ability (even though it is not your Movement phase).'
        restrictions='You cannot use this Stratagem to enable a unit to arrive on the battlefield during a battle round it would not normally be able to do so in.'
      />
    );
  }
  return (
    <Stratagem
      name='RapidIngress'
      subtitle="Deep strike on your opponent's turn"
      cost={1}
      detatchment='Core'
      type='Strategic Ploy'
      timing='enemy'
      when="End of your opponent's Movement phase."
      target='One unit from your army that is in Reserves.'
      effect='Your unit can arrive on the battlefield as if it were the reinforcements step of your Movement phase, and if every model in that unit has the Deep Strike ability, you can set that unit up as described in the Deep Strike ability (even though it is not your Movement phase).'
      restrictions='You cannot use this Stratagem to enable a unit to arrive on the battlefield during a battle round it would not normally be able to do so in.'
    />
  );
}
