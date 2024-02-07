import { getQuests } from '@/app/rpg/actions';
import AddQuest from './add-quest';

export default async function Quests() {
    // what's the correct way to handle fetching data and transform etc?
    // i.e. the next js way
    // service in the same directory, or call to backend? how?
    const quests = await getQuests();
    const QuestList = () => (
        quests.map(quest => (
            <li>
                <p>{quest.title}</p>
                <p>{quest.objective}</p>
            </li>
        ))
    )

    return (
        <>
            <h1>Quests page</h1>
            <AddQuest />
            <ul>
                <QuestList />
            </ul>
        </>
    )
}