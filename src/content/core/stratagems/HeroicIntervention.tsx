import { Stratagem } from '../../../components/Stratagem';

export default function HeroicIntervention() {
  return (
    <Stratagem
      name='Heroic Intervention'
      cost={1}
      detatchment='Core'
      type='Strategic Ploy'
      timing='enemy'
      when="Your opponent's Charge phase, just after an enemy unit ends a Charge move."
      target='One unit from your army that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit as if it were your Charge phase.'
      effect='Your unit now declares a charge that targets only that enemy unit, and you resolve the charge as if it were your Charge phase.'
      restrictions='You can only select a VEHICLE unit from your army if it is a WALKER. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.'
    />
  );
}
