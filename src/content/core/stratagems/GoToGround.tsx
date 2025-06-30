import { Stratagem } from '../../../components/Stratagem';

export default function GoToGround() {
  return (
    <Stratagem
      name='Go To Ground'
      cost={1}
      detatchment='Core'
      type='Battle Tactic'
      timing='enemy'
      when="Your opponent's Shooting phase, just after an enemy unit has selected its targets."
      target="One INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks."
      effect='Until the end of the phase, all models in your unit have a 6+ invulnerable save and have the Benefit of Cover.'
    />
  );
}
