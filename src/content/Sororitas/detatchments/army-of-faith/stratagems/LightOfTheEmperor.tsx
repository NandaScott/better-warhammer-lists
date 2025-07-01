import { Stratagem } from '../../../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
} from '../../../../../interfaces/game-concepts';

interface LightOfTheEmperorProps extends Simplified, PhaseOnly {}

export default function LightOfTheEmperor(props: LightOfTheEmperorProps) {
  const { simplified, phase } = props;

  if (phase !== 'Command Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Light of the Emperor'
        subtitle="Ignore modifications to your unit's datasheets"
        cost={1}
        detatchment='Army of Faith'
        type='Battle Tactic'
        timing='any'
        when='Command phase.'
        target='One ADEPTA SORORITAS unit from your army.'
        effect='Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws). If your unit has the JUMP PACK keyword, until end of turn, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, that friendly unit is also blessed.'
      />
    );
  }

  return (
    <Stratagem
      name='Light of the Emperor'
      subtitle="Ignore modifications to your unit's datasheets"
      cost={1}
      detatchment='Army of Faith'
      type='Battle Tactic'
      timing='any'
      when='Command phase.'
      target='One ADEPTA SORORITAS unit from your army.'
      effect='Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws). If your unit has the JUMP PACK keyword, until end of turn, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, that friendly unit is also blessed.'
    />
  );
}
