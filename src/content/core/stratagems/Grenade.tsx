import { Stratagem } from '../../../components/Stratagem';

export default function Grenade() {
  return (
    <Stratagem
      name='Grenade'
      cost={1}
      detatchment='Core'
      type='Wargear'
      timing='you'
      when='Your shooting phase.'
      target='One GRENADES unit from your army (excluding units that Advanced, Fell Back, or have shot this turn) that is not within Engagement Range of one or more enemy units.'
      effect='Select one GRENADES model in your unit and one enemy unit that is not within Engagement Range of one or more units from your army and is within 8" of and visible to your GRENADES model. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.'
    />
  );
}
