import { Stratagem } from '../../../../../components/Stratagem';
import type { Simplified } from '../../../../../interfaces/game-concepts';

interface ShieldOfFaithProps extends Simplified {}

export default function ShieldOfFaith(props: ShieldOfFaithProps) {
  const { simplified } = props;

  if (simplified) {
    return (
      <Stratagem
        name='Shield of Faith'
        subtitle='After a mortal wound: Feel No Pain 5+'
        cost={1}
        detatchment='Army of Faith'
        type='Battle Tactic'
        timing='any'
        when='Any phase, just after an ADEPTA SORORITAS unit from your army suffers a mortal wound.'
        target='That ADEPTA SORORITAS unit, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3" of it.'
        effect='Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.'
      />
    );
  }

  return (
    <Stratagem
      name='Shield of Faith'
      subtitle='After a mortal wound: Feel No Pain 5+'
      cost={1}
      detatchment='Army of Faith'
      type='Battle Tactic'
      timing='any'
      when='Any phase, just after an ADEPTA SORORITAS unit from your army suffers a mortal wound.'
      target='That ADEPTA SORORITAS unit, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3" of it.'
      effect='Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.'
    />
  );
}
