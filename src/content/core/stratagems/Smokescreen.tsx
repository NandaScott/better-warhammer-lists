import { Stratagem } from '../../../components/Stratagem';

export default function Smokescreen() {
  return (
    <Stratagem
      name='Smokescreen'
      cost={1}
      detatchment='Core'
      type='Wargear'
      timing='enemy'
      when="Your opponent's Shooting phase, just after an enemy unit has selected its targets."
      target="One SMOKE unit from your army that was selected as the target of one or more of the attacking unit's attacks."
      effect='Until the end of the phase, all models in your unit have the Benefit of Cover and the Stealth ability.'
    />
  );
}
