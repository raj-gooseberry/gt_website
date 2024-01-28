import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-1 gap-4 dark:text-tertiary-100 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {teams.map(({ name, occupation, image, items }, index) => (
          <div key={`item-team-${index}`} className="p-2">
            <ItemTeam
              name={name}
              occupation={occupation}
              image={image}
              items={items}
              containerClass=""
              imageClass="h-72 w-60 rounded-md object-cover shadow-lg bg-dark-500 dark:bg-dark-700"
              panelClass="relative mt-3 text-center"
              nameClass="mb-1.5 text-xl font-bold"
              occupationClass="mb-7 text-base font-medium capitalize text-dark-600 dark:text-dark-400"
              itemsClass="absolute right-[-10px] top-[-290px] block list-none rounded-md bg-tertiary-100/70 shadow-[0_0_8px_rgba(0,0,0,0.2)] backdrop-blur-sm dark:bg-tertiary-100/40"
            />
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default Team;
