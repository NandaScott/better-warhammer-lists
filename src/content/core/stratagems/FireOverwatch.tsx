import { Stratagem } from '../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface FireOverwatchProps extends Simplified, PhaseOnly, TurnOnly {}

export default function FireOverwatch(props: FireOverwatchProps) {
  const { simplified, phase, turn } = props;

  if (turn === 'Your Turn') return null;

  if (
    phase === 'Command Phase' ||
    phase === 'Fight Phase' ||
    phase === 'Shooting Phase'
  )
    return null;

  if (simplified) {
    return (
      <Stratagem
        name='Fire Overwatch'
        subtitle='Fire at an enemy in response to movement'
        cost={1}
        detatchment='Core'
        type='Strategic Ploy'
        timing='enemy'
        when="Your opponent's Movement or Charge phase, just after an enemy unit is set up or when an enemy unit starts or ends a Normal, Advance or Fall Back mvoe or declares a Charge."
        target='One unit from your army (excluding TITANIC units) that is within 24" of that enemy unit that would be eligible to shoot if it were your Shooting phase.'
        effect='If that enemy unit is visible to your unit, your unit can shoot that enemy unit as if it were your Shooting phase.'
        restrictions="You cannot target a TITANIC unit with this Stratagem. Until the end of the phase, each time a model in your unit makes a ranged attack, an unmodified Hit roll of 6 is required to score a hit, irrespective of the attack weapon's Ballistic Skill or any modifiers. You can only use this Stratagem once per turn."
      />
    );
  }

  return (
    <Stratagem
      name='Fire Overwatch'
      subtitle='Fire at an enemy in response to movement'
      cost={1}
      detatchment='Core'
      type='Strategic Ploy'
      timing='enemy'
      when="Your opponent's Movement or Charge phase, just after an enemy unit is set up or when an enemy unit starts or ends a Normal, Advance or Fall Back mvoe or declares a Charge."
      target='One unit from your army (excluding TITANIC units) that is within 24" of that enemy unit that would be eligible to shoot if it were your Shooting phase.'
      effect='If that enemy unit is visible to your unit, your unit can shoot that enemy unit as if it were your Shooting phase.'
      restrictions="You cannot target a TITANIC unit with this Stratagem. Until the end of the phase, each time a model in your unit makes a ranged attack, an unmodified Hit roll of 6 is required to score a hit, irrespective of the attack weapon's Ballistic Skill or any modifiers. You can only use this Stratagem once per turn."
    />
  );
}
