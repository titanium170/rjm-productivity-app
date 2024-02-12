'use server'
import { Quest } from './quests/quests';
import { revalidatePath } from 'next/cache';
import store from './quests/quest-store';

export async function createQuest(formData: FormData): Promise<Quest> {
    const title: string = formData.get('questTitle') as string;
    const objective: string = formData.get('questObj') as string;


    if (!title || !objective) {
        throw new Error('Required fields are null or empty');
    }


    const quests = await getQuests();
    const questCount = quests.length;
    const lastId = questCount ? quests[questCount - 1].id : 0;
    const newQuest: Quest = {
        id: lastId + 1,
        title,
        objective
    };
    quests.push();
    await store.writeQuestData(quests);
    revalidatePath('/quests');
    return newQuest;
}


export async function getQuests(): Promise<Quest[]> {
    const questDataObj = await store.getQuestData();
    return questDataObj.quests ?? [];
}


export async function completeQuest(id: number): Promise<Quest> {
    const quests = await getQuests();
    const matchingQuest = quests.find(quest => quest.id === id);

    if (!matchingQuest) {
        throw new Error('Quest not found');
    }

    matchingQuest.complete = true;
    await store.writeQuestData(quests);

    return matchingQuest;
}

