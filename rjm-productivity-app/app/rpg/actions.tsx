'use server'
import * as fs from 'node:fs/promises';
import { Quest } from './quests/quests';
import { revalidatePath } from 'next/cache';

const questStorePath = '/app/rpg/quests/quests.json';

export async function createQuest(formData: FormData) {
    const title: string = formData.get('questTitle') as string;
    const objective: string = formData.get('questObj') as string;
 

    if (!title || !objective) {
        throw new Error('Required fields are null or empty');
    }

    const newQuest = {
        title,
        objective 
    };
    
    const { quests } = await _getQuestData();
    quests.push(newQuest);
    await _writeQuestData(quests);
    revalidatePath('/quests');
}


export async function getQuests(): Promise<Quest[]> {
    const questDataObj = await _getQuestData();
    return questDataObj.quests;

}

async function _getQuestData(): Promise<{quests: Quest[]}> {
    const questFileData = await fs.readFile(process.cwd() + questStorePath, 'utf8');
    const questDataObj = JSON.parse(questFileData); 
    return questDataObj;
}
 

async function _writeQuestData(quests: Quest[]): Promise<void> {
    const questJson = JSON.stringify({quests});
    await fs.writeFile(process.cwd() + questStorePath, questJson, 'utf-8');
}