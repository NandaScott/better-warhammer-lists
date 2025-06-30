import { Stratagem } from '../../../components/Stratagem';

export default function CommandReRoll() {
  return (
    <Stratagem
      name='Command Re-Roll'
      cost={1}
      detatchment='Core'
      type='Battle Tactic'
      timing='any'
      when='Any phase, just after you make an Advance roll, a Charge roll, a Desperate Escape test, or a Hazardous test for a unit from your army, or a Hit roll, a Wound roll, a Damage roll or a saving throw for a model in that unit, or a roll to determine the number of attacks made with a weapon equipped by a model in that unit. If you are using fast dice rolling, this Stratagem can still be used after rolling multiple rolls or saving throws at once.'
      target='That unit or model from your army.'
      effect='You re-roll that roll, test or saving throw. If you are using fast dice rolling, select one of those rolls or saving throws to re-roll.'
    />
  );
}
