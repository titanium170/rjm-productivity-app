'use server'
import * as fs from 'node:fs/promises';
import { Quest } from './quests';
const questStorePath = '/app/rpg/quests/quests.json';


async function getQuestData(): Promise<{quests: Quest[]}> {
    const questFileData = await fs.readFile(process.cwd() + questStorePath, 'utf8');
    const questDataObj = JSON.parse(questFileData); 
    return questDataObj;
}
 

async function writeQuestData(quests: Quest[]): Promise<void> {
    const questJson = JSON.stringify({quests});
    await fs.writeFile(process.cwd() + questStorePath, questJson, 'utf-8');
}

export default {
    writeQuestData,
    getQuestData
};