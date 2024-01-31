import { promises as fs } from 'fs';

export default async function Quests() {
    const getQuests = async () => {
        const filePath = '/app/rpg/quests/quests.json';

        const questFileData = await fs.readFile(process.cwd() + filePath, 'utf8');
        const questDataObj = JSON.parse(questFileData); 
        console.log('quests: ', questDataObj.quests);
        // return [{ title: 'foo', objective: 'bar'}]
        return questDataObj.quests;

    }


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
            <ul>
                <QuestList />
            </ul>
        </>
    )
}