import { Stratagem } from '../../../components/Stratagem';

import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface InsaneBraveryProps extends Simplified, PhaseOnly, TurnOnly {}

export default function InsaneBravery(props: InsaneBraveryProps) {
  const { simplified, phase, turn } = props;

  if (turn !== 'Your Turn' && phase !== 'Command') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Insane Bravery'
        subtitle='Automatically pass a Battle-shock test'
        cost={1}
        detatchment='Core'
        type='Epic Deed'
        timing='you'
        when='Battle-shock step of your Command phase, just before you take a Battle-shock test for a unit from your army.'
        target='That unit from your army.'
        effect='Your unit automatically passes that Battle-shock test.'
        restrictions='You cannot use this Stratagem more than once per battle.'
      />
    );
  }

  return (
    <Stratagem
      name='Insane Bravery'
      subtitle='Automatically pass a Battle-shock test'
      cost={1}
      detatchment='Core'
      type='Epic Deed'
      timing='you'
      when='Battle-shock step of your Command phase, just before you take a Battle-shock test for a unit from your army.'
      target='That unit from your army.'
      effect='Your unit automatically passes that Battle-shock test.'
      restrictions='You cannot use this Stratagem more than once per battle.'
    />
  );
}
