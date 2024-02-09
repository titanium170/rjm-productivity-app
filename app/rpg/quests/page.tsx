import { getQuests } from '@/app/rpg/actions';
import AddQuest from './add-quest';
import Panel from '@/app/_components/ui/panel';
import Text from '@/app/_components/ui/text';
import { Quest } from './quests';
import Header from '@/app/_components/ui/header';


const QuestList = ({quests}: { quests: Quest[] }) => (
    quests.map(quest => (
        <li>
            <Text>{quest.title}</Text>
            <Text>{quest.objective}</Text>
        </li>
    ))
)


export default async function Quests() {
    const quests = await getQuests();

    return (
        <>
            <Panel outerClassNames='w-96'>
                <Header>Quest info</Header>
                {/* <AddQuest /> */}
                <ul className='p-6'>
                    <QuestList quests={quests}/>
                </ul>
            </Panel>
        </>
    )
}