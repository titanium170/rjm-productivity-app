import { getQuests } from '@/app/rpg/actions';
import AddQuest from './add-quest';
import Panel from '@/app/_components/ui/panel';
import Text from '@/app/_components/ui/text';
import { Quest } from './quests';
import Header from '@/app/_components/ui/header';
import QuestWithObjectives from './quest-with-objectives';


const QuestList = ({quests}: { quests: Quest[] }) => (
    <ul className='p-6'>
        {quests.map(quest => (
            <li key={quest.title} className='pb-2'>
                <QuestWithObjectives quest={quest} />
            </li>
        ))}
    </ul>
);


export default async function Quests() {
    const quests = await getQuests();

    return (
        <>
            <Panel outerClassNames='w-96'>
                <Header>Quest info</Header>
                {/* <AddQuest /> */}
                <QuestList quests={quests} />
            </Panel>
        </>
    )
}